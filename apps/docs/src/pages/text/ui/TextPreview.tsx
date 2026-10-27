import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function TextPreview({ configuration }: DocPreviewProps) {
  return <PreviewFrame name='Text' configuration={configuration}>
    {() => (<UI.Text>Rikkora UI</UI.Text>)}
  </PreviewFrame>;
}
