import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('rikkora.language', 'en');
    localStorage.setItem('rikkora.theme', 'light');
  });
});

test('examples fill the page below the heading strip and step down toward the edges', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: 'Component examples' })).toHaveCount(0);
  const headline = page.getByRole('heading', { name: 'Make it yours.', exact: true });
  for (const width of [2560, 1920, 1440, 1280, 1100, 1000, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1100 });
    const scene = page.getByLabel('Interface examples', { exact: true });
    const bounds = await scene.boundingBox();
    expect(bounds!.x).toBe(24);
    expect(bounds!.width).toBe(width - 48);
    await expect(scene).toHaveCSS('border-top-width', '0px');
    await expect(scene).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    await expect(page.locator('#components')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    const columns = await scene.locator(':scope > *').evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().top));
    if (width >= 1280) {
      expect(columns[0] - columns[2]).toBe(112);
      expect(columns[1] - columns[2]).toBe(56);
      expect(columns[3]).toBe(columns[1]);
      expect(columns[4]).toBe(columns[0]);
    } else if (width >= 1000) {
      expect(columns[0] - columns[1]).toBe(56);
      expect(columns[2]).toBe(columns[0]);
    }
    const heading = await headline.boundingBox();
    expect(heading!.x + heading!.width / 2).toBeCloseTo(width / 2, 0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px`).toBe(true);
  }
  await page.setViewportSize({ width: 1440, height: 1100 });
  const scene = page.getByLabel('Interface examples', { exact: true });
  const samplesPerColumn = await scene.locator(':scope > *').evaluateAll((columns) => columns.map((column) => column.children.length));
  expect(samplesPerColumn).toEqual([5, 5, 5, 5, 5]);
  const expectOpaqueCards = async () => {
    for (const card of await scene.locator('[data-variant="filled"]').all()) {
      expect(await card.evaluate((element) => getComputedStyle(element).backgroundColor)).toMatch(/^rgb\(/);
    }
  };
  await expectOpaqueCards();
  await expect(headline.locator('..')).toHaveCSS('border-bottom-width', '1px');
  await expect(page.getByRole('heading', { name: 'Rikka Inohana', exact: true })).toBeVisible();
  await page.locator('#components').screenshot({ path: test.info().outputPath('composition-light.png') });
  await page.locator('header').getByRole('button', { name: 'Switch to dark theme' }).click();
  await expectOpaqueCards();
  await page.locator('#components').screenshot({ path: test.info().outputPath('composition-dark.png') });
});

test('quantity, timezone, checklist, alignment and invitation examples work', async ({ page }) => {
  await page.goto('/');
  const scene = page.getByLabel('Interface examples', { exact: true });
  await scene.getByRole('button', { name: 'Increase quantity' }).click();
  await expect(scene.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue('3');
  await scene.getByRole('button', { name: 'Decrease quantity' }).click();
  await expect(scene.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue('2');
  await scene.getByRole('combobox', { name: 'Timezone' }).selectOption('tokyo');
  await expect(scene.getByRole('combobox', { name: 'Timezone' })).toHaveValue('tokyo');
  await scene.getByRole('checkbox', { name: 'Check keyboard navigation' }).check();
  await scene.getByRole('checkbox', { name: 'Update documentation' }).check();
  await expect(scene.getByRole('progressbar', { name: 'Release readiness' })).toHaveAttribute('aria-valuenow', '100');
  await scene.getByRole('button', { name: 'Align center' }).click();
  await expect(scene.getByRole('button', { name: 'Align center' })).toHaveAttribute('aria-pressed', 'true');
  await expect(scene.getByText('Everything in its place.')).toHaveCSS('text-align', 'center');
  await scene.getByRole('textbox', { name: 'Work email' }).fill('teammate@example.com');
  await scene.getByRole('combobox', { name: 'Role', exact: true }).selectOption('viewer');
  await scene.getByRole('button', { name: 'Prepare invitation' }).click();
  await expect(page.getByText('Invitation ready', { exact: true })).toBeVisible();
  await expect(scene.getByRole('table', { name: 'Recent files' }).getByRole('row')).toHaveCount(4);
});

test('forms and search are usable examples', async ({ page }) => {
  await page.goto('/');
  const scene = page.getByLabel('Interface examples', { exact: true });
  await scene.getByRole('textbox', { name: 'Email', exact: true }).fill('designer@example.com');
  await scene.getByLabel(/^Password/).fill('password');
  await scene.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page.getByText('Form ready', { exact: true })).toBeVisible();
  await scene.getByRole('textbox', { name: 'Comment', exact: true }).fill('Looks good');
  await scene.getByRole('button', { name: 'Send', exact: true }).click();
  await expect(scene.getByText('Looks good', { exact: true })).toBeVisible();
  await scene.getByRole('searchbox', { name: 'Find a component', exact: true }).fill('button');
  await expect(scene.getByRole('link', { name: 'Button ↗', exact: true })).toBeVisible();
  await scene.getByRole('searchbox').fill('does not exist');
  await expect(scene.getByText('No matches', { exact: true })).toBeVisible();
});

test('switches, plan selection, pagination and profile dialog work', async ({ page }) => {
  await page.goto('/');
  const scene = page.getByLabel('Interface examples', { exact: true });
  await scene.getByRole('switch', { name: 'Notification sounds' }).uncheck();
  await expect(scene.getByRole('slider')).toBeDisabled();
  await scene.getByRole('radio', { name: 'Pro', exact: true }).check();
  await expect(scene.getByRole('radio', { name: 'Pro', exact: true })).toBeChecked();
  await scene.getByRole('button', { name: 'Next page', exact: true }).click();
  await expect(scene.getByText('Page 2 / 5', { exact: true })).toBeVisible();
  await scene.getByRole('button', { name: 'Favorite', exact: true }).click();
  await expect(scene.getByRole('button', { name: 'Favorite', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await scene.getByRole('button', { name: 'Open dialog' }).click();
  const dialog = page.getByRole('dialog', { name: 'Edit profile' });
  await dialog.getByRole('textbox', { name: 'Name', exact: true }).fill('Rikka');
  await dialog.getByRole('button', { name: 'Save profile' }).click();
  await expect(dialog).toBeHidden();
  await expect(scene.getByRole('heading', { name: 'Rikka', exact: true })).toBeVisible();
  await scene.getByRole('button', { name: 'Profile actions' }).click();
  await expect(page.getByRole('menuitem', { name: 'Edit profile' })).toBeVisible();
});

test('composition is localized and usable on a narrow viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('header').getByRole('button', { name: 'Switch to Russian' }).click();
  await expect(page.getByRole('heading', { name: 'Собери по-своему.', exact: true })).toBeVisible();
  const scene = page.getByLabel('Примеры интерфейсов', { exact: true });
  await scene.getByRole('switch', { name: 'Звук уведомлений' }).uncheck();
  await expect(scene.getByRole('slider')).toBeDisabled();
  await scene.getByRole('button', { name: 'Открыть диалог' }).click();
  await expect(page.getByRole('dialog', { name: 'Редактировать профиль' })).toBeVisible();
  await page.keyboard.press('Escape');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.locator('#components').screenshot({ path: test.info().outputPath('composition-mobile.png') });
});
