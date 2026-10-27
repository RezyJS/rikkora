import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function StackPreview({ configuration }: DocPreviewProps) {
  const items = ['A', 'B', 'C'].map(item => <UI.Box key={item} className={styles.exampleItem}>{item}</UI.Box>);
  return <PreviewFrame name='Stack' configuration={configuration}>
    {() => ((
      <UI.Stack
        gap={3}
        className={styles.exampleLayout}
      >
        {items}
      </UI.Stack>
    ))}
  </PreviewFrame>;
}
