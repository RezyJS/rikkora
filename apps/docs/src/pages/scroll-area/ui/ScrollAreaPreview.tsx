import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function ScrollAreaPreview({ configuration, ru }: DocPreviewProps) {
  const content = ru ? 'Содержимое' : 'Content';
  return <PreviewFrame name='ScrollArea' configuration={configuration}>
    {(settings) => ((
      <UI.ScrollArea
        type='always'
        orientation='both'
        aria-label={ru ? 'Пример прокрутки' : 'Scroll example'}
        style={{
          width: 240,
          height: 140,
          border: '1px solid var(--rkr-color-border-default)',
          borderRadius: 'var(--rkr-radius-md)',
        }}
      >
        <UI.Stack
          gap={3}
          style={{
            width:
              settings.ScrollArea?.orientation === 'vertical' ?
                undefined
                : 400,
            padding: 'var(--rkr-spacing-3)',
          }}
        >
          {Array.from({ length: 12 }, (_, index) => (
            <UI.Text key={index}>
              {content} {index + 1}
            </UI.Text>
          ))}
        </UI.Stack>
      </UI.ScrollArea>
    ))}
  </PreviewFrame>;
}
