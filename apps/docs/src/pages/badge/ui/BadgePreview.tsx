import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function BadgePreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Badge' configuration={configuration}>
    {() => (<UI.Badge>{ru ? 'Статус' : 'Status'}</UI.Badge>)}
  </PreviewFrame>;
}
