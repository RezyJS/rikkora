import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function AlertPreview({ configuration, ru }: DocPreviewProps) {
  const content = ru ? 'Содержимое' : 'Content';
  return <PreviewFrame name='Alert' configuration={configuration}>
    {() => ((
      <UI.Alert title={ru ? 'Информация' : 'Information'}>
        {content}
      </UI.Alert>
    ))}
  </PreviewFrame>;
}
