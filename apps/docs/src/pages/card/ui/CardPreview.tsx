import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function CardPreview({ configuration, ru }: DocPreviewProps) {
  const content = ru ? 'Содержимое' : 'Content';
  return <PreviewFrame name='Card' configuration={configuration}>
    {() => ((
      <UI.Card>
        <UI.Stack>
          <UI.Heading
            level={3}
            size='lg'
          >
            Rikkora UI
          </UI.Heading>
          <UI.Text>{content}</UI.Text>
        </UI.Stack>
      </UI.Card>
    ))}
  </PreviewFrame>;
}
