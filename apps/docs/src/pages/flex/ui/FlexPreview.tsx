import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function FlexPreview({ configuration }: DocPreviewProps) {
  const items = ['A', 'B', 'C'].map(item => <UI.Box key={item} className={styles.exampleItem}>{item}</UI.Box>);
  return <PreviewFrame name='Flex' configuration={configuration}>
    {() => ((
      <UI.Flex
        gap={3}
        className={styles.exampleLayout}
      >
        {items}
      </UI.Flex>
    ))}
  </PreviewFrame>;
}
