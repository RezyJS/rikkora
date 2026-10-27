import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function BoxPreview({ configuration, ru }: DocPreviewProps) {
  const content = ru ? 'Содержимое' : 'Content';
  return <PreviewFrame name='Box' configuration={configuration}>
    {() => ((
      <UI.Box
        padding={4}
        className={styles.exampleItem}
      >
        {content}
      </UI.Box>
    ))}
  </PreviewFrame>;
}
