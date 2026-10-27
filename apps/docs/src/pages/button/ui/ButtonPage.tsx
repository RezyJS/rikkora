import { SiteHeader } from '@/widgets/site-header';
import { Separator } from '@rikkora/ui';
import { buttonDoc } from '@/entities/documentation';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { ComponentArticle, ComponentHeader, ComponentAccessibility, ComponentPager } from '@/widgets/component-documentation';
import { buttonSections } from '../model/buttonSections';
import { ButtonUsageExamples } from './ButtonUsageExamples';
import { ButtonAppearanceSection } from './ButtonAppearanceSection';
import { ButtonLayoutSection } from './ButtonLayoutSection';
import { ButtonTypographySection } from './ButtonTypographySection';
import { ButtonStatesSection } from './ButtonStatesSection';
import { ButtonPropsReference } from './ButtonPropsReference';

export function ButtonPage() {
  const doc = buttonDoc;
  return (
    <DocumentationLayout header={<SiteHeader />} doc={doc} sections={buttonSections}>
      <ComponentArticle doc={doc}>
        <ComponentHeader doc={doc} />
        <Separator decorative />
        <ButtonUsageExamples />
        <ButtonAppearanceSection />
        <ButtonLayoutSection />
        <ButtonTypographySection />
        <ButtonStatesSection />
        <ComponentAccessibility doc={doc} />
        <ButtonPropsReference />
        <Separator decorative />
        <ComponentPager doc={doc} />
      </ComponentArticle>
    </DocumentationLayout>
  );
}
