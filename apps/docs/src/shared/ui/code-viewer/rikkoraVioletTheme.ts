import type { CSSProperties } from 'react';
import light from './themes/rikkora-violet-light.json';
import dark from './themes/rikkora-violet-dark.json';

type SourceTheme = typeof light | typeof dark;

/** Maps the editor palette of Rikkora Violet's VS Code themes to CodeMirror. */
function editorStyles(theme: SourceTheme): CSSProperties {
  const { colors, semanticTokenColors: tokens } = theme;
  const literal = theme.tokenColors.find((rule) =>
    rule.scope.includes('constant.language.boolean'),
  )!;
  const quotes = theme.tokenColors.find((rule) =>
    rule.scope.includes('punctuation.definition.string'),
  )!;
  return {
    '--code-background': colors['editor.background'],
    '--code-foreground': colors['editor.foreground'],
    '--code-line-number': colors['editorLineNumber.foreground'],
    '--code-active-line-number': colors['editorLineNumber.activeForeground'],
    '--code-border': colors['editorIndentGuide.background1'],
    '--code-selection': colors['editor.selectionBackground'],
    '--code-keyword': tokens.keyword,
    '--code-string': tokens.string,
    '--code-string-quote': quotes.settings.foreground,
    '--code-number': tokens.number,
    '--code-type': tokens.type,
    '--code-tag': tokens.namespace,
    '--code-property': tokens.property,
    '--code-function': tokens.function,
    '--code-literal': literal.settings.foreground,
    '--code-comment': tokens.comment,
    '--code-operator': tokens.operator,
    '--rkr-scrollbar-thumb-color': colors['scrollbarSlider.background'],
    '--rkr-scrollbar-thumb-hover-color':
      colors['scrollbarSlider.hoverBackground'],
    '--rkr-scrollbar-track-color': colors['editor.background'],
  } as CSSProperties;
}

export const rikkoraVioletStyles = {
  light: editorStyles(light),
  dark: editorStyles(dark),
};
