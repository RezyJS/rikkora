import type { ReactNode } from 'react';
import { Box, Heading, Stack, Text } from '@rikkora/ui';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentExampleSection({ title, description, children, id, dataProp, level = 3 }: {
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
  dataProp?: string;
  level?: 3 | 4;
}) {
  return <Stack id={id} gap={4} className={styles.propSection} data-prop={dataProp}>
    <Heading level={level} size='lg'><Box as='code'>{title}</Box></Heading>
    <Text as='p' tone='secondary'>{description}</Text>
    {children}
  </Stack>;
}
