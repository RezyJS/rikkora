import { useEffect, type ReactNode } from 'react';
import { Flex } from '@rikkora/ui';
import type { ComponentDoc } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentArticle({ doc, children }: { doc: ComponentDoc; children: ReactNode }) {
  useEffect(() => { document.title = doc.name + ' — Rikkora UI'; }, [doc.name]);
  return <Flex as='article' direction='column' className={styles.article}>{children}</Flex>;
}
