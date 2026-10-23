import { Fragment, useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigationType, useParams } from 'react-router';
import { Accordion, Box, Button, Drawer, Flex, Grid, Heading, Stack, Text, ScrollArea, Link } from '@rikkora/ui';
import { SiteHeader } from '../../components/SiteHeader/SiteHeader';
import { usePreferences } from '../../preferences/PreferencesContext';
import { componentDocs, localized } from './componentDocs';
import { ComponentPage } from './ComponentPage';
import { DocsSidebar } from './DocsSidebar';
import { GettingStarted } from './GettingStarted';
import styles from './Documentation.module.css';
import { individualProps, propAnchor } from './propExamples';

const componentSections = [
  { id: 'usage', label: localized('Usage', 'Использование') },
  { id: 'api', label: localized('API', 'API') },
  { id: 'accessibility', label: localized('Accessibility', 'Доступность') },
];
const overviewSections = [
  { id: 'setup', label: localized('Setup', 'Подключение') },
  { id: 'themes', label: localized('Themes and styling', 'Темы и стилизация') },
  { id: 'conventions', label: localized('API conventions', 'Соглашения API') },
  { id: 'components', label: localized('Components', 'Компоненты') },
];

export function Documentation({ notFound = false }: { notFound?: boolean }) {
  const { slug } = useParams();
  const location = useLocation();
  const navigationType = useNavigationType();
  const content = useRef<HTMLElement>(null);
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const doc = componentDocs.find((entry) => entry.slug === slug);
  const missing = notFound || (!!slug && !doc);
  const sections = doc ? componentSections : overviewSections;
  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({
      behavior: navigationType === 'POP' || window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
    else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      content.current?.querySelector('h1')?.focus({ preventScroll: true });
    }
  }, [location.pathname, location.hash, location.key, navigationType]);
  useEffect(() => {
    if (missing) document.title = ru ? 'Страница не найдена — Rikkora UI' : 'Page not found — Rikkora UI';
  }, [missing, ru]);
  return <Box className={styles.page}>
    <Link href='#docs-content' className={styles.skipLink}>{ru ? 'Перейти к содержимому' : 'Skip to content'}</Link>
    <Box className={styles.siteHeader}><SiteHeader /></Box>
    <Box className={styles.mobileBar}>
      <Drawer.Root open={mobileOpen} onOpenChange={setMobileOpen}>
        <Drawer.Trigger asChild><Button variant='outline' size='sm'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'><path d='M4 6h16M4 12h16M4 18h16' /></svg>
          {ru ? 'Компоненты' : 'Components'}
        </Button></Drawer.Trigger>
        <Drawer.Content side='left' aria-describedby={undefined} className={styles.mobileDrawer}>
          <Flex align='center' justify='between'><Drawer.Title>{ru ? 'Документация' : 'Documentation'}</Drawer.Title><Drawer.Close asChild><Button variant='ghost' size='sm'>{ru ? 'Закрыть' : 'Close'}</Button></Drawer.Close></Flex>
          <ScrollArea className={styles.mobileNavigation} viewportProps={{ tabIndex: -1, style: { padding: 4 } }}>
            <DocsSidebar query={query} setQuery={setQuery} onNavigate={() => setMobileOpen(false)} />
          </ScrollArea>
        </Drawer.Content>
      </Drawer.Root>
      <Text as='span' size='sm' tone='secondary'>{doc?.name ?? (ru ? 'Обзор' : 'Overview')}</Text>
    </Box>
    <Grid className={styles.layout}>
      <Box as='aside' className={styles.desktopSidebar}><ScrollArea className={styles.sidebarScroll} viewportProps={{ tabIndex: -1, style: { padding: 4 } }}><DocsSidebar query={query} setQuery={setQuery} /></ScrollArea></Box>
      <Box as='main' id='docs-content' ref={content} className={styles.content} tabIndex={-1}>
        {missing ? <Stack gap={4} className={styles.article}><Heading level={1} tabIndex={-1} className={styles.pageTitle}>{ru ? 'Страница не найдена' : 'Page not found'}</Heading><Text as='p' tone='secondary'>{ru ? 'Выберите компонент в меню или вернитесь к обзору.' : 'Choose a component from the menu or return to the overview.'}</Text><Link as={RouterLink} className={styles.textLink} to='/docs'>{ru ? 'К документации' : 'Back to documentation'}</Link></Stack>
          : doc ? <ComponentPage key={doc.slug} doc={doc} /> : <GettingStarted />}
      </Box>
      {!missing && <Box as='aside' className={styles.toc}><ScrollArea className={styles.tocScroll} viewportProps={{ tabIndex: -1 }}><Flex as='nav' direction='column' aria-label={ru ? 'На этой странице' : 'On this page'}>
        <Text as='p' size='md' className={styles.tocTitle}>{ru ? 'На этой странице' : 'On this page'}</Text>
        {sections.map((section) => <Fragment key={section.id}>
        <Link as={RouterLink} to={`#${section.id}`}>{section.label[language]}</Link>
        {section.id === 'api' && doc && <Accordion.Root key={doc.slug} type='single' collapsible className={styles.tocProps}
          defaultValue={location.hash.startsWith('#prop-') ? 'props' : undefined}>
          <Accordion.Item value='props'>
            <Accordion.Header><Accordion.Trigger className={styles.tocPropsTrigger}>{ru ? 'Свойства' : 'Props'}</Accordion.Trigger></Accordion.Header>
            <Accordion.Content className={styles.tocPropsContent}>
              <Stack gap={4}>{doc.api.map((part) => <Stack key={part.name} gap={2}>
                {doc.api.length > 1 && <Text size='sm' tone='secondary'>{part.name}</Text>}
                {individualProps(part.props).map((property) => <Link as={RouterLink} key={property.name}
                  to={`#${propAnchor(part.name, property.name)}`}>{property.name}</Link>)}
              </Stack>)}</Stack>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>}
        </Fragment>)}
      </Flex></ScrollArea></Box>}
    </Grid>
  </Box>;
}
