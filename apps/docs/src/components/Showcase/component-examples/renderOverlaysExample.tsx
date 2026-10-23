import {
  Text,
  Stack,
  Field,
  Dialog,
  Popover,
  Tooltip,
  DropdownMenu,
  Drawer,
  Button,
  Input,
} from '@rikkora/ui';
import type { AdditionalExample } from '../componentNames';
import type { ExampleRenderContext } from './types';

export function renderOverlaysExample(
  name: AdditionalExample,
  context: ExampleRenderContext,
) {
  const { ru, content, close, selection, setSelection } = context;
  switch (name) {
    case 'Dialog':
      return (
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
      );
    case 'Drawer':
      return (
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
      );
    case 'Popover':
      return (
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
      );
    case 'Tooltip':
      return (
        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variant='outline'>{ru ? 'Помощь' : 'Help'}</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {ru ?
                'Подсказка работает по наведению и фокусу.'
              : 'This tooltip works on hover and focus.'}
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
    case 'DropdownMenu':
      return (
        <Stack>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button>{ru ? 'Действия' : 'Actions'}</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>
                {ru ? 'Документ' : 'Document'}
              </DropdownMenu.Label>
              <DropdownMenu.Item
                onSelect={() => setSelection(ru ? 'Изменить' : 'Edit')}
              >
                {ru ? 'Изменить' : 'Edit'}
              </DropdownMenu.Item>
              <DropdownMenu.Item disabled>
                {ru ? 'Удалить' : 'Delete'}
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                onSelect={() => setSelection(ru ? 'Копировать' : 'Copy')}
              >
                {ru ? 'Копировать' : 'Copy'}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Text role='status'>{selection}</Text>
        </Stack>
      );
  }
}
