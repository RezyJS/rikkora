import { lazy, Suspense, type CSSProperties } from 'react';
import { Box } from '@rikkora/ui';
import styles from './CodeViewer.module.css';
import { usePreferences } from '../../preferences/PreferencesContext';
import { rikkoraVioletStyles } from './rikkoraVioletTheme';

export type { CodeViewerProps } from './CodeViewer.types';
import type { CodeViewerProps } from './CodeViewer.types';

const CodeEditor = lazy(() =>
  import('./CodeEditor').then((module) => ({ default: module.CodeEditor })),
);

export function CodeViewer(props: CodeViewerProps) {
  const { theme } = usePreferences();
  const lines = props.code.replace(/\r\n?/g, '\n').split('\n');
  const gutterWidth =
    'max(3em, calc(' + String(lines.length).length + 'ch + 24px))';
  return (
    <Box
      className={styles.frame}
      data-code-theme={theme}
      style={
        {
          ...rikkoraVioletStyles[theme],
          '--code-gutter-width': gutterWidth,
        } as CSSProperties
      }
    >
      <Suspense
        fallback={
          <Box
            className={styles.root}
            data-compact={props.compact}
          >
            <Box className={styles.fallback}>
              <Box
                as='pre'
                aria-hidden='true'
                className={styles.fallbackGutter}
              >
                {lines.map((_, index) => index + 1).join('\n')}
              </Box>
              <Box
                as='pre'
                className={styles.fallbackCode}
              >
                {lines.map((line, index) => (
                  <Box
                    as='div'
                    key={index}
                  >
                    {line || '\u200b'}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        }
      >
        <CodeEditor {...props} />
      </Suspense>
    </Box>
  );
}
