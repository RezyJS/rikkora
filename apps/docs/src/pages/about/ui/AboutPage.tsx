import { SiteHeader } from '@/widgets/site-header';
import { Flex, Text, Link } from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { usePreferences } from '@/shared/model/preferences';
import { aboutIntro as page } from '@/entities/documentation';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { IntroHeader } from '@/widgets/component-documentation';
import { DocumentationSection, documentationStyles as styles } from '@/shared/ui/documentation';

const sections = [
  {
    "id": "idea",
    "label": {
      "en": "The idea",
      "ru": "Идея"
    }
  },
  {
    "id": "principles",
    "label": {
      "en": "What matters to us",
      "ru": "Что для нас важно"
    }
  },
  {
    "id": "participate",
    "label": {
      "en": "Build with us",
      "ru": "Можно поучаствовать"
    }
  }
];

export function AboutPage() {
  const { language } = usePreferences();
  return <DocumentationLayout header={<SiteHeader />} title={page.title[language]} sections={sections}>
    <Flex as='article' direction='column' className={styles.article}>
      <IntroHeader page={page} />
      <DocumentationSection id='idea' title={page.sections[0].title[language]}>
        <Text as='p' tone='secondary'>{page.sections[0].body[language]}</Text>
      </DocumentationSection>
      <DocumentationSection id='principles' title={page.sections[1].title[language]}>
        <Text as='p' tone='secondary'>{page.sections[1].body[language]}</Text>
        <Flex gap={4} wrap>{page.sections[1].links!.map(link => link.to.startsWith('https://') ?
          <Link key={link.to} href={link.to} className={styles.textLink}>{link.label[language]}</Link> :
          <Link key={link.to} as={RouterLink} to={link.to} className={styles.textLink}>{link.label[language]}</Link>
        )}</Flex>
      </DocumentationSection>
      <DocumentationSection id='participate' title={page.sections[2].title[language]}>
        <Text as='p' tone='secondary'>{page.sections[2].body[language]}</Text>
        <Flex gap={4} wrap>{page.sections[2].links!.map(link => link.to.startsWith('https://') ?
          <Link key={link.to} href={link.to} className={styles.textLink}>{link.label[language]}</Link> :
          <Link key={link.to} as={RouterLink} to={link.to} className={styles.textLink}>{link.label[language]}</Link>
        )}</Flex>
      </DocumentationSection>
    </Flex>
  </DocumentationLayout>;
}
