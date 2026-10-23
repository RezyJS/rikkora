import { test, expect } from '@playwright/test';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { componentDocs } from '../apps/docs/src/pages/Documentation/componentDocs';
import { individualProps, propExample } from '../apps/docs/src/pages/Documentation/propExamples';
import { componentNames } from '../apps/docs/src/components/Showcase/catalog';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('rikkora.language', 'en');
    localStorage.setItem('rikkora.theme', 'light');
  });
});

test('documentation covers every public catalog entry and all usage examples typecheck', () => {
  expect(componentDocs).toHaveLength(componentNames.length);
  expect(new Set(componentDocs.map((doc) => doc.name))).toEqual(new Set(componentNames));
  expect(new Set(componentDocs.map((doc) => doc.slug)).size).toBe(componentNames.length);
  const ts = createRequire(import.meta.url)('../apps/docs/node_modules/typescript') as typeof import('../apps/docs/node_modules/typescript');
  const sources = new Map(componentDocs.flatMap((doc) => [
    [resolve('apps/docs/src/testing', `doc-${doc.slug}.tsx`).replaceAll('\\', '/'), doc.usage],
    ...doc.api.filter((part) => part.name !== 'CSS variables').flatMap((part, partIndex) => individualProps(part.props).map((property, index) => [
      resolve('apps/docs/src/testing', `doc-${doc.slug}-${partIndex}-${index}.tsx`).replaceAll('\\', '/'), propExample(doc, part.name, property),
    ])),
  ]));
  const options = {
    noEmit: true, strict: true, skipLibCheck: true, types: [],
    target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler, jsx: ts.JsxEmit.ReactJSX,
  };
  const host = ts.createCompilerHost(options);
  const originalExists = host.fileExists.bind(host);
  const originalRead = host.readFile.bind(host);
  host.fileExists = (filename) => sources.has(filename) || originalExists(filename);
  host.readFile = (filename) => sources.get(filename) ?? originalRead(filename);
  const originalSource = host.getSourceFile.bind(host);
  host.getSourceFile = (filename, version, onError, shouldCreateNewSourceFile) => sources.has(filename)
    ? ts.createSourceFile(filename, sources.get(filename)!, version, true, ts.ScriptKind.TSX)
    : originalSource(filename, version, onError, shouldCreateNewSourceFile);
  const program = ts.createProgram([...sources.keys()], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  expect(diagnostics.map((item) => `${item.file?.fileName}: ${ts.flattenDiagnosticMessageText(item.messageText, '\n')}`)).toEqual([]);
});

for (const theme of ['light', 'dark']) {
  test(`all component pages render preview, usage and API in ${theme} theme`, async ({ page }) => {
    test.setTimeout(60000);
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/docs/components/button');
    if (theme === 'dark') await page.locator('header').getByRole('button', { name: 'Switch to dark theme' }).click();
    for (const doc of componentDocs) {
      await page.getByRole('navigation', { name: 'Documentation navigation' }).getByRole('link', { name: doc.name, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`/docs/components/${doc.slug}$`));
      await expect(page.getByRole('heading', { level: 1, name: doc.name, exact: true })).toBeVisible();
      await expect(page.getByRole('group', { name: 'Preview', exact: true })).toHaveCount(0);
      await expect(page.getByRole('button', { name: 'Open playground', exact: true })).toBeVisible();
      await expect(page.getByRole('heading', { level: 2, name: 'Usage' })).toBeVisible();
      expect(await page.locator('#api [data-prop]').count(), doc.name).toBe(doc.api.reduce((count, part) => count + individualProps(part.props).length, 0));
      await expect(page.locator('#usage').getByRole('button', { name: 'Copy code' })).toBeVisible();
      await expect(page.getByRole('navigation', { name: 'Documentation navigation' }).getByRole('link', { name: doc.name, exact: true })).toHaveAttribute('aria-current', 'page');
    }
    expect(errors).toEqual([]);
  });
}

test('search filters navigation without losing the current page and handles empty results', async ({ page }) => {
  await page.goto('/docs/components/button');
  const search = page.getByRole('searchbox', { name: 'Search components' });
  const nav = page.getByRole('navigation', { name: 'Documentation navigation' });
  await search.fill('dialog');
  await expect(nav.getByRole('link')).toHaveCount(1);
  await nav.getByRole('link', { name: 'Dialog', exact: true }).click();
  await expect(page).toHaveURL('/docs/components/dialog');
  await expect(page.getByRole('heading', { level: 1, name: 'Dialog' })).toBeFocused();
  await search.fill('not-a-component');
  await expect(nav.getByText('No components found.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: 'Dialog' })).toBeVisible();
  await search.fill('');
  await expect(nav.getByRole('link')).toHaveCount(componentNames.length + 1);
});

test('deep links survive reload, navigate backwards and keep API anchors', async ({ page }) => {
  await page.goto('/docs/components/dialog#api');
  await expect(page.getByRole('heading', { level: 2, name: 'API', exact: true })).toBeInViewport();
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: 'Dialog' })).toBeAttached();
  await page.getByRole('navigation', { name: 'Documentation navigation' }).getByRole('link', { name: 'Drawer', exact: true }).click();
  await expect(page).toHaveURL('/docs/components/drawer');
  await page.goBack();
  await expect(page).toHaveURL('/docs/components/dialog#api');
  await expect(page.getByRole('heading', { level: 2, name: 'API', exact: true })).toBeInViewport();
});

