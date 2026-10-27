import { Button, ButtonGroup } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function ButtonGroupPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='ButtonGroup' configuration={configuration}>
    {() => <ButtonGroup aria-label={ru ? 'Действия' : 'Actions'}>
      <Button variant='outline'>{ru ? 'Сохранить' : 'Save'}</Button>
      <Button variant='outline'>{ru ? 'Отмена' : 'Cancel'}</Button>
    </ButtonGroup>}
  </PreviewFrame>;
}
