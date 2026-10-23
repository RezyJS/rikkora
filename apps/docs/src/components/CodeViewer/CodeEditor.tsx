import { useEffect, useRef } from 'react';
import { Box, ScrollArea } from '@rikkora/ui';
import { Compartment, EditorState } from '@codemirror/state';
import { drawSelection, EditorView, highlightSpecialChars, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { tags } from '@lezer/highlight';
import { usePreferences } from '../../preferences/PreferencesContext';
import type { CodeViewerProps } from './CodeViewer';
import styles from './CodeViewer.module.css';

const syntax = HighlightStyle.define([
  { tag: tags.keyword, color: 'var(--code-keyword)' },
  { tag: [tags.string, tags.regexp], color: 'var(--code-string)' },
  { tag: [tags.number, tags.bool, tags.null], color: 'var(--code-number)' },
  { tag: [tags.typeName, tags.className, tags.tagName], color: 'var(--code-type)' },
  { tag: [tags.propertyName, tags.attributeName], color: 'var(--code-property)' },
  { tag: tags.comment, color: 'var(--rkr-color-text-tertiary)', fontStyle: 'italic' },
  { tag: [tags.punctuation, tags.operator], color: 'var(--rkr-color-text-secondary)' },
]);

const appearance = EditorView.theme({
  '&': { color: 'var(--rkr-color-text-primary)', backgroundColor: 'transparent', fontSize: 'var(--code-font-size)' },
  '&.cm-focused': { outline: 'none' },
  '.cm-scroller': { overflow: 'visible', fontFamily: 'var(--rkr-font-family-mono)', lineHeight: '1.8' },
  '.cm-content': { padding: 'var(--code-padding) 0', tabSize: '2', caretColor: 'transparent' },
  '.cm-line': { padding: '0 var(--code-padding)' },
  '.cm-gutters': { backgroundColor: 'var(--rkr-color-bg-primary)', color: 'var(--rkr-color-text-tertiary)', borderRight: '1px solid var(--rkr-color-border-default)' },
  '.cm-lineNumbers .cm-gutterElement': { padding: '0 12px', minWidth: '3em' },
  '.cm-cursor, .cm-dropCursor': { display: 'none' },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': { backgroundColor: 'color-mix(in srgb, var(--rkr-color-action-primary) 22%, transparent)' },
  '.cm-content ::selection': { backgroundColor: 'color-mix(in srgb, var(--rkr-color-action-primary) 22%, transparent)' },
});

export function CodeEditor({ code, language = 'tsx', compact = false }: CodeViewerProps) {
  const host = useRef<HTMLDivElement>(null);
  const editor = useRef<EditorView | null>(null);
  const settings = useRef(new Compartment());
  const { theme, language: siteLanguage } = usePreferences();
  const label = siteLanguage === 'ru' ? 'Пример кода' : 'Code example';

  useEffect(() => {
    const view = new EditorView({
      parent: host.current!,
      state: EditorState.create({ extensions: [
        EditorState.readOnly.of(true), EditorView.editable.of(false),
        keymap.of(defaultKeymap), lineNumbers(), drawSelection(), highlightSpecialChars(),
        appearance, syntaxHighlighting(syntax), settings.current.of([]),
      ] }),
    });
    editor.current = view;
    return () => { editor.current = null; view.destroy(); };
  }, []);

  useEffect(() => {
    const view = editor.current;
    if (!view) return;
    const normalized = code.replace(/\r\n?/g, '\n');
    view.dispatch({
      ...(view.state.doc.toString() !== normalized && { changes: { from: 0, to: view.state.doc.length, insert: normalized } }),
      effects: settings.current.reconfigure([
        language === 'css' ? css() : javascript({ jsx: true, typescript: true }),
        EditorView.theme({}, { dark: theme === 'dark' }),
        EditorView.contentAttributes.of({ tabindex: '0', role: 'textbox', 'aria-readonly': 'true', 'aria-multiline': 'true', 'aria-label': label }),
      ]),
    });
  }, [code, language, theme, label]);

  return <ScrollArea orientation='both' className={styles.root} data-code-theme={theme} data-compact={compact}
    viewportProps={{ tabIndex: -1 }} aria-label={label}>
    <Box ref={host} />
  </ScrollArea>;
}