test('component usage copies complete code to clipboard', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/docs/components/toast');
  await page.locator('#usage').getByRole('button', { name: 'Copy code' }).click();
  await expect(page.locator('#usage').getByRole('status').filter({ hasText: 'Code copied' })).toBeAttached();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied.replaceAll('\r\n', '\n')).toBe(componentDocs.find((doc) => doc.name === 'Toast')!.usage);
});

test('clipboard rejection gives visible feedback', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new Error('Unavailable')) } }));
  await page.goto('/docs/components/input');
  await page.locator('#usage').getByRole('button', { name: 'Copy code' }).click();
  await expect(page.getByText('Clipboard unavailable. Select the code and copy it manually.')).toBeVisible();
});

test('mobile navigation focuses the new article; Escape restores menu focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/docs/components/button');
  const menu = page.getByRole('button', { name: 'Components', exact: true });
  await menu.click();
  const drawer = page.getByRole('dialog', { name: 'Documentation', exact: true });
  await expect(drawer).toBeVisible();
  await drawer.getByRole('searchbox', { name: 'Search components' }).fill('radio');
  await drawer.getByRole('link', { name: 'RadioGroup', exact: true }).click();
  await expect(drawer).toBeHidden();
  await expect(page.getByRole('heading', { level: 1, name: 'RadioGroup' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: 'RadioGroup' })).toBeFocused();
  await menu.click();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: test.info().outputPath('mobile-documentation.png') });
});

test('RU documentation, theme and local playground preferences work independently', async ({ page }) => {
  await page.goto('/docs/components/button');
  await page.locator('header').getByRole('button', { name: 'Switch to Russian' }).click();
  await expect(page.getByRole('heading', { name: 'Использование', level: 2 })).toBeVisible();
  await page.locator('header').getByRole('button', { name: 'Включить тёмную тему' }).click();
  await page.getByRole('button', { name: 'Открыть playground' }).click();
  await page.locator('#component-playground').getByRole('button', { name: 'Включить светлую тему' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-rkr-theme', 'violet-smoke');
  await expect(page.locator('#component-playground')).toHaveAttribute('data-rkr-theme', 'violet-smoke-light');
  await page.screenshot({ path: test.info().outputPath('desktop-documentation.png'), fullPage: true });
  await page.getByRole('dialog', { name: 'Button playground' }).getByRole('button', { name: 'Закрыть', exact: true }).click();
  await page.getByRole('navigation', { name: 'Навигация документации' }).getByRole('link', { name: 'Dialog', exact: true }).click();
  await page.getByRole('button', { name: 'Открыть playground' }).click();
  await expect(page.locator('#component-playground')).toHaveAttribute('data-rkr-theme', 'violet-smoke');
});

test('overview, legacy components link and missing routes resolve within docs', async ({ page }) => {
  await page.goto('/docs');
  await expect(page.getByRole('heading', { level: 1, name: 'Rikkora UI' })).toBeVisible();
  await page.locator('header').getByRole('link', { name: 'Components', exact: true }).click();
  await expect(page).toHaveURL('/docs/components/button');
  await page.goto('/docs/components/missing');
  await expect(page.getByRole('heading', { name: 'Page not found', level: 1 })).toBeVisible();
  await page.getByRole('link', { name: 'Back to documentation' }).click();
  await expect(page).toHaveURL('/docs');
});
