import { SiteHeader } from '@/widgets/site-header';
import { Separator } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { gridDoc, type DocumentationSection, localized } from '@/entities/documentation';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { ComponentArticle, ComponentHeader, ComponentUsage, ComponentPropExamples, ComponentAccessibility, ComponentApiTable, ComponentPager } from '@/widgets/component-documentation';
import { GridPreview } from './GridPreview';

const sections: DocumentationSection[] = [
  { id: 'usage', label: localized('Usage', 'Использование') },
  { id: 'examples', label: localized('Props', 'Свойства') },
  { id: 'accessibility', label: localized('Accessibility', 'Доступность') },
  { id: 'api', label: localized('API', 'API') },
];

export function GridPage() {
  const { language } = usePreferences();
  const doc = gridDoc;
  return (
    <DocumentationLayout header={<SiteHeader />} doc={doc} sections={sections}>
      <ComponentArticle doc={doc}>
        <ComponentHeader doc={doc} />
        <Separator decorative />
        <ComponentUsage doc={doc}><GridPreview ru={language === 'ru'} /></ComponentUsage>
        <ComponentPropExamples doc={doc} language={language} Preview={GridPreview} />
        <ComponentAccessibility doc={doc} />
        <ComponentApiTable doc={doc} language={language} />
        <Separator decorative />
        <ComponentPager doc={doc} />
      </ComponentArticle>
    </DocumentationLayout>
  );
}
