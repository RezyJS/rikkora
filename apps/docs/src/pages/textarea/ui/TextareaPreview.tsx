import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function TextareaPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Textarea' configuration={configuration}>
    {() => ((
      <UI.Field label={ru ? 'Сообщение' : 'Message'}>
        <UI.Textarea
          rows={3}
          placeholder={ru ? 'Введите сообщение' : 'Write a message'}
        />
      </UI.Field>
    ))}
  </PreviewFrame>;
}
