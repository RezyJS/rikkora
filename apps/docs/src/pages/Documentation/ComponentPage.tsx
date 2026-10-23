import { IconCode, IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  Breadcrumbs,
  ButtonLink,
  Badge,
  Flex,
  Grid,
  Heading,
  Separator,
  Stack,
  Table,
  Text,
  ScrollArea,
  Link,
  Box,
} from '@rikkora/ui';
import { ComponentPlaygroundDialog } from './ComponentPlaygroundDialog';
import { ComponentApiTable } from './ComponentApiTable';
import { ComponentPropExamples } from './ComponentPropExamples';
import { usePreferences } from '../../preferences/PreferencesContext';
import { ExampleBlock } from './ExampleBlock';
import { ComponentPreview } from './ComponentPreview';
import { componentDocs, type ComponentDoc } from './componentDocs';
import styles from './Documentation.module.css';

export function ComponentPage({ doc }: { doc: ComponentDoc }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  useEffect(() => {
    document.title = `${doc.name} — Rikkora UI`;
  }, [doc.name]);
  const index = componentDocs.findIndex((entry) => entry.name === doc.name);
  const previous = componentDocs[index - 1];
  const next = componentDocs[index + 1];
  return (
    <Flex
      as='article'
      direction='column'
      className={styles.article}
    >
      <Flex
        as='header'
        direction='column'
        className={styles.articleHeader}
      >
        <Breadcrumbs
          aria-label={ru ? 'Хлебные крошки' : 'Breadcrumb'}
          className={styles.breadcrumb}
        >
          <Link
            as={RouterLink}
            to='/docs'
          >
            {ru ? 'Документация' : 'Docs'}
          </Link>
          <Text
            size='xs'
            tone='secondary'
          >
            {doc.name}
          </Text>
        </Breadcrumbs>
        <Stack gap={2}>
          <Heading
            level={1}
            size='4xl'
            tabIndex={-1}
            className={styles.pageTitle}
          >
            {doc.name}
          </Heading>
          <Text
            as='p'
            size='lg'
            tone='secondary'
            className={styles.lead}
          >
            {doc.summary[language]}
          </Text>
        </Stack>
        <Flex
          gap={3}
          align='center'
          wrap
        >
          <Badge>@rikkora/ui</Badge>
          <ButtonLink
            variant='primary'
            size='xs'
            radius='full'
            href={`https://github.com/RezyJS/rikkora/blob/main/packages/ui/src/components/${doc.source}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconCode
              size={16}
              stroke={1.7}
              aria-hidden='true'
              focusable='false'
            />
            {ru ? 'Исходный код' : 'Source'}
          </ButtonLink>
        </Flex>
      </Flex>
      <Separator decorative />
      <Flex
        as='section'
        direction='column'
        id='usage'
        className={styles.docSection}
        aria-labelledby='usage-heading'
      >
        <Flex
          align='center'
          justify='between'
          gap={3}
          wrap
        >
          <Heading
            id='usage-heading'
            level={2}
            size='2xl'
          >
            {ru ? 'Использование' : 'Usage'}
          </Heading>
          <ComponentPlaygroundDialog
            doc={doc}
            ru={ru}
          />
        </Flex>
        <ExampleBlock
          key={doc.name}
          code={doc.usage}
          open
        >
          <ComponentPreview
            key={doc.name}
            doc={doc}
            ru={ru}
          />
        </ExampleBlock>
      </Flex>
      <ComponentPropExamples
        doc={doc}
        language={language}
      />
      <Flex
        as='section'
        direction='column'
        id='accessibility'
        className={styles.docSection}
        aria-labelledby='accessibility-heading'
      >
        <Heading
          id='accessibility-heading'
          level={2}
          size='2xl'
        >
          {ru ? 'Доступность' : 'Accessibility'}
        </Heading>
        <Stack gap={3}>
          {doc.accessibility.map((note) => (
            <Text
              as='p'
              key={note.en}
              tone='secondary'
            >
              {note[language]}
            </Text>
          ))}
        </Stack>
        {doc.keyboard.length > 0 && (
          <ScrollArea
            orientation='horizontal'
            className={styles.tableScroll}
            aria-label={ru ? 'Управление с клавиатуры' : 'Keyboard interaction'}
          >
            <Table.Root>
              <Table.Caption className={styles.visuallyHidden}>
                {ru ? 'Управление с клавиатуры' : 'Keyboard interaction'}
              </Table.Caption>
              <Table.Head>
                <Table.Row>
                  <Table.Header>{ru ? 'Клавиша' : 'Key'}</Table.Header>
                  <Table.Header>{ru ? 'Действие' : 'Action'}</Table.Header>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {doc.keyboard.map((entry) => (
                  <Table.Row key={entry.keys}>
                    <Table.Header scope='row'>
                      <Box
                        as='kbd'
                        className={styles.key}
                      >
                        {entry.keys}
                      </Box>
                    </Table.Header>
                    <Table.Cell>{entry.description[language]}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </ScrollArea>
        )}
      </Flex>
      <ComponentApiTable
        doc={doc}
        language={language}
      />
      <Separator decorative />
      <Grid
        as='nav'
        className={styles.pager}
        aria-label={ru ? 'Соседние компоненты' : 'Adjacent components'}
      >
        {previous ?
          <Link
            as={RouterLink}
            to={`/docs/components/${previous.slug}`}
          >
            <Text
              as='span'
              size='xs'
              tone='secondary'
            >
              {ru ? 'Предыдущий' : 'Previous'}
            </Text>
            <Flex
              align='center'
              gap={2}
            >
              <IconArrowLeft
                size={16}
                stroke={1.7}
                aria-hidden='true'
                focusable='false'
              />
              <Text size='sm'>{previous.name}</Text>
            </Flex>
          </Link>
        : <Box as='span' />}
        {next && (
          <Link
            as={RouterLink}
            to={`/docs/components/${next.slug}`}
          >
            <Text
              as='span'
              size='xs'
              tone='secondary'
            >
              {ru ? 'Следующий' : 'Next'}
            </Text>
            <Flex
              align='center'
              gap={2}
            >
              <Text size='sm'>{next.name}</Text>
              <IconArrowRight
                size={16}
                stroke={1.7}
                aria-hidden='true'
                focusable='false'
              />
            </Flex>
          </Link>
        )}
      </Grid>
    </Flex>
  );
}
