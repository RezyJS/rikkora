import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function HeadingPreview({ configuration }: DocPreviewProps) {
  return <PreviewFrame name='Heading' configuration={configuration}>
    {() => (<UI.Heading level={3}>Rikkora UI</UI.Heading>)}
  </PreviewFrame>;
}
