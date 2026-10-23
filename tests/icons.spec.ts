import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { readFileSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

test.beforeEach(async ({ page }) => { await page.goto('/tests/fixture.html?icons'); });

test('checkbox indicators follow native and controlled state, submission, reset and refs', async ({ page }) => {
  const checkbox = page.getByRole('checkbox', { name: 'Native checkbox', exact: true });
  const check = checkbox.locator('..').locator('svg.tabler-icon-check');
  const mixed = page.getByRole('checkbox', { name: 'Mixed checkbox', exact: true });
  const minus = mixed.locator('..').locator('svg.tabler-icon-minus');
  expect((await checkbox.locator('..').boundingBox())!.width).toBe((await checkbox.boundingBox())!.width);
  await expect(check).toHaveCSS('opacity', '1');
  await expect(mixed).toBeChecked({ indeterminate: true });
  await expect(minus).toHaveCSS('opacity', '1');
  await checkbox.focus();
  await page.keyboard.press('Space');
  await expect(checkbox).not.toBeChecked();
  await expect(check).toHaveCSS('opacity', '0');
  await page.getByRole('checkbox', { name: 'Controlled checkbox', exact: true }).check();
  await expect(page.getByRole('checkbox', { name: 'Controlled checkbox', exact: true })).toBeChecked();
  await page.getByRole('combobox', { name: 'Native select', exact: true }).selectOption('b');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await expect(page.locator('output')).toHaveText('{"choice":"b"}');
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await expect(checkbox).toBeChecked();
  await expect(check).toHaveCSS('opacity', '1');
  await expect(page.getByRole('combobox', { name: 'Native select', exact: true })).toHaveValue('a');
  await page.getByRole('button', { name: 'Check refs' }).click();
  await expect(checkbox).toBeFocused();
  await expect(checkbox).toHaveAttribute('data-ref-checked', 'true');
  await expect(page.getByRole('combobox', { name: 'Native select', exact: true })).toHaveAttribute('data-ref-checked', 'true');
  await expect(page.getByRole('checkbox', { name: 'Disabled checkbox', exact: true })).toBeDisabled();
});

test('select only adds a decorative arrow to single-row controls and retains native semantics', async ({ page }) => {
  const select = page.getByRole('combobox', { name: 'Native select', exact: true });
  const arrow = select.locator('..').locator('svg');
  await expect(arrow).toHaveCount(1);
  await expect(arrow).toHaveAttribute('aria-hidden', 'true');
  await expect(arrow).toHaveCSS('pointer-events', 'none');
  await select.focus();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await expect(select).toHaveValue('b');
  for (const name of ['List selection', 'Multiple selection']) {
    await expect(page.getByRole('listbox', { name, exact: true }).locator('..').locator('svg')).toHaveCount(0);
  }
  await expect(page.getByRole('combobox', { name: 'Disabled select' })).toBeDisabled();
  await expect(page.getByRole('combobox', { name: 'Disabled select' }).locator('..').locator('svg')).toHaveCSS('opacity', '0.5');
  for (const svg of await page.locator('svg.tabler-icon').all()) {
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('focusable', 'false');
    await expect(svg).toHaveAttribute('stroke', 'currentColor');
    await expect(svg).toHaveAttribute('stroke-width', '2');
  }
});

test('custom ReactNode icons and Dialog.Close children stay independent of Tabler', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Custom button', exact: true }).getByTestId('custom-button-svg')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Custom icon button', exact: true }).getByTestId('custom-icon-svg')).toHaveCount(1);
  await page.getByRole('button', { name: 'Icon close dialog' }).click();
  const dialog = page.getByRole('dialog', { name: 'Default icon' });
  await expect(dialog.getByRole('button', { name: 'Dismiss icon dialog' }).locator('svg.tabler-icon-x')).toHaveCount(1);
  await expect(dialog.getByRole('button', { name: 'Custom close child' }).locator('svg')).toHaveCount(0);
  await dialog.getByRole('button', { name: 'Dismiss icon dialog' }).click();
  await expect(dialog).toBeHidden();
  await expect(page.getByRole('button', { name: 'Icon close dialog' })).toBeFocused();
});

test('forced colors uses native checkbox and select indicators', async ({ page }) => {
  await page.emulateMedia({ forcedColors: 'active' });
  const checkbox = page.getByRole('checkbox', { name: 'Native checkbox', exact: true });
  const select = page.getByRole('combobox', { name: 'Native select', exact: true });
  await expect(checkbox).toHaveCSS('appearance', 'auto');
  await expect(select).toHaveCSS('appearance', 'auto');
  await expect(checkbox.locator('..').locator('svg').first()).toHaveCSS('display', 'none');
  await expect(select.locator('..').locator('svg')).toHaveCSS('display', 'none');
});

test('consumer bundle includes only the selected icons and public types do not depend on Tabler', async () => {
  const require = createRequire(resolve('packages/ui/package.json'));
  const { build } = await import(pathToFileURL(require.resolve('vite')).href);
  const entry = join(tmpdir(), `rikkora-icons-${randomUUID()}.mjs`);
  writeFileSync(entry, `export { Checkbox, Select, Accordion, Dialog, ToastProvider, Pagination } from ${JSON.stringify(resolve('packages/ui/dist/index.js').replaceAll('\\', '/'))};`);
  try {
    const result = await build({
      configFile: false, logLevel: 'silent',
      build: { write: false, minify: false, lib: { entry, formats: ['es'] },
        rolldownOptions: { external: (id: string) => /^(react|react-dom)(\/|$)/.test(id) || id.startsWith('@radix-ui/') },
      },
    });
    const chunks = (Array.isArray(result) ? result : [result]).flatMap((output) => output.output).filter((output) => output.type === 'chunk');
    const code = chunks.map((chunk) => chunk.code).join('\n');
    const icons = [...new Set([...code.matchAll(/\(\s*"outline",\s*"([a-z-]+)",\s*"/g)].map((match) => match[1]))].sort();
    expect(icons).toEqual(['check', 'chevron-down', 'chevron-left', 'chevron-right', 'dots', 'minus', 'x']);
    function checkDeclarations(directory: string) {
      for (const file of readdirSync(directory, { withFileTypes: true })) {
        const path = join(directory, file.name);
        if (file.isDirectory()) checkDeclarations(path);
        else if (file.name.endsWith('.d.ts')) expect(readFileSync(path, 'utf8'), path).not.toContain('@tabler/');
      }
    }
    checkDeclarations('packages/ui/dist');
    const pkg = JSON.parse(readFileSync('packages/ui/package.json', 'utf8'));
    expect(pkg.dependencies['@tabler/icons-react']).toBeTruthy();
    expect(pkg.peerDependencies['@tabler/icons-react']).toBeUndefined();
    expect(pkg.exports['./icons']).toBeUndefined();
  } finally {
    unlinkSync(entry);
  }
});
