import { SiteHeader } from '@/widgets/site-header';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router';
import { Heading, Stack, Text, Link } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationLayout } from '@/widgets/documentation-layout';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function NotFoundPage() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  useEffect(() => { document.title = (ru ? 'Страница не найдена' : 'Page not found') + ' — Rikkora UI'; }, [ru]);
  return <DocumentationLayout header={<SiteHeader />}>
    <Stack gap={4} className={styles.article}>
      <Heading level={1} tabIndex={-1} className={styles.pageTitle}>{ru ? 'Страница не найдена' : 'Page not found'}</Heading>
      <Text as='p' tone='secondary'>{ru ? 'Выберите компонент в меню или вернитесь к обзору.' : 'Choose a component from the menu or return to the overview.'}</Text>
      <Link as={RouterLink} className={styles.textLink} to='/docs'>{ru ? 'К документации' : 'Back to documentation'}</Link>
    </Stack>
  </DocumentationLayout>;
}
