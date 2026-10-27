import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function SwitchPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Switch' configuration={configuration}>
    {() => ((
      <UI.Field label={ru ? 'Уведомления' : 'Notifications'}>
        <UI.Switch />
      </UI.Field>
    ))}
  </PreviewFrame>;
}
