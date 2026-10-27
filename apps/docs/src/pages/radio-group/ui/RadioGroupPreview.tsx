import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function RadioGroupPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='RadioGroup' configuration={configuration}>
    {() => ((
      <UI.RadioGroup
        aria-label={ru ? 'Тариф' : 'Plan'}
        options={[
          { value: 'basic', label: 'Basic' },
          { value: 'pro', label: 'Pro' },
        ]}
        defaultValue='basic'
      />
    ))}
  </PreviewFrame>;
}
