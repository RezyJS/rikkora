import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function InputPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Input' configuration={configuration}>
    {(settings) => ((
      <UI.Field label={ru ? 'Имя' : 'Name'}>
        <UI.Input variant={settings.Input?.underline !== undefined ? 'hover' : undefined}
          placeholder={ru ? 'Введите имя' : 'Enter your name'} />
      </UI.Field>
    ))}
  </PreviewFrame>;
}
