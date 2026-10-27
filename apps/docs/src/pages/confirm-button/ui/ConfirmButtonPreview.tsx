import { useState } from 'react';
import { ConfirmButton, Stack, Text } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function ConfirmButtonPreview({ configuration, ru }: DocPreviewProps) {
  const [confirmed, setConfirmed] = useState(false);
  return <PreviewFrame name='ConfirmButton' configuration={configuration}>
    {() => <Stack>
      <ConfirmButton title={ru ? 'Подтвердить действие?' : 'Confirm the action?'}
        description={ru ? 'Это демонстрация: данные не изменяются.' : 'This demonstration does not change any data.'}
        confirmText={ru ? 'Подтвердить' : 'Confirm'} cancelText={ru ? 'Отмена' : 'Cancel'}
        pendingText={ru ? 'Выполняем…' : 'Confirming…'} errorText={ru ? 'Не удалось выполнить действие.' : 'Could not complete the action.'}
        onConfirm={() => setConfirmed(true)}>
        {ru ? 'Подтвердить действие' : 'Confirm action'}
      </ConfirmButton>
      <Text role='status' size='sm'>{confirmed ? (ru ? 'Подтверждено' : 'Confirmed') : ''}</Text>
    </Stack>}
  </PreviewFrame>;
}
