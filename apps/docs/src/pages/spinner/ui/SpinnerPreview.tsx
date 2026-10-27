import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function SpinnerPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Spinner' configuration={configuration}>
    {() => (<UI.Spinner aria-label={ru ? 'Загрузка' : 'Loading'} />)}
  </PreviewFrame>;
}
