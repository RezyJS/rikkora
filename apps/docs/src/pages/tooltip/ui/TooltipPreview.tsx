import { Tooltip, Button } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function TooltipPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Tooltip' configuration={configuration}>
    {() => ((
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
    ))}
  </PreviewFrame>;
}
