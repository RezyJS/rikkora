import { EditorView } from '@codemirror/view';
import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

export const syntax = HighlightStyle.define([
  { tag: tags.keyword, color: 'var(--code-keyword)' },
  {
    tag: [tags.string, tags.regexp, tags.attributeValue],
    color: 'var(--code-string)',
  },
  { tag: tags.number, color: 'var(--code-number)' },
  { tag: [tags.bool, tags.null, tags.atom], color: 'var(--code-literal)' },
  { tag: tags.variableName, color: 'var(--code-foreground)' },
  { tag: [tags.typeName, tags.className], color: 'var(--code-type)' },
  { tag: [tags.tagName, tags.namespace], color: 'var(--code-tag)' },
  {
    tag: [tags.propertyName, tags.attributeName],
    color: 'var(--code-property)',
  },
  {
    tag: [tags.function(tags.variableName), tags.function(tags.propertyName)],
    color: 'var(--code-function)',
  },
  { tag: tags.comment, color: 'var(--code-comment)', fontStyle: 'italic' },
  { tag: [tags.punctuation, tags.operator], color: 'var(--code-operator)' },
  { tag: tags.bracket, color: 'var(--code-keyword)' },
]);

export const appearance = EditorView.theme({
  '&': {
    color: 'var(--code-foreground)',
    backgroundColor: 'var(--code-background)',
    fontSize: 'var(--code-font-size)',
  },
  '&.cm-focused': { outline: 'none' },
  '.cm-scroller': {
    overflow: 'visible',
    fontFamily: 'var(--rkr-font-family-mono)',
    lineHeight: '1.8',
  },
  '.cm-content': {
    padding: 'var(--rkr-spacing-2) 0',
    tabSize: '2',
    caretColor: 'transparent',
  },
  '.cm-line': {
    padding: '0 calc(var(--code-padding) + 48px) 0 var(--code-padding)',
  },
  '.cm-gutters': {
    width: 'var(--code-gutter-width)',
    minWidth: 'var(--code-gutter-width)',
    boxSizing: 'border-box',
    backgroundColor: 'var(--code-background)',
    color: 'var(--code-line-number)',
    borderRight: '1px solid var(--code-border)',
  },
  '.cm-activeLineGutter': { color: 'var(--code-active-line-number)' },
  '.cm-lineNumbers': { width: 'calc(var(--code-gutter-width) - 1px)' },
  '.cm-lineNumbers .cm-gutterElement': {
    padding: '0 12px',
    minWidth: '0',
    width: '100%',
    boxSizing: 'border-box',
  },
  '.cm-stringQuote, .cm-stringQuote span': {
    color: 'var(--code-string-quote)',
    fontStyle: 'normal',
  },
  '.cm-cursor, .cm-dropCursor': { display: 'none' },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
    backgroundColor: 'var(--code-selection)',
  },
  '.cm-content ::selection': { backgroundColor: 'var(--code-selection)' },
});
