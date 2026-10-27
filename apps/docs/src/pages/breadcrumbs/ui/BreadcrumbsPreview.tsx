import { Breadcrumbs, Link } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function BreadcrumbsPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Breadcrumbs' configuration={configuration}>
    {() => (<Breadcrumbs aria-label={ru ? 'Хлебные крошки' : 'Breadcrumb'}>
      <Link href='/docs'>{ru ? 'Документация' : 'Docs'}</Link><span>{ru ? 'Компоненты' : 'Components'}</span>
    </Breadcrumbs>)}
  </PreviewFrame>;
}
