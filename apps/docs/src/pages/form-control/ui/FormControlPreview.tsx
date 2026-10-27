import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function FormControlPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='FormControl' configuration={configuration}>
    {() => ((
      <UI.FormControl>
        <UI.Field label={ru ? 'Имя' : 'Name'}>
          <UI.Input placeholder='Rikka' />
        </UI.Field>
      </UI.FormControl>
    ))}
  </PreviewFrame>;
}
