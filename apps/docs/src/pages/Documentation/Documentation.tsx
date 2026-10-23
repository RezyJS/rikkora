import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router';
import { Box, Grid, Heading, Stack, Text, ScrollArea, Link } from '@rikkora/ui';
import { SiteHeader } from '../../components/SiteHeader/SiteHeader';
import { usePreferences } from '../../preferences/PreferencesContext';
import { componentDocs } from './componentDocs';
import { ComponentPage } from './ComponentPage';
import { DocsSidebar } from './DocsSidebar';
import { GettingStarted } from './GettingStarted';
import { IntroPage } from './IntroPage';
import { introPages, type IntroPageData } from './introPages';
import styles from './Documentation.module.css';
import { componentSections, overviewSections } from './documentationSections';
import { useDocumentationNavigation } from './useDocumentationNavigation';
import { DocumentationToc } from './DocumentationToc';
import { DocsMobileNavigation } from './DocsMobileNavigation';
import { individualProps, previewValues } from './propExamples';

export function Documentation({
  notFound = false,
  intro,
}: {
  notFound?: boolean;
  intro?: IntroPageData['id'];
}) {
  const { slug } = useParams();
  const { location, content } = useDocumentationNavigation();
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [query, setQuery] = useState('');
  const doc = componentDocs.find((entry) => entry.slug === slug);
  const introPage = introPages.find((page) => page.id === intro);
  const missing = notFound || (!!slug && !doc);
  const sections =
    doc ? componentSections.filter(section => section.id !== 'examples' || doc.api.some(part => individualProps(part.props).some(property => previewValues(doc, part.name, property).length > 0)))
    : introPage ?
      introPage.sections.map((section) => ({
        id: section.id,
        label: section.title,
      }))
    : overviewSections;

  useEffect(() => {
    if (missing)
      document.title =
        ru ? 'Страница не найдена — Rikkora UI' : 'Page not found — Rikkora UI';
  }, [missing, ru]);
  return (
    <Box className={styles.page}>
      <Link
        href='#docs-content'
        className={styles.skipLink}
      >
        {ru ? 'Перейти к содержимому' : 'Skip to content'}
      </Link>
      <Box className={styles.siteHeader}>
        <SiteHeader />
      </Box>
      <DocsMobileNavigation
        query={query}
        setQuery={setQuery}
        label={
          doc?.name ?? introPage?.title[language] ?? (ru ? 'Обзор' : 'Overview')
        }
      />
      <Grid className={styles.layout}>
        <Box
          as='aside'
          className={styles.desktopSidebar}
        >
          <ScrollArea
            className={styles.sidebarScroll}
            viewportProps={{ tabIndex: -1, style: { padding: 4 } }}
          >
            <DocsSidebar
              query={query}
              setQuery={setQuery}
            />
          </ScrollArea>
        </Box>
        <Box
          as='main'
          id='docs-content'
          ref={content}
          className={styles.content}
          tabIndex={-1}
        >
          {missing ?
            <Stack
              gap={4}
              className={styles.article}
            >
              <Heading
                level={1}
                tabIndex={-1}
                className={styles.pageTitle}
              >
                {ru ? 'Страница не найдена' : 'Page not found'}
              </Heading>
              <Text
                as='p'
                tone='secondary'
              >
                {ru ?
                  'Выберите компонент в меню или вернитесь к обзору.'
                : 'Choose a component from the menu or return to the overview.'}
              </Text>
              <Link
                as={RouterLink}
                className={styles.textLink}
                to='/docs'
              >
                {ru ? 'К документации' : 'Back to documentation'}
              </Link>
            </Stack>
          : doc ?
            <ComponentPage
              key={doc.slug}
              doc={doc}
            />
          : introPage ?
            <IntroPage page={introPage} />
          : <GettingStarted />}
        </Box>
        {!missing && (
          <DocumentationToc
            doc={doc}
            sections={sections}
            hash={location.hash}
          />
        )}
      </Grid>
    </Box>
  );
}
