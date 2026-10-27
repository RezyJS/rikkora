import { IconCheck, IconCopy } from '@tabler/icons-react';
import { Box, Button, ScrollArea } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import type { CodeViewerProps } from './CodeViewer.types';
import { useCodeMirror } from './useCodeMirror';
import { useCopyCode } from './useCopyCode';
import styles from './CodeViewer.module.css';

export function CodeEditor({
  code,
  language = 'tsx',
  compact = false,
}: CodeViewerProps) {
  const { theme, language: siteLanguage } = usePreferences();
  const ru = siteLanguage === 'ru';
  const label = ru ? 'Пример кода' : 'Code example';
  const { status, copyLabel, copy } = useCopyCode(code, ru);
  const host = useCodeMirror({ code, language, theme, label });

  return (
    <Box
      className={styles.root}
      data-compact={compact}
    >
      <ScrollArea
        orientation='both'
        className={styles.scrollArea}
        viewportProps={{ tabIndex: -1 }}
        aria-label={label}
      >
        <Box ref={host} />
      </ScrollArea>
      <Button
        size='sm'
        variant='soft'
        className={styles.copyButton}
        onClick={() => {
          void copy();
        }}
        aria-label={ru ? 'Копировать код' : 'Copy code'}
        title={copyLabel}
      >
        {status === 'copied' ?
          <IconCheck
            size={16}
            stroke={1.7}
            aria-hidden='true'
            focusable='false'
          />
        : <IconCopy
            size={16}
            stroke={1.7}
            aria-hidden='true'
            focusable='false'
          />
        }
        {copyLabel}
      </Button>
    </Box>
  );
}
