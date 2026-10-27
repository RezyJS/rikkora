import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function CheckboxPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Checkbox' configuration={configuration}>
    {() => ((
      <UI.Field label={ru ? 'Получать обновления' : 'Receive updates'}>
        <UI.Checkbox />
      </UI.Field>
    ))}
  </PreviewFrame>;
}
