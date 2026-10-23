import { lazy, Suspense } from 'react';
import { Box } from '@rikkora/ui';
import styles from './CodeViewer.module.css';

export interface CodeViewerProps {
  code: string;
  language?: 'tsx' | 'css';
  compact?: boolean;
}

const CodeEditor = lazy(() => import('./CodeEditor').then((module) => ({ default: module.CodeEditor })));

export function CodeViewer(props: CodeViewerProps) {
  return <Suspense fallback={<Box as='pre' className={styles.fallback}>{props.code}</Box>}>
    <CodeEditor {...props} />
  </Suspense>;
}
