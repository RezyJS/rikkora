import { test, expect } from '@playwright/test';
import { componentDocs } from '../apps/docs/src/entities/documentation';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('rikkora.language', 'en');
    localStorage.setItem('rikkora.theme', 'light');
  });
});

test('CodeMirror highlights TSX and blocks typing, deletion, cut, paste and drop', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/docs/components/button');
  const code = page.locator('#usage .cm-content');
  const readCode = async () => (await code.locator('.cm-line').allTextContents()).join('\n');
  const original = componentDocs.find((doc) => doc.name === 'Button')!.usage;
  await expect(code).toHaveAttribute('contenteditable', 'false');
  await expect(code).toHaveAttribute('aria-readonly', 'true');
  await expect(code).toHaveAttribute('tabindex', '0');
  expect(await readCode()).toBe(original);
  expect(await code.locator('.cm-line span').count()).toBeGreaterThan(0);
  await code.focus();
  await page.keyboard.press('Control+a');
  await page.keyboard.type('changed');
  await page.keyboard.press('Backspace');
  await page.keyboard.press('Delete');
  await page.keyboard.press('Control+x');
  await code.evaluate((element) => {
    const data = new DataTransfer();
    data.setData('text/plain', 'changed');
    element.dispatchEvent(new ClipboardEvent('paste', { clipboardData: data, bubbles: true, cancelable: true }));
    element.dispatchEvent(new DragEvent('drop', { dataTransfer: data, bubbles: true, cancelable: true }));
  });
  expect(await readCode()).toBe(original);
  await code.focus();
  await page.keyboard.press('Control+a');
  await page.keyboard.press('Control+c');
  expect((await page.evaluate(() => navigator.clipboard.readText())).replaceAll('\r\n', '\n')).toBe(original);
});

test('syntax colors follow the site theme and CSS examples are highlighted', async ({ page }) => {
  await page.goto('/docs');
  const css = page.locator('#themes .cm-content');
  await expect(css).toContainText('--rkr-color-action-primary');
  const before = await css.locator('.cm-line span').first().evaluate((element) => getComputedStyle(element).color);
  await page.locator('header').getByRole('button', { name: 'Switch to dark theme' }).click();
  await expect(css.locator('xpath=ancestor::*[@data-code-theme]')).toHaveAttribute('data-code-theme', 'dark');
  await expect.poll(() => css.locator('.cm-line span').first().evaluate((element) => getComputedStyle(element).color)).not.toBe(before);
  await page.screenshot({ path: test.info().outputPath('code-dark.png') });
});

test('example code updates with component selection and uses local preferences', async ({ page }) => {
  await page.goto('/tests/fixture.html?catalog=1');
  const navigation = page.getByRole('navigation', { name: 'Component examples' });
  await navigation.getByRole('button', { name: 'Text', exact: true }).click();
  const playground = page.locator('#component-playground');
  await expect(playground.locator('.cm-editor')).toHaveCount(1);
  await expect(playground.locator('.cm-content')).toContainText('<Text');
  await playground.getByRole('button', { name: 'Switch to dark theme' }).click();
  await expect(playground.locator('[data-code-theme]')).toHaveAttribute('data-code-theme', 'dark');
  await expect(page.locator('html')).toHaveAttribute('data-rkr-theme', 'violet-smoke-light');
  await navigation.getByRole('button', { name: 'Heading', exact: true }).click();
  await expect(playground.locator('.cm-editor')).toHaveCount(1);
  await expect(playground.locator('.cm-content')).toContainText('<Heading');
});

test('code remains selectable and horizontally scrollable on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/docs/components/button');
  const content = page.locator('#usage .cm-content');
  await expect(content).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const viewport = page.locator('#usage [data-radix-scroll-area-viewport]');
  expect(await viewport.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
  await viewport.evaluate((element) => { element.scrollLeft = 60; });
  await expect.poll(() => viewport.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
  await page.screenshot({ path: test.info().outputPath('code-mobile.png') });
});

test('clicking code has no focus ring and line numbers have horizontal spacing', async ({ page }) => {
  await page.goto('/docs/components/button');
  const code = page.locator('#usage .cm-content');
  const root = page.locator('#usage [data-code-theme]');
  await code.click();
  await expect(code).toBeFocused();
  await expect(root).toHaveCSS('box-shadow', 'none');
  const number = root.locator('.cm-lineNumbers .cm-gutterElement').filter({ hasText: /^1$/ }).first();
  await expect(number).toHaveCSS('padding-left', '12px');
  await expect(number).toHaveCSS('padding-right', '12px');
  await page.locator('#usage').getByRole('button', { name: 'Copy code' }).focus();
  await page.keyboard.press('Tab');
  await expect(code).toBeFocused();
  await expect(root).toHaveCSS('box-shadow', 'none');
});
