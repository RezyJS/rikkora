import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { Box, Grid, ScrollArea, Link } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { useDocumentationSearch } from '@/features/documentation-search';
import type { ComponentDoc, DocumentationSection } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';
import { DocsSidebar } from './DocsSidebar';
import { DocsMobileNavigation } from './DocsMobileNavigation';
import { DocumentationToc } from './DocumentationToc';
import { useDocumentationNavigation } from '../model/useDocumentationNavigation';

export function DocumentationLayout({ children, header, doc, sections = [], title }: { children: ReactNode; header: ReactNode; doc?: ComponentDoc; sections?: DocumentationSection[]; title?: string }) {
  const { location, content } = useDocumentationNavigation();
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { query, setQuery, sidebarScrollTop } = useDocumentationSearch();
  const sidebarViewport = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const viewport = sidebarViewport.current;
    if (!viewport) return;
    viewport.scrollTop = sidebarScrollTop.current;
    return () => { sidebarScrollTop.current = viewport.scrollTop; };
  }, [sidebarScrollTop]);
  return (
    <Box className={styles.page}>
      <Link
        href='#docs-content'
        className={styles.skipLink}
      >
        {ru ? 'Перейти к содержимому' : 'Skip to content'}
      </Link>
      <Box className={styles.siteHeader}>
        {header}
      </Box>
      <DocsMobileNavigation
        query={query}
        setQuery={setQuery}
        label={
          doc?.name ?? title ?? (ru ? 'Обзор' : 'Overview')
        }
      />
      <Grid className={styles.layout}>
        <Box
          as='aside'
          className={styles.desktopSidebar}
        >
          <ScrollArea
            className={styles.sidebarScroll}
            viewportRef={sidebarViewport}
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
          {children}
        </Box>
        {sections.length > 0 && (
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
