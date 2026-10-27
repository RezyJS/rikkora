import { IconChevronDown } from '@tabler/icons-react';
import { useId, useState, type ReactNode } from 'react';
import { Box, Button } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { CodeBlock } from './CodeBlock';
import styles from './Documentation.module.css';

/** One surface for the live example and its optional source. */
export function ExampleBlock({
  children,
  code,
  language = 'tsx',
  open = false,
}: {
  children?: ReactNode;
  code: string;
  language?: 'tsx' | 'css';
  /** Whether the code is initially expanded. */
  open?: boolean;
}) {
  const { language: siteLanguage } = usePreferences();
  const ru = siteLanguage === 'ru';
  const [expanded, setExpanded] = useState(open);
  const [mounted, setMounted] = useState(open);
  const id = useId();
  return (
    <Box className={styles.exampleBlock}>
      {children && <Box className={styles.exampleStage}>{children}</Box>}
      <Box className={styles.exampleBar}>
        <Button
          variant='ghost'
          size='sm'
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => {
            setMounted(true);
            setExpanded(!expanded);
          }}
        >
          {expanded ?
            ru ?
              'Скрыть код'
              : 'Hide code'
            : ru ?
              'Показать код'
              : 'Show code'}
          <IconChevronDown className={styles.exampleChevron} data-expanded={expanded} size={14} stroke={1.7} aria-hidden='true' focusable='false' />
        </Button>
      </Box>
      <Box
        id={id}
        className={styles.exampleReveal}
        data-expanded={expanded}
        inert={!expanded}
        aria-hidden={!expanded}
      >
        <Box className={styles.exampleCode}>
          {mounted && (
            <CodeBlock
              code={code}
              label={language}
              embedded
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
