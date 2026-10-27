import * as UI from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function GridPreview({ configuration }: DocPreviewProps) {
  const items = ['A', 'B', 'C'].map(item => <UI.Box key={item} className={styles.exampleItem}>{item}</UI.Box>);
  return <PreviewFrame name='Grid' configuration={configuration}>
    {() => ((
      <UI.Grid
        columns={2}
        gap={3}
        className={styles.exampleLayout}
      >
        {items}
      </UI.Grid>
    ))}
  </PreviewFrame>;
}
