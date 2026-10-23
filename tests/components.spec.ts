import { test, expect, type Page } from '@playwright/test';

const names = ['Button', 'IconButton', 'Input', 'Checkbox', 'Flex', 'Grid', 'Textarea',
  'Link', 'Text', 'Heading', 'Box', 'Stack', 'Separator', 'Badge', 'Card', 'Switch', 'RadioGroup', 'Select', 'Slider', 'Field', 'FormControl',
  'Tabs', 'Dialog', 'Popover', 'Tooltip', 'DropdownMenu', 'Accordion', 'Drawer', 'Alert', 'Toast', 'Spinner', 'Progress', 'Skeleton', 'Avatar', 'Table', 'Pagination', 'ScrollArea'];
async function choose(page: Page, name: string) {
  await page.getByRole('navigation', { name: 'Component examples' }).getByRole('button', { name, exact: true }).click();
  await expect(page.locator('#component-playground').getByText('Trigger events by interacting with the example.', { exact: false })).toBeAttached();
}
const preview = (page: Page) => page.getByRole('group', { name: 'Preview', exact: true });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('rikkora.language', 'en');
    localStorage.setItem('rikkora.theme', 'light');
  });
});

for (const theme of ['light', 'dark']) {
  test(`all examples render in ${theme} theme`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/tests/fixture.html?catalog=1');
    if (theme === 'dark') await page.locator('header').getByRole('button', { name: 'Switch to dark theme' }).click();
    for (const name of names) {
      await choose(page, name);
      await expect(page.locator('#component-playground').getByRole('heading', { name, exact: true })).toBeVisible();
      expect(await preview(page).locator(':scope > *').count(), name).toBeGreaterThan(0);
    }
    expect(errors).toEqual([]);
  });
}

test('Field connects label, hint, error; FormControl toggles controls', async ({ page }) => {
  await page.goto('/tests/fixture.html?catalog=1');
  await choose(page, 'Field');
  const input = preview(page).getByRole('textbox', { name: 'Email' });
  await expect(input).toHaveAttribute('required', '');
  await expect(input).toHaveAccessibleDescription('Work address');
  await preview(page).getByRole('button', { name: 'Toggle error' }).click();
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  await expect(input).toHaveAccessibleDescription('Work address Enter a valid email');
  await preview(page).getByText('Email', { exact: false }).first().click();
  await expect(input).toBeFocused();
  await choose(page, 'FormControl');
  await expect(preview(page).getByRole('textbox', { name: 'Name' })).toBeDisabled();
  await expect(preview(page).getByRole('textbox', { name: 'Message' })).toBeDisabled();
  await preview(page).getByRole('checkbox').uncheck();
  await expect(preview(page).getByRole('textbox', { name: 'Name' })).toBeEnabled();
});

for (const name of ['Dialog', 'Drawer']) {
  test(`${name}: keyboard focus trap, Escape and restoration`, async ({ page }) => {
    await page.goto('/tests/fixture.html?catalog=1');
    await choose(page, name);
    const trigger = preview(page).getByRole('button', { name: name === 'Dialog' ? 'Open dialog' : 'Open drawer' });
    await trigger.focus();
    await page.keyboard.press('Enter');
    const dialog = page.getByRole('dialog', { name: 'Settings' });
    await expect(dialog).toBeVisible();
    const input = dialog.getByRole('textbox', { name: 'Name' });
    await expect(input).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(dialog.getByRole('button', { name: 'Close' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(input).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
    await expect(page.locator('body')).not.toHaveAttribute('data-scroll-locked');
  });
}

test('Tabs skip disabled entries and activate by arrow; accordion supports keyboard', async ({ page }) => {
  await page.goto('/tests/fixture.html?catalog=1');
  await choose(page, 'Tabs');
  await preview(page).getByRole('tab', { name: 'Overview' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(preview(page).getByRole('tab', { name: 'Settings' })).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('ArrowRight');
  await expect(preview(page).getByRole('tab', { name: 'Overview' })).toBeFocused();
  await choose(page, 'Accordion');
  const first = preview(page).getByRole('button', { name: 'What is inside?' });
  await first.focus();
  await page.keyboard.press('ArrowDown');
  const second = preview(page).getByRole('button', { name: 'How to navigate?' });
  await expect(second).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(second).toHaveAttribute('aria-expanded', 'true');
  await expect(first).toHaveAttribute('aria-expanded', 'false');
});

test('DropdownMenu skips disabled items, selects with keyboard, restores focus', async ({ page }) => {
  await page.goto('/tests/fixture.html?catalog=1');
  await choose(page, 'DropdownMenu');
  const trigger = preview(page).getByRole('button', { name: 'Actions' });
  await trigger.focus();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('menuitem', { name: 'Edit' })).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('menuitem', { name: 'Copy' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('menu')).toBeHidden();
  await expect(preview(page).getByRole('status')).toHaveText('Copy');
  await expect(trigger).toBeFocused();
});

test('Popover dismisses outside and by Escape; tooltip responds to focus and hover', async ({ page }) => {
  await page.goto('/tests/fixture.html?catalog=1');
  await choose(page, 'Popover');
  const trigger = preview(page).getByRole('button', { name: 'Details' });
  await trigger.click();
  await expect(page.getByRole('dialog', { name: 'Details' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole('heading', { name: 'Components', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeHidden();
  await choose(page, 'Tooltip');
  const help = preview(page).getByRole('button', { name: 'Help' });
  await help.scrollIntoViewIfNeeded();
  await help.focus();
  await expect(page.getByRole('tooltip')).toBeVisible();
  await expect(help).toHaveAttribute('aria-describedby', /.+/);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('tooltip')).toBeHidden();
  await help.blur();
  await page.mouse.move(0, 0);
  await help.hover();
  await expect(page.getByRole('tooltip')).toBeVisible();
});

test('Russian examples and narrow viewport remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/tests/fixture.html?catalog=1');
  await page.locator('header').getByRole('button', { name: 'Switch to Russian' }).click();
  const nav = page.getByRole('navigation', { name: 'Примеры компонентов' });
  await nav.getByRole('button', { name: 'Pagination', exact: true }).click();
  await page.getByRole('button', { name: 'Следующая страница', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Страница 2', exact: true })).toHaveAttribute('aria-current', 'page');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await nav.getByRole('button', { name: 'Dialog', exact: true }).click();
  await page.getByRole('button', { name: 'Открыть диалог' }).click();
  const dialog = page.getByRole('dialog', { name: 'Настройки' });
  await expect(dialog).toBeVisible();
  const box = await dialog.boundingBox();
  expect(box!.width).toBeLessThanOrEqual(390);
  await page.screenshot({ path: test.info().outputPath('mobile-dialog.png') });
});
