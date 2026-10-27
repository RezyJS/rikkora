import { Dialog, Button, Stack, Field, Input } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function DialogPreview({ configuration, ru }: DocPreviewProps) {
  const close = ru ? 'Закрыть' : 'Close';
  return <PreviewFrame name='Dialog' configuration={configuration}>
    {() => ((
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>{ru ? 'Открыть диалог' : 'Open dialog'}</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>{ru ? 'Настройки' : 'Settings'}</Dialog.Title>
          <Dialog.Description>
            {ru ?
              'Измените имя и закройте окно.'
              : 'Update your name and close the dialog.'}
          </Dialog.Description>
          <Stack>
            <Field label={ru ? 'Имя' : 'Name'}>
              <Input name='dialog-name' />
            </Field>
            <Dialog.Close aria-label={close} />
          </Stack>
        </Dialog.Content>
      </Dialog.Root>
    ))}
  </PreviewFrame>;
}
