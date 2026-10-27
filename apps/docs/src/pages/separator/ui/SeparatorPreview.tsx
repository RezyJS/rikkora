import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function SeparatorPreview({ configuration }: DocPreviewProps) {
  return <PreviewFrame name='Separator' configuration={configuration}>
    {() => ((
      <UI.Flex
        align='center'
        gap={3}
        style={{ width: 200, height: 80 }}
      >
        A<UI.Separator />B
      </UI.Flex>
    ))}
  </PreviewFrame>;
}
