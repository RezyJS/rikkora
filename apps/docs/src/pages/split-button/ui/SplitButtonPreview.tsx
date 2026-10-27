import { useState } from 'react';
import { DropdownMenu, SplitButton, Stack, Text } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function SplitButtonPreview({ configuration, ru }: DocPreviewProps) {
  const [selection, setSelection] = useState('');
  return <PreviewFrame name='SplitButton' configuration={configuration}>
    {() => <Stack>
      <SplitButton menuLabel={ru ? 'Другие действия' : 'More actions'}
        onClick={() => setSelection(ru ? 'Сохранено' : 'Saved')}
        menu={<DropdownMenu.Item onSelect={() => setSelection(ru ? 'Выбрано «Сохранить как»' : 'Save as selected')}>{ru ? 'Сохранить как…' : 'Save as…'}</DropdownMenu.Item>}>
        {ru ? 'Сохранить' : 'Save'}
      </SplitButton>
      <Text role='status' size='sm'>{selection}</Text>
    </Stack>}
  </PreviewFrame>;
}
