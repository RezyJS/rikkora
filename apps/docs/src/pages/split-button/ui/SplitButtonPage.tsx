import { SiteHeader } from '@/widgets/site-header';
import { Separator } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { splitButtonDoc, type DocumentationSection, localized, buttonSubtypeDoc } from '@/entities/documentation';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { ComponentArticle, ComponentHeader, ButtonBaseReference, ComponentUsage, ComponentPropExamples, ComponentAccessibility, ComponentApiTable, ComponentPager } from '@/widgets/component-documentation';
import { SplitButtonPreview } from './SplitButtonPreview';

const sections: DocumentationSection[] = [
  { id: 'usage', label: localized('Usage', 'Использование') },
  { id: 'examples', label: localized('Props', 'Свойства') },
  { id: 'accessibility', label: localized('Accessibility', 'Доступность') },
  { id: 'api', label: localized('API', 'API') },
];

export function SplitButtonPage() {
  const { language } = usePreferences();
  const doc = splitButtonDoc;
  const ownDoc = buttonSubtypeDoc(doc);
  return (
    <DocumentationLayout header={<SiteHeader />} doc={doc} sections={sections}>
      <ComponentArticle doc={doc}>
        <ComponentHeader doc={doc} />
        <ButtonBaseReference doc={doc} ru={language === 'ru'} />
        <Separator decorative />
        <ComponentUsage doc={doc}><SplitButtonPreview ru={language === 'ru'} /></ComponentUsage>
        <ComponentPropExamples doc={ownDoc} language={language} Preview={SplitButtonPreview} />
        <ComponentAccessibility doc={doc} />
        <ComponentApiTable doc={ownDoc} language={language} />
        <Separator decorative />
        <ComponentPager doc={doc} />
      </ComponentArticle>
    </DocumentationLayout>
  );
}
