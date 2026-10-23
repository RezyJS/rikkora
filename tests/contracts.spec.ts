import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/tests/fixture.html'); });

test('native form submission, reset, labels and forwarded refs', async ({ page }) => {
  const form = page.locator('#native-form');
  const input = form.getByRole('textbox', { name: 'Text', exact: true });
  await expect(input).toHaveAccessibleDescription('Hint Invalid text Extra hint');
  await input.fill('changed');
  await form.getByRole('switch', { name: 'Switch' }).uncheck();
  await form.getByRole('combobox').selectOption('b');
  await form.getByRole('slider').focus();
  await page.keyboard.press('ArrowRight');
  const radios = form.getByRole('radiogroup', { name: 'Radio' });
  await radios.getByRole('radio', { name: 'A', exact: true }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(radios.getByRole('radio', { name: 'B', exact: true })).toBeChecked();
  expect(await form.evaluate((node) => Object.fromEntries(new FormData(node as HTMLFormElement)))).toEqual({
    text: 'changed', message: 'message', check: 'yes', choice: 'b', range: '25', radio: 'b',
  });
  await form.getByRole('button', { name: 'Reset form' }).click();
  await expect(input).toHaveValue('default');
  await expect(form.getByRole('switch')).toBeChecked();
  await expect(form.getByRole('combobox')).toHaveValue('a');
  await expect(form.getByRole('slider')).toHaveValue('20');
  await expect(radios.getByRole('radio', { name: 'A', exact: true })).toBeChecked();
  await form.getByRole('button', { name: 'Check refs' }).click();
  await expect(page.locator('#refs-result')).toHaveText('INPUT,TEXTAREA,INPUT,INPUT,SELECT,INPUT,FIELDSET');
  await expect(input).toBeFocused();
});

test('controlled state and explicit overrides remain authoritative', async ({ page }) => {
  const controlled = page.getByRole('region', { name: 'Controlled controls' });
  await controlled.getByRole('textbox').fill('edited');
  await controlled.getByRole('switch').check();
  await controlled.getByRole('radio', { name: 'B', exact: true }).check();
  await expect(page.getByTestId('controlled-output')).toHaveText('edited:true:b');
  await expect(page.getByRole('textbox', { name: 'Inherited', exact: true })).toBeDisabled();
  await expect(page.getByRole('textbox', { name: 'Inherited', exact: true })).toHaveAttribute('aria-invalid', 'true');
  for (const name of ['Override', 'Direct override']) {
    const input = page.getByRole('textbox', { name, exact: true });
    await expect(input).toBeEnabled();
    await expect(input).not.toHaveAttribute('required');
    await expect(input).toHaveAttribute('aria-invalid', 'false');
  }
  await expect(page.getByRole('textbox', { name: 'Read only' })).toBeEnabled();
  await expect(page.getByRole('textbox', { name: 'Read only' })).toHaveAttribute('readonly', '');
});

test('nested drawer restores focus to outer dialog and keeps scroll locked', async ({ page }) => {
  const trigger = page.getByRole('button', { name: 'Controlled dialog' });
  await trigger.click();
  await expect(page.getByRole('textbox', { name: 'Outer input' })).toBeFocused();
  const nestedTrigger = page.getByRole('button', { name: 'Nested drawer' });
  await nestedTrigger.click();
  await expect(page.getByRole('textbox', { name: 'Inner input' })).toBeFocused();
  await expect(page.getByRole('dialog', { name: 'Outer dialog', includeHidden: true })).toHaveCSS('pointer-events', 'none');
  const layerOrder = await page.locator('[role="dialog"]').evaluateAll((nodes) => nodes.map((node) => Number(getComputedStyle(node).zIndex)));
  expect(layerOrder[1]).toBeGreaterThan(layerOrder[0]);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog', { name: 'Inner drawer' })).toBeHidden();
  await expect(nestedTrigger).toBeFocused();
  await expect(page.locator('body')).toHaveAttribute('data-scroll-locked');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog', { name: 'Outer dialog' })).toBeHidden();
  await expect(trigger).toBeFocused();
  await expect(page.locator('body')).not.toHaveAttribute('data-scroll-locked');
});

test('body portals preserve scoped tokens, language, direction and live theme changes', async ({ page }) => {
  await page.getByRole('button', { name: 'Scoped popover' }).click();
  const content = page.getByRole('dialog', { name: 'Scoped content' });
  await expect(content).toHaveCSS('background-color', 'rgb(11, 22, 33)');
  await expect(content).toHaveCSS('direction', 'rtl');
  await expect(content.locator('..').locator('..')).toHaveAttribute('lang', 'ru');
  await page.getByRole('button', { name: 'Change scoped theme' }).evaluate((button: HTMLButtonElement) => button.click());
  await expect(content).toHaveCSS('color-scheme', 'dark');
  await expect(content).toHaveCSS('background-color', 'rgb(11, 22, 33)');
});

test('manual tabs separate focus from selection; multiple accordion keeps both panels', async ({ page }) => {
  const tabs = page.getByRole('tablist', { name: 'Manual tabs' });
  await tabs.getByRole('tab', { name: 'One' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(tabs.getByRole('tab', { name: 'Two' })).toBeFocused();
  await expect(tabs.getByRole('tab', { name: 'One' })).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('Enter');
  await expect(page.getByRole('tabpanel')).toHaveText('Panel two');
  const accordion = page.getByLabel('Multiple accordion');
  await accordion.getByRole('button', { name: 'two' }).click();
  await expect(accordion.getByText('one content')).toBeVisible();
  await expect(accordion.getByText('two content')).toBeVisible();
});

test('toast queue pauses on hover/focus and promotes queued entries after dismissal', async ({ page }) => {
  await page.getByRole('button', { name: 'Enqueue' }).click();
  const first = page.getByText('First', { exact: true });
  await expect(first).toBeVisible();
  await expect(page.getByText('Second', { exact: true })).toHaveCount(0);
  await first.hover();
  await page.waitForTimeout(1200);
  await expect(first).toBeVisible();
  const close = page.getByRole('button', { name: 'Dismiss notification' });
  await close.focus();
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1200);
  await expect(first).toBeVisible();
  await close.click();
  await expect(page.getByText('Second', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Dismiss all' }).click();
  await expect(page.getByRole('button', { name: 'Dismiss notification' })).toHaveCount(0);
});

test('toast auto-dismiss advances FIFO queue', async ({ page }) => {
  await page.getByRole('button', { name: 'Enqueue' }).click();
  await expect(page.getByText('Second', { exact: true })).toBeVisible({ timeout: 3000 });
  await expect(page.getByText('First', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Second', { exact: true })).toHaveCount(0, { timeout: 3000 });
});

test('pagination remains bounded and empty pagination cannot emit', async ({ page }) => {
  const nav = page.getByRole('navigation', { name: 'Pagination', exact: true });
  await expect(nav.getByRole('button', { name: 'Previous page' })).toBeDisabled();
  expect(await nav.getByRole('button').count()).toBeLessThanOrEqual(7);
  await nav.getByRole('button', { name: 'Page 1000000', exact: true }).click();
  await expect(nav.getByRole('button', { name: 'Next page' })).toBeDisabled();
  await expect(nav.getByRole('button', { name: 'Page 1000000', exact: true })).toHaveAttribute('aria-current', 'page');
  const empty = page.getByRole('navigation', { name: 'Empty pages' });
  await expect(empty.getByRole('button', { name: 'Previous page' })).toBeDisabled();
  await expect(empty.getByRole('button', { name: 'Next page' })).toBeDisabled();
});

test('progress clamps values and omits aria-valuenow when indeterminate; avatar recovers on source change', async ({ page }) => {
  const progress = page.getByRole('progressbar', { name: 'Offset progress' });
  await expect(progress).toHaveAttribute('aria-valuemin', '10');
  await expect(progress).toHaveAttribute('aria-valuenow', '45');
  await page.getByRole('button', { name: 'Clamp progress' }).click();
  await expect(progress).toHaveAttribute('aria-valuenow', '50');
  await page.getByRole('button', { name: 'Indeterminate' }).click();
  await expect(progress).not.toHaveAttribute('aria-valuenow');
  await expect(page.getByRole('img', { name: 'Rikka Inohana' })).toHaveText('RI');
  await page.getByRole('button', { name: 'Load avatar' }).click();
  await expect(page.locator('img[alt="Rikka Inohana"]')).toBeVisible();
});

test('animated placeholders honor reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/tests/fixture.html?catalog=1');
  await page.getByRole('navigation', { name: 'Component examples' }).getByRole('button', { name: 'Skeleton', exact: true }).click();
  await expect(page.locator('[data-shape="circle"]')).toHaveCSS('animation-name', 'none');
});

test('text tokens retain 4.5:1 contrast on theme surfaces', async ({ page }) => {
  for (const theme of ['violet-smoke', 'violet-smoke-light']) {
    const ratios = await page.evaluate((name) => {
      document.documentElement.dataset.rkrTheme = name;
      const sample = document.createElement('span');
      document.body.append(sample);
      const luminance = (color: string) => {
        const channels = color.match(/[\d.]+/g)!.slice(0, 3).map((channel) => {
          const value = Number(channel) / 255;
          return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
        });
        return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
      };
      const results: Record<string, number> = {};
      for (const text of ['primary', 'secondary', 'tertiary', 'danger', 'action']) {
        for (const surface of ['primary', 'surface', 'elevated']) {
          sample.style.color = `var(--rkr-color-text-${text})`;
          sample.style.background = `var(--rkr-color-bg-${surface})`;
          const computed = getComputedStyle(sample);
          const a = luminance(computed.color), b = luminance(computed.backgroundColor);
          results[`${text}/${surface}`] = (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
        }
      }
      sample.remove();
      return results;
    }, theme);
    for (const [pair, ratio] of Object.entries(ratios)) expect(ratio, `${theme}: ${pair}`).toBeGreaterThanOrEqual(4.5);
  }
});
