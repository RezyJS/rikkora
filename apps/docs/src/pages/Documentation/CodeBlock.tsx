import { useState } from 'react';
import { Box, Button, Flex, Text } from '@rikkora/ui';
import { CodeViewer } from '../../components/CodeViewer/CodeViewer';
import { usePreferences } from '../../preferences/PreferencesContext';
import styles from './Documentation.module.css';

export function CodeBlock({ code, label = 'tsx' }: { code: string; label?: string }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  }
  return <Box className={styles.codeBlock}>
    <Flex align='center' justify='between' className={styles.codeHeader}>
      <Text as='span' size='xs' tone='secondary'>{label}</Text>
      <Button size='sm' variant='ghost' onClick={() => { void copy(); }} aria-label={ru ? 'Копировать код' : 'Copy code'}>
        <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'>
          <rect x='8' y='8' width='12' height='12' rx='2' /><path d='M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4' />
        </svg>
        {status === 'copied' ? (ru ? 'Скопировано' : 'Copied') : (ru ? 'Копировать' : 'Copy')}
      </Button>
    </Flex>
    <CodeViewer code={code} language={label === 'css' ? 'css' : 'tsx'} />
    <Text as='span' size='sm' role='status' className={status === 'failed' ? styles.copyError : styles.visuallyHidden}>
      {status === 'copied' && (ru ? 'Код скопирован' : 'Code copied')}
      {status === 'failed' && (ru ? 'Буфер обмена недоступен. Выделите код и скопируйте вручную.' : 'Clipboard unavailable. Select the code and copy it manually.')}
    </Text>
  </Box>;
}
