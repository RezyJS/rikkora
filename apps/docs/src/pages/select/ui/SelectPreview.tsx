import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function SelectPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Select' configuration={configuration}>
    {() => ((
      <UI.Field label={ru ? 'Тема' : 'Theme'}>
        <UI.Select defaultValue='dark'>
          <option value='dark'>Dark</option>
          <option value='light'>Light</option>
        </UI.Select>
      </UI.Field>
    ))}
  </PreviewFrame>;
}
