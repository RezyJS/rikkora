import { SiteHeader } from '@/widgets/site-header';
import { overviewSections } from '@/entities/documentation';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { GettingStarted } from './GettingStarted';

export function OverviewPage() {
  return <DocumentationLayout header={<SiteHeader />} sections={overviewSections}><GettingStarted /></DocumentationLayout>;
}
