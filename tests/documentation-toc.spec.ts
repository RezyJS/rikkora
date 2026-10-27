import { test, expect } from '@playwright/test';
import { componentDocs } from '../apps/docs/src/entities/documentation';
import { individualProps, propAnchor } from '../apps/docs/src/entities/documentation';

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.addInitScript(() => {
    localStorage.setItem('rikkora.language', 'en');
    localStorage.setItem('rikkora.theme', 'light');
    const scroll = Element.prototype.scrollIntoView;
    const calls: { id: string; behavior?: ScrollBehavior }[] = [];
    Object.assign(window, { tocScrollCalls: calls });
    Element.prototype.scrollIntoView = function (options) {
      calls.push({ id: this.id, behavior: typeof options === 'object' ? options.behavior : undefined });
      scroll.call(this, options);
    };
  });
});

test('right menu collapses all props and smoothly scrolls to the selected prop', async ({ page }) => {
  await page.goto('/docs/components/button');
  const toc = page.getByRole('navigation', { name: 'On this page' });
  const toggle = toc.getByRole('button', { name: 'Props' });
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await expect(toc.locator(':scope > a, :scope > div')).toHaveText(['Usage', 'API', /Props/, 'Accessibility']);
  await expect(toc.getByRole('link', { name: 'Usage', exact: true })).toHaveCSS('font-size', '16px');
  await expect(toc.getByRole('link', { name: 'size', exact: true })).toHaveCSS('font-size', '14px');
  await expect(toc.locator('xpath=ancestor::aside')).toHaveCSS('width', '240px');
  const doc = componentDocs.find((entry) => entry.name === 'Button')!;
  expect(await toc.getByRole('link').count()).toBe(3 + doc.api.flatMap((part) => individualProps(part.props)).length);
  const anchor = propAnchor('Button', 'size');
  await toc.getByRole('link', { name: 'size', exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`#${anchor}$`));
  await expect.poll(() => page.evaluate(() => (window as unknown as { tocScrollCalls: { id: string; behavior: string }[] }).tocScrollCalls.at(-1))).toEqual({ id: anchor, behavior: 'smooth' });
  await expect.poll(() => page.locator(`#${anchor}`).evaluate((node) => Math.round(node.getBoundingClientRect().top))).toBe(120);
  await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
  await toc.getByRole('link', { name: 'size', exact: true }).click();
  await expect.poll(() => page.locator(`#${anchor}`).evaluate((node) => Math.round(node.getBoundingClientRect().top))).toBe(120);
  await toggle.click();
  await expect(toc.getByRole('link', { name: 'size', exact: true })).toHaveCount(0);
});

test('compound components and CSS variables each link to unique sections', async ({ page }) => {
  for (const name of ['Dialog', 'ScrollArea']) {
    const doc = componentDocs.find((entry) => entry.name === name)!;
    await page.goto(`/docs/components/${doc.slug}`);
    const toc = page.getByRole('navigation', { name: 'On this page' });
    await toc.getByRole('button', { name: 'Props' }).click();
    const ids = doc.api.flatMap((part) => individualProps(part.props).map((property) => propAnchor(part.name, property.name)));
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      await expect(toc.locator(`a[href$="#${id}"]`)).toHaveCount(1);
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
  }
  await page.screenshot({ path: test.info().outputPath('toc-props.png') });
});

test('direct prop links open the list and reduced motion disables smooth scrolling', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const id = propAnchor('Button', 'disabled');
  await page.goto(`/docs/components/button#${id}`);
  const toc = page.getByRole('navigation', { name: 'On this page' });
  await expect(toc.getByRole('button', { name: 'Props' })).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator(`#${id}`)).toBeInViewport();
  await toc.getByRole('link', { name: 'Usage', exact: true }).click();
  await expect.poll(() => page.evaluate(() => (window as unknown as { tocScrollCalls: { id: string; behavior: string }[] }).tocScrollCalls.at(-1))).toEqual({ id: 'usage', behavior: 'instant' });
});
