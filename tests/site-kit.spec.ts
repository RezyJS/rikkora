import { test, expect } from '@playwright/test';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createRequire } from 'node:module';

test('site uses kit components for all HTML elements', () => {
  const ts = createRequire(import.meta.url)('../apps/docs/node_modules/typescript') as typeof import('../apps/docs/node_modules/typescript');
  const violations: string[] = [];
  function visitDirectory(directory: string) {
    for (const file of readdirSync(directory, { withFileTypes: true })) {
      if (file.name === 'testing') continue;
      const path = join(directory, file.name);
      if (file.isDirectory()) visitDirectory(path);
      else if (file.name.endsWith('.tsx')) {
        const source = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
        function visit(node: import('../apps/docs/node_modules/typescript').Node, svg = false) {
          const inSvg = svg || (ts.isJsxElement(node) && node.openingElement.tagName.getText(source) === 'svg');
          if (!inSvg && (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node))) {
            const tag = node.tagName.getText(source);
            if (/^[a-z]/.test(tag) && tag !== 'svg') violations.push(`${path}: <${tag}>`);
          }
          ts.forEachChild(node, (child) => visit(child, inSvg));
        }
        visit(source);
      }
    }
  }
  visitDirectory('apps/docs/src');
  expect(violations).toEqual([]);
});

test('polymorphic Box and Link preserve form behavior, anchors and refs', async ({ page }) => {
  await page.goto('/tests/fixture.html');
  const composition = page.getByRole('region', { name: 'Kit composition' });
  await composition.getByRole('button', { name: 'Submit composed form' }).click();
  await expect(composition.locator('form')).toHaveAttribute('data-submitted', 'true');
  await composition.getByRole('link', { name: 'Jump to target' }).click();
  await expect(page).toHaveURL(/#composition-target$/);
  await composition.getByRole('button', { name: 'Focus composed link' }).click();
  await expect(composition.getByRole('link')).toBeFocused();
});
