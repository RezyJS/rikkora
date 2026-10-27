import { useLayoutEffect, useRef } from 'react';
import { Compartment, EditorState } from '@codemirror/state';
import {
  drawSelection,
  EditorView,
  highlightSpecialChars,
  keymap,
  lineNumbers,
} from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { syntaxHighlighting } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import type { Theme } from '@/shared/model/preferences';
import type { CodeViewerProps } from './CodeViewer.types';
import { syntax, appearance } from './editorAppearance';
import { stringDelimiters } from './stringDelimiters';

export function useCodeMirror({
  code,
  language,
  theme,
  label,
}: {
  code: string;
  language: NonNullable<CodeViewerProps['language']>;
  theme: Theme;
  label: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const editor = useRef<EditorView | null>(null);
  const settings = useRef(new Compartment());
  const initialCode = useRef(code.replace(/\r\n?/g, '\n'));

  useLayoutEffect(() => {
    const view = new EditorView({
      parent: host.current!,
      state: EditorState.create({
        doc: initialCode.current,
        extensions: [
          EditorState.readOnly.of(true),
          EditorView.editable.of(false),
          keymap.of(defaultKeymap),
          lineNumbers(),
          drawSelection(),
          highlightSpecialChars(),
          appearance,
          syntaxHighlighting(syntax),
          stringDelimiters,
          settings.current.of([]),
        ],
      }),
    });
    editor.current = view;
    return () => {
      editor.current = null;
      view.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const view = editor.current;
    if (!view) return;
    const normalized = code.replace(/\r\n?/g, '\n');
    view.dispatch({
      ...(view.state.doc.toString() !== normalized && {
        changes: { from: 0, to: view.state.doc.length, insert: normalized },
      }),
      effects: settings.current.reconfigure([
        language === 'css' ? css() : (
          javascript({ jsx: true, typescript: true })
        ),
        EditorView.theme({}, { dark: theme === 'dark' }),
        EditorView.contentAttributes.of({
          'tabindex': '0',
          'role': 'textbox',
          'aria-readonly': 'true',
          'aria-multiline': 'true',
          'aria-label': label,
        }),
      ]),
    });
  }, [code, language, theme, label]);

  return host;
}
