import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function FieldPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Field' configuration={configuration}>
    {() => ((
      <UI.Field label={ru ? 'Имя' : 'Name'}>
        <UI.Input placeholder='Rikka' />
      </UI.Field>
    ))}
  </PreviewFrame>;
}
