import { SiteHeader } from '@/widgets/site-header';
import { Separator } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { toggleButtonDoc, type DocumentationSection, localized, buttonSubtypeDoc } from '@/entities/documentation';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { ComponentArticle, ComponentHeader, ButtonBaseReference, ComponentUsage, ComponentPropExamples, ComponentAccessibility, ComponentApiTable, ComponentPager } from '@/widgets/component-documentation';
import { ToggleButtonPreview } from './ToggleButtonPreview';

const sections: DocumentationSection[] = [
  { id: 'usage', label: localized('Usage', 'Использование') },
  { id: 'examples', label: localized('Props', 'Свойства') },
  { id: 'accessibility', label: localized('Accessibility', 'Доступность') },
  { id: 'api', label: localized('API', 'API') },
];

export function ToggleButtonPage() {
  const { language } = usePreferences();
  const doc = toggleButtonDoc;
  const ownDoc = buttonSubtypeDoc(doc);
  return (
    <DocumentationLayout header={<SiteHeader />} doc={doc} sections={sections}>
      <ComponentArticle doc={doc}>
        <ComponentHeader doc={doc} />
        <ButtonBaseReference doc={doc} ru={language === 'ru'} />
        <Separator decorative />
        <ComponentUsage doc={doc}><ToggleButtonPreview ru={language === 'ru'} /></ComponentUsage>
        <ComponentPropExamples doc={ownDoc} language={language} Preview={ToggleButtonPreview} />
        <ComponentAccessibility doc={doc} />
        <ComponentApiTable doc={ownDoc} language={language} />
        <Separator decorative />
        <ComponentPager doc={doc} />
      </ComponentArticle>
    </DocumentationLayout>
  );
}
