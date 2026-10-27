import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function SkeletonPreview({ configuration }: DocPreviewProps) {
  return <PreviewFrame name='Skeleton' configuration={configuration}>
    {() => (<UI.Skeleton style={{ width: 120, height: 48 }} />)}
  </PreviewFrame>;
}
