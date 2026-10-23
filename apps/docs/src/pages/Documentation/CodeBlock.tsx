import { Box } from '@rikkora/ui';
import { CodeViewer } from '../../components/CodeViewer/CodeViewer';
import styles from './Documentation.module.css';

export function CodeBlock({
  code,
  label = 'tsx',
  embedded = false,
}: {
  code: string;
  label?: string;
  embedded?: boolean;
}) {
  return (
    <Box className={embedded ? styles.embeddedCode : styles.codeBlock}>
      <CodeViewer
        code={code}
        language={label === 'css' ? 'css' : 'tsx'}
      />
    </Box>
  );
}
