import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function ProgressPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Progress' configuration={configuration}>
    {() => ((
      <UI.Progress
        value={50}
        aria-label={ru ? 'Загрузка' : 'Upload'}
        style={{ width: 200 }}
      />
    ))}
  </PreviewFrame>;
}
