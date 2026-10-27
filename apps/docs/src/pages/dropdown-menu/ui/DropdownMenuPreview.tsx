import { useState } from 'react';
import { Stack, DropdownMenu, Button, Text } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function DropdownMenuPreview({ configuration, ru }: DocPreviewProps) {
  const [selection, setSelection] = useState('');
  return <PreviewFrame name='DropdownMenu' configuration={configuration}>
    {() => ((
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
    ))}
  </PreviewFrame>;
}
