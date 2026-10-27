import { test, expect } from '@playwright/test';
import { componentDocs } from '../apps/docs/src/entities/documentation';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('rikkora.language', 'en');
    localStorage.setItem('rikkora.theme', 'light');
  });
});

test('each property has its own example and playground opens separately for every component', async ({ page }) => {
  test.setTimeout(60000);
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const doc of componentDocs) {
    await page.goto(`/docs/components/${doc.slug}`);
    await expect(page.locator('#component-playground')).toHaveCount(0);
    for (const section of await page.locator('[data-prop]').all()) {
      await expect(section.getByRole('heading', { level: 4 })).toBeVisible();
      await expect(section.locator('.cm-content')).not.toBeEmpty();
    }
    const trigger = page.getByRole('button', { name: 'Open playground', exact: true });
    await trigger.click();
    const playground = page.getByRole('dialog', { name: `${doc.name} playground`, exact: true });
    await expect(playground).toBeVisible();
    await expect(playground.getByRole('textbox', { name: 'Text', exact: true })).toBeVisible();
    await playground.getByRole('button', { name: 'Close', exact: true }).click();
    await expect(trigger).toBeFocused();
  }
  expect(errors).toEqual([]);
});

test('playground edits button text and properties, then resets them', async ({ page }) => {
  await page.goto('/docs/components/button');
  await expect(page.locator('[data-prop="size"]').getByRole('group', { name: 'size examples' }).getByRole('button')).toHaveCount(3);
  await expect(page.locator('[data-prop="disabled"]').getByRole('button').nth(1)).toBeDisabled();
  await page.getByRole('button', { name: 'Open playground' }).click();
  const playground = page.getByRole('dialog', { name: 'Button playground' });
  await playground.getByRole('textbox', { name: 'Text', exact: true }).fill('Publish');
  const preview = playground.getByRole('group', { name: 'Preview', exact: true });
  await expect(preview.getByRole('button', { name: 'Publish' })).toBeVisible();
  await playground.getByRole('checkbox', { name: 'Disabled', exact: true }).check();
  await expect(preview.getByRole('button')).toBeDisabled();
  await playground.getByRole('button', { name: 'Reset settings' }).click();
  await expect(preview.getByRole('button')).toBeEnabled();
  await expect(playground.getByRole('textbox', { name: 'Text', exact: true })).toHaveValue('');
});

test('additional component properties and editable text affect the preview', async ({ page }) => {
  await page.goto('/docs/components/heading');
  await page.getByRole('button', { name: 'Open playground' }).click();
  const playground = page.getByRole('dialog', { name: 'Heading playground' });
  await playground.getByRole('textbox', { name: 'Text', exact: true }).fill('Custom heading');
  await playground.getByRole('combobox', { name: 'level', exact: true }).selectOption('4');
  await playground.getByRole('combobox', { name: 'size', exact: true }).selectOption('lg');
  await expect(playground.getByRole('group', { name: 'Preview' }).getByRole('heading', { name: 'Custom heading', level: 4 })).toHaveAttribute('data-size', 'lg');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open playground' })).toBeFocused();
});

test('mobile playground scrolls and closes without overflowing the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/docs/components/input');
  await page.getByRole('button', { name: 'Open playground' }).click();
  const playground = page.getByRole('dialog', { name: 'Input playground' });
  await playground.getByRole('textbox', { name: 'Text', exact: true }).fill('Your email');
  await expect(playground.getByRole('group', { name: 'Preview' }).getByPlaceholder('Your email')).toBeVisible();
  expect(await playground.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
  await playground.screenshot({ path: test.info().outputPath('mobile-playground.png') });
  await page.keyboard.press('Escape');
  await expect(playground).toBeHidden();
});

test('structured settings validate JSON, update the example and reset', async ({ page }) => {
  await page.goto('/docs/components/radio-group');
  await page.getByRole('button', { name: 'Open playground' }).click();
  const playground = page.getByRole('dialog', { name: 'RadioGroup playground' });
  const options = playground.getByRole('textbox', { name: 'options', exact: true });
  await options.fill('[{"value":"custom","label":"Custom plan"}]');
  await expect(playground.getByRole('radio', { name: 'Custom plan' })).toBeVisible();
  await options.fill('invalid');
  await expect(options).toHaveAttribute('aria-invalid', 'true');
  await expect(playground.getByRole('radio', { name: 'Custom plan' })).toBeVisible();
  await playground.getByRole('button', { name: 'Reset settings' }).click();
  await expect(options).toHaveValue('');
  await expect(playground.getByRole('radio', { name: 'Basic', exact: true })).toBeVisible();
});

test('preview fills the properties row and centers the example', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1100 });
  for (const name of ['Input', 'Button', 'Textarea']) {
    await page.goto(`/docs/components/${name.toLowerCase()}`);
    await page.getByRole('button', { name: 'Open playground' }).click();
    const dialog = page.getByRole('dialog', { name: `${name} playground` });
    await expect(dialog.getByRole('button', { name: 'Reset settings' })).toBeAttached();
    if (name === 'Textarea') await expect(dialog.getByRole('spinbutton', { name: 'rows', exact: true })).toBeAttached();
    else await expect(dialog.getByRole('combobox', { name: 'type', exact: true })).toBeAttached();
    const preview = dialog.getByRole('group', { name: 'Preview', exact: true });
    const geometry = await preview.evaluate((element) => {
      const bounds = element.getBoundingClientRect();
      const row = element.parentElement!.getBoundingClientRect();
      const child = element.firstElementChild!.getBoundingClientRect();
      return {
        height: bounds.height, rowHeight: row.height,
        centerX: bounds.left + bounds.width / 2, centerY: bounds.top + bounds.height / 2,
        itemX: child.left + child.width / 2, itemY: child.top + child.height / 2,
      };
    });
    expect(geometry.height, name).toBeCloseTo(geometry.rowHeight, 0);
    expect(geometry.itemX, name).toBeCloseTo(geometry.centerX, 0);
    expect(geometry.itemY, name).toBeCloseTo(geometry.centerY, 0);
    if (name === 'Input') await dialog.screenshot({ path: test.info().outputPath('input-playground-stretched.png') });
  }
});
