import { useState } from 'react';
import { HoldToConfirm, Stack, Text } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function HoldToConfirmPreview({ configuration, ru }: DocPreviewProps) {
  const [count, setCount] = useState(0);
  return <PreviewFrame name='HoldToConfirm' configuration={configuration}>
    {() => <Stack>
      <HoldToConfirm tone='danger' variant='soft' onConfirm={() => setCount(current => current + 1)}
        holdingText={ru ? 'Продолжайте удерживать…' : 'Keep holding…'} confirmedText={ru ? 'Подтверждено' : 'Confirmed'}
        instructions={ru ? 'Удерживайте кнопку, Enter или Space. Отпустите или нажмите Escape для отмены.' : undefined}>
        {ru ? 'Удерживайте для подтверждения' : 'Hold to confirm'}
      </HoldToConfirm>
      <Text role='status' size='sm'>{ru ? 'Подтверждений' : 'Confirmations'}: {count}</Text>
    </Stack>}
  </PreviewFrame>;
}
