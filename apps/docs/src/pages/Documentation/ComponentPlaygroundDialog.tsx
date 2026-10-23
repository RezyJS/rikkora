import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { Button, Dialog, Flex } from '@rikkora/ui';
import { ComponentPlayground } from '../../components/Showcase/ComponentPlayground';
import type { ComponentDoc } from './componentDocs';
import styles from './Documentation.module.css';

export function ComponentPlaygroundDialog({ doc, ru }: { doc: ComponentDoc; ru: boolean }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant='outline' size='sm'>
          <IconAdjustmentsHorizontal size={16} stroke={1.7} aria-hidden='true' focusable='false' />
          {ru ? 'Настроить' : 'Customize'}
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className={styles.playgroundDialog} aria-describedby={undefined}>
        <Flex align='center' justify='between' gap={4}>
          <Dialog.Title>{ru ? `Настройка ${doc.name}` : `Customize ${doc.name}`}</Dialog.Title>
          <Dialog.Close asChild>
            <Button variant='ghost' size='sm'>{ru ? 'Закрыть' : 'Close'}</Button>
          </Dialog.Close>
        </Flex>
        <ComponentPlayground key={doc.name} name={doc.name} showSummary={false} />
      </Dialog.Content>
    </Dialog.Root>
  );
}
