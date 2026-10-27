import { Drawer, Button, Stack, Field, Input } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function DrawerPreview({ configuration, ru }: DocPreviewProps) {
  const close = ru ? 'Закрыть' : 'Close';
  return <PreviewFrame name='Drawer' configuration={configuration}>
    {() => ((
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button>{ru ? 'Открыть панель' : 'Open drawer'}</Button>
        </Drawer.Trigger>
        <Drawer.Content side='right'>
          <Drawer.Title>{ru ? 'Настройки' : 'Settings'}</Drawer.Title>
          <Drawer.Description>
            {ru ?
              'Панель использует поведение диалога.'
              : 'The drawer shares dialog behavior.'}
          </Drawer.Description>
          <Stack>
            <Field label={ru ? 'Имя' : 'Name'}>
              <Input name='drawer-name' />
            </Field>
            <Drawer.Close asChild>
              <Button>{close}</Button>
            </Drawer.Close>
          </Stack>
        </Drawer.Content>
      </Drawer.Root>
    ))}
  </PreviewFrame>;
}
