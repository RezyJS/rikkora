import { Popover, Button, Stack, Text, Field, Input } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function PopoverPreview({ configuration, ru }: DocPreviewProps) {
  const content = ru ? 'Содержимое' : 'Content';
  const close = ru ? 'Закрыть' : 'Close';
  return <PreviewFrame name='Popover' configuration={configuration}>
    {() => ((
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button>{ru ? 'Подробности' : 'Details'}</Button>
        </Popover.Trigger>
        <Popover.Content aria-label={ru ? 'Подробности' : 'Details'}>
          <Stack>
            <Text>{content}</Text>
            <Field label={ru ? 'Имя' : 'Name'}>
              <Input />
            </Field>
            <Popover.Close asChild>
              <Button>{close}</Button>
            </Popover.Close>
          </Stack>
        </Popover.Content>
      </Popover.Root>
    ))}
  </PreviewFrame>;
}
