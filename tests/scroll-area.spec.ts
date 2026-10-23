import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/tests/fixture.html'); });

test('wheel, keyboard and viewportRef scroll the native viewport and forward events', async ({ page }) => {
  const viewport = page.getByRole('region', { name: 'Vertical area', exact: true });
  await viewport.hover();
  await page.mouse.wheel(0, 150);
  await expect.poll(() => viewport.evaluate((node) => node.scrollTop)).toBeGreaterThan(0);
  await viewport.focus();
  const initial = await viewport.evaluate((node) => node.scrollTop);
  await Promise.all([
    viewport.evaluate((node) => new Promise<void>((resolve) => node.addEventListener('scrollend', () => resolve(), { once: true }))),
    page.keyboard.press('PageDown'),
  ]);
  await expect.poll(() => viewport.evaluate((node) => node.scrollTop)).toBeGreaterThan(initial);
  await page.getByRole('button', { name: 'Scroll via ref' }).click();
  await expect(page.getByTestId('scroll-refs')).toHaveText('true:true');
  await expect.poll(() => viewport.evaluate((node) => node.scrollTop)).toBe(300);
  await expect(page.getByTestId('scroll-top')).toHaveText('300');
});

test('vertical thumb can be dragged without shifting layout', async ({ page }) => {
  const root = page.getByTestId('vertical-area');
  const viewport = page.getByRole('region', { name: 'Vertical area', exact: true });
  const before = await root.boundingBox();
  const thumb = root.locator('[data-rkr-scroll-thumb]');
  await expect(thumb).toBeVisible();
  const box = (await thumb.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2 + 80, { steps: 8 });
  await page.mouse.up();
  await expect.poll(() => viewport.evaluate((node) => node.scrollTop)).toBeGreaterThan(200);
  const after = await root.boundingBox();
  expect(after!.width).toBe(before!.width);
  expect(after!.height).toBe(before!.height);
});

test('both axes have draggable thumbs and horizontal keyboard scrolling', async ({ page }) => {
  const root = page.getByTestId('both-area');
  const viewport = page.getByRole('region', { name: 'Both axes', exact: true });
  await root.scrollIntoViewIfNeeded();
  await expect(root.locator('[data-rkr-scrollbar]')).toHaveCount(2);
  const thumb = root.locator('[data-rkr-scrollbar][data-orientation="horizontal"] [data-rkr-scroll-thumb]');
  const box = (await thumb.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 80, box.y + box.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect.poll(() => viewport.evaluate((node) => node.scrollLeft)).toBeGreaterThan(0);
  await viewport.evaluate((node) => { node.scrollLeft = 0; });
  await viewport.focus();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => viewport.evaluate((node) => node.scrollLeft)).toBeGreaterThan(0);
});

test('hover tracks hide after delay and auto tracks follow content resizing', async ({ page }) => {
  const hover = page.getByTestId('hover-area');
  await hover.hover();
  await expect(hover.locator('[data-rkr-scrollbar]')).toBeVisible();
  await page.mouse.move(900, 0);
  await expect(hover.locator('[data-rkr-scrollbar]')).toBeHidden();
  const resized = page.getByTestId('resized-area');
  await expect(resized.locator('[data-rkr-scrollbar]')).toHaveCount(0);
  await page.getByRole('button', { name: 'Toggle overflow' }).click();
  await expect(resized.locator('[data-rkr-scroll-thumb]')).toBeVisible();
  const dimensions = await page.getByRole('region', { name: 'Resized area' }).evaluate((node) => ({ height: node.clientHeight, total: node.scrollHeight }));
  expect(dimensions.height).toBeLessThanOrEqual(120);
  expect(dimensions.total).toBeGreaterThan(dimensions.height);
  await page.getByRole('button', { name: 'Toggle overflow' }).click();
  await expect(resized.locator('[data-rkr-scrollbar]')).toHaveCount(0);
});

test('RTL horizontal scroll uses native negative offsets', async ({ page }) => {
  const viewport = page.getByRole('region', { name: 'RTL area' });
  await viewport.focus();
  await expect(viewport).toHaveCSS('direction', 'rtl');
  await page.keyboard.press('ArrowLeft');
  await expect.poll(() => viewport.evaluate((node) => node.scrollLeft)).toBeLessThan(0);
});

test('scrollbar tokens customize rail size and thumb color', async ({ page }) => {
  const root = page.getByTestId('vertical-area');
  await root.evaluate((node) => {
    node.style.setProperty('--rkr-scrollbar-size', '14px');
    node.style.setProperty('--rkr-scrollbar-thumb-color', 'rgb(100, 80, 180)');
  });
  await expect(root.locator('[data-rkr-scrollbar]')).toHaveCSS('width', '14px');
  await expect(root.locator('[data-rkr-scroll-thumb]')).toHaveCSS('background-color', 'rgb(100, 80, 180)');
});

test('touch gestures scroll the viewport', async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  try {
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4173/tests/fixture.html');
    const viewport = page.getByRole('region', { name: 'Vertical area', exact: true });
    await viewport.scrollIntoViewIfNeeded();
    const box = (await viewport.boundingBox())!;
    const client = await context.newCDPSession(page);
    const x = box.x + box.width / 2, y = box.y + box.height - 20;
    await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
    for (let step = 1; step <= 6; step++) await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y - step * 20 }] });
    await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await expect.poll(() => viewport.evaluate((node) => node.scrollTop)).toBeGreaterThan(0);
  } finally { await context.close(); }
});

test('ScrollArea documentation demonstrates directions and uses custom rails across docs', async ({ page }) => {
  await page.addInitScript(() => { localStorage.setItem('rikkora.language', 'en'); localStorage.setItem('rikkora.theme', 'light'); });
  await page.goto('/docs/components/scroll-area');
  await expect(page.getByRole('heading', { name: 'ScrollArea', level: 1 })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Documentation navigation' }).locator('xpath=ancestor::*[@data-rkr-scroll-area]')).toHaveCount(1);
  await page.getByRole('button', { name: 'Open playground' }).click();
  const preview = page.getByRole('group', { name: 'Preview', exact: true });
  await preview.getByRole('combobox', { name: 'Orientation' }).selectOption('both');
  const example = page.getByRole('region', { name: 'Scroll example' });
  await example.scrollIntoViewIfNeeded();
  await expect(example.locator('..').locator('[data-rkr-scrollbar]')).toHaveCount(2);
  await page.screenshot({ path: test.info().outputPath('scroll-area.png') });
});
