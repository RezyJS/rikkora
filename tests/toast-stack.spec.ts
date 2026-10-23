import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/tests/fixture.html?toasts');
  await page.getByRole('button', { name: 'Enqueue four' }).click();
  await page.mouse.move(0, 0);
});

test('three notifications overlap, hide older content and expand on hover', async ({ page }) => {
  const viewport = page.locator('ol[data-stacked]');
  const items = viewport.locator('li');
  await expect(items).toHaveCount(3);
  await expect(page.getByText('Notification 4', { exact: true })).toHaveCount(0);
  await expect(items.first().locator('div').first()).toHaveCSS('opacity', '0');
  await expect(items.last().locator('div').first()).toHaveCSS('opacity', '1');
  const bounds = await items.evaluateAll((elements) => elements.map((element) => {
    const { top, bottom } = element.getBoundingClientRect();
    return { top, bottom };
  }));
  expect(bounds[0].bottom).toBeGreaterThan(bounds[2].top);
  expect(bounds[0].top).toBeLessThan(bounds[2].top);
  await expect(viewport).toHaveCSS('overflow', 'visible');
  const stackBounds = await viewport.boundingBox();
  await page.screenshot({ path: test.info().outputPath('collapsed.png'), clip: {
    x: stackBounds!.x - 12, y: stackBounds!.y - 40, width: stackBounds!.width + 24, height: stackBounds!.height + 52,
  } });
  await viewport.hover();
  await expect(items.first().locator('div').first()).toHaveCSS('opacity', '1');
  await expect.poll(async () => {
    const first = await items.first().boundingBox();
    const second = await items.nth(1).boundingBox();
    return first!.y + first!.height < second!.y;
  }).toBe(true);
  await expect(items.nth(1)).toContainText('keeps its full content');
  expect((await items.last().boundingBox())!.height).toBeCloseTo(bounds[2].bottom - bounds[2].top, 0);
  await viewport.screenshot({ path: test.info().outputPath('expanded.png') });
});

test('dismissal promotes the queued notification and dismiss all clears the stack', async ({ page }) => {
  const viewport = page.locator('ol[data-stacked]');
  await viewport.hover();
  await viewport.locator('li').first().getByRole('button', { name: 'Dismiss notification' }).click();
  await expect(page.getByText('Notification 1', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Notification 4', { exact: true })).toBeVisible();
  await expect(viewport.locator('li')).toHaveCount(3);
  await page.getByRole('button', { name: 'Dismiss all' }).click();
  await expect(viewport.locator('li')).toHaveCount(0);
});

test('F8 expands the stack and Escape dismisses a focused notification', async ({ page }) => {
  const viewport = page.locator('ol[data-stacked]');
  await page.keyboard.press('F8');
  await expect(viewport).toBeFocused();
  await expect(viewport.locator('li').first().locator('div').first()).toHaveCSS('opacity', '1');
  await viewport.locator('li').last().focus();
  await page.keyboard.press('Escape');
  await expect(page.getByText('Notification 3', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Notification 4', { exact: true })).toBeVisible();
});

test('stack fits a narrow viewport and honors reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const viewport = page.locator('ol[data-stacked]');
  await expect(viewport.locator('li').last()).toHaveCSS('animation-name', 'none');
  const bounds = await viewport.boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(320);
  await viewport.hover();
  await expect(viewport.locator('li').last()).toHaveCSS('transition-duration', '0s');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('swiping a notification dismisses it', async ({ page }) => {
  const viewport = page.locator('ol[data-stacked]');
  await viewport.hover();
  const newest = viewport.locator('li').last();
  const bounds = await newest.boundingBox();
  const x = bounds!.x + 30;
  const y = bounds!.y + bounds!.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 100, y, { steps: 10 });
  await page.mouse.up();
  await expect(page.getByText('Notification 3', { exact: true })).toHaveCount(0);
});
