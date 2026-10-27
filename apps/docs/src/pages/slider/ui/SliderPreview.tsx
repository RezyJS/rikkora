import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function SliderPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Slider' configuration={configuration}>
    {() => ((
      <UI.Field label={ru ? 'Громкость' : 'Volume'}>
        <UI.Slider defaultValue={50} />
      </UI.Field>
    ))}
  </PreviewFrame>;
}
