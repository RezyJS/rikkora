import type { ReactNode } from 'react';
import { Flex, Heading } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { type ComponentDoc } from '@/entities/documentation';
import { documentationStyles as styles, ExampleBlock } from '@/shared/ui/documentation';
import { ComponentPlaygroundDialog } from './ComponentPlaygroundDialog';

export function ComponentUsage({ doc, children }: { doc: ComponentDoc; children: ReactNode }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return (<Flex
    as='section'
    direction='column'
    id='usage'
    className={styles.docSection}
    aria-labelledby='usage-heading'
  >
    <Flex
      align='center'
      justify='between'
      gap={3}
      wrap
    >
      <Heading
        id='usage-heading'
        level={2}
        size='2xl'
      >
        {ru ? 'Использование' : 'Usage'}
      </Heading>
      <ComponentPlaygroundDialog
        doc={doc}
        ru={ru}
      />
    </Flex>
    <ExampleBlock
      key={doc.name}
      code={doc.usage}
      open
    >
      {children}
    </ExampleBlock>
  </Flex>);
}
