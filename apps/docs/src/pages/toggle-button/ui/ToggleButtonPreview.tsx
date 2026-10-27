import { ToggleButton } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function ToggleButtonPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='ToggleButton' configuration={configuration}>
    {() => <ToggleButton>{ru ? 'Жирный' : 'Bold'}</ToggleButton>}
  </PreviewFrame>;
}
