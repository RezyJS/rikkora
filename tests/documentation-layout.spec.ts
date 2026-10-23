import { test, expect } from '@playwright/test';

test('documentation follows header insets and fills the available article width', async ({ page }) => {
  for (const width of [1920, 1440, 900, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ['/docs', '/docs/components/input']) {
      await page.goto(route);
      await expect(page.locator('article')).toBeVisible();
      const bounds = await page.evaluate(() => {
        const header = document.querySelector('header')!;
        const content = document.querySelector('#docs-content')!;
        const layout = content.parentElement!;
        const article = content.querySelector('article')!;
        const headerStyle = getComputedStyle(header);
        const layoutStyle = getComputedStyle(layout);
        return {
          headerLeft: parseFloat(headerStyle.paddingLeft),
          headerRight: parseFloat(headerStyle.paddingRight),
          layoutLeft: parseFloat(layoutStyle.paddingLeft),
          layoutRight: parseFloat(layoutStyle.paddingRight),
          contentWidth: content.getBoundingClientRect().width,
          articleWidth: article.getBoundingClientRect().width,
          overflow: document.documentElement.scrollWidth > innerWidth,
        };
      });
      expect(bounds.layoutLeft, `${route} at ${width}px`).toBeCloseTo(bounds.headerLeft, 0);
      expect(bounds.layoutRight).toBeCloseTo(bounds.headerRight, 0);
      expect(bounds.articleWidth).toBeCloseTo(bounds.contentWidth, 0);
      expect(bounds.overflow).toBe(false);
      if (width > 880) {
        const alignment = await page.evaluate(() => {
          const logo = document.querySelector('header a')!.getBoundingClientRect().left;
          const sidebar = document.querySelector('aside')!;
          const search = sidebar.querySelector('input')!.getBoundingClientRect().left;
          const link = sidebar.querySelector('nav a')!.getBoundingClientRect().left;
          const category = sidebar.querySelector('nav a')!.previousElementSibling!.getBoundingClientRect().left;
          return { logo, search, link, category };
        });
        expect(alignment.search).toBeCloseTo(alignment.logo, 0);
        expect(alignment.link).toBeCloseTo(alignment.logo, 0);
        expect(alignment.category).toBeCloseTo(alignment.logo, 0);
      }
    }
  }
  await page.screenshot({ path: test.info().outputPath('documentation-mobile.png'), fullPage: true });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.screenshot({ path: test.info().outputPath('documentation-desktop.png'), fullPage: true });
});
