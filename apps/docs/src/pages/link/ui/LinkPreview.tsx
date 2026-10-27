import { Link } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function LinkPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Link' configuration={configuration}>
    {() => ((
      <Link href='#setup'>
        {ru ? 'Перейти к подключению' : 'Go to setup'}
      </Link>
    ))}
  </PreviewFrame>;
}
