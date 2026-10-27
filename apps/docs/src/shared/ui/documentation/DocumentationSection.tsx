import type { ReactNode } from 'react';
import { Flex, Heading } from '@rikkora/ui';
import styles from './Documentation.module.css';

export function DocumentationSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <Flex as='section' id={id} direction='column' className={styles.docSection} aria-labelledby={id + '-heading'}>
    <Heading id={id + '-heading'} level={2} size='2xl'>{title}</Heading>
    {children}
  </Flex>;
}
