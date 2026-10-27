import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { Button, Dialog, Flex } from '@rikkora/ui';
import { ComponentPlayground } from '@/features/component-playground';
import { PreferencesControls } from '@/features/preferences-controls';
import type { ComponentDoc } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentPlaygroundDialog({ doc, ru }: { doc: ComponentDoc; ru: boolean }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant='outline' size='sm'>
          <IconAdjustmentsHorizontal size={16} stroke={1.7} aria-hidden='true' focusable='false' />
          {ru ? 'Открыть песочницу' : 'Open playground'}
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className={styles.playgroundDialog} aria-describedby={undefined}>
        <Flex align='center' justify='between' gap={4}>
          <Dialog.Title className={styles.playgroundDialogTitle}>{ru ? `Песочница ${doc.name}` : `${doc.name} playground`}</Dialog.Title>
          <Dialog.Close asChild>
            <Button variant='ghost' size='sm'>{ru ? 'Закрыть' : 'Close'}</Button>
          </Dialog.Close>
        </Flex>
        <ComponentPlayground key={doc.name} name={doc.name} showSummary={false} contained preferencesControls={<PreferencesControls />} />
      </Dialog.Content>
    </Dialog.Root>
  );
}
