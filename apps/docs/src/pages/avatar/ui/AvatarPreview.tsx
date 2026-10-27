import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function AvatarPreview({ configuration }: DocPreviewProps) {
  return <PreviewFrame name='Avatar' configuration={configuration}>
    {() => (<UI.Avatar alt='Rikka Inohana' />)}
  </PreviewFrame>;
}
