import { SiteHeader } from '@/widgets/site-header';
import { Flex, Text, Link } from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { usePreferences } from '@/shared/model/preferences';
import { recipesIntro as page } from '@/entities/documentation';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { IntroHeader } from '@/widgets/component-documentation';
import { DocumentationSection, documentationStyles as styles, CodeBlock } from '@/shared/ui/documentation';

const sections = [
  {
    "id": "form",
    "label": {
      "en": "A form with validation",
      "ru": "Форма с валидацией"
    }
  },
  {
    "id": "confirmation",
    "label": {
      "en": "A confirmation dialog",
      "ru": "Диалог подтверждения"
    }
  },
  {
    "id": "notifications",
    "label": {
      "en": "A notification after saving",
      "ru": "Уведомление после сохранения"
    }
  }
];

export function RecipesPage() {
  const { language } = usePreferences();
  return <DocumentationLayout header={<SiteHeader />} title={page.title[language]} sections={sections}>
    <Flex as='article' direction='column' className={styles.article}>
      <IntroHeader page={page} />
      <DocumentationSection id='form' title={page.sections[0].title[language]}>
        <Text as='p' tone='secondary'>{page.sections[0].body[language]}</Text>
        <CodeBlock code={page.sections[0].code!} />
        <Flex gap={4} wrap>{page.sections[0].links!.map(link => link.to.startsWith('https://') ?
          <Link key={link.to} href={link.to} className={styles.textLink}>{link.label[language]}</Link> :
          <Link key={link.to} as={RouterLink} to={link.to} className={styles.textLink}>{link.label[language]}</Link>
        )}</Flex>
      </DocumentationSection>
      <DocumentationSection id='confirmation' title={page.sections[1].title[language]}>
        <Text as='p' tone='secondary'>{page.sections[1].body[language]}</Text>
        <CodeBlock code={page.sections[1].code!} />
        <Flex gap={4} wrap>{page.sections[1].links!.map(link => link.to.startsWith('https://') ?
          <Link key={link.to} href={link.to} className={styles.textLink}>{link.label[language]}</Link> :
          <Link key={link.to} as={RouterLink} to={link.to} className={styles.textLink}>{link.label[language]}</Link>
        )}</Flex>
      </DocumentationSection>
      <DocumentationSection id='notifications' title={page.sections[2].title[language]}>
        <Text as='p' tone='secondary'>{page.sections[2].body[language]}</Text>
        <CodeBlock code={page.sections[2].code!} />
        <Flex gap={4} wrap>{page.sections[2].links!.map(link => link.to.startsWith('https://') ?
          <Link key={link.to} href={link.to} className={styles.textLink}>{link.label[language]}</Link> :
          <Link key={link.to} as={RouterLink} to={link.to} className={styles.textLink}>{link.label[language]}</Link>
        )}</Flex>
      </DocumentationSection>
    </Flex>
  </DocumentationLayout>;
}
