import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router';
import { Button, Dialog, Badge, Flex, Grid, Heading, Separator, Stack, Table, Text, ScrollArea, Link, Box } from '@rikkora/ui';
import { ComponentPlayground } from '../../components/Showcase/ComponentPlayground';
import { usePreferences } from '../../preferences/PreferencesContext';
import { CodeBlock } from './CodeBlock';
import { componentDocs, type ComponentDoc } from './componentDocs';
import styles from './Documentation.module.css';
import { individualProps, propAnchor, propExample } from './propExamples';
import { PropPreview } from './PropPreview';

export function ComponentPage({ doc }: { doc: ComponentDoc }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  useEffect(() => { document.title = `${doc.name} — Rikkora UI`; }, [doc.name]);
  const index = componentDocs.findIndex((entry) => entry.name === doc.name);
  const previous = componentDocs[index - 1];
  const next = componentDocs[index + 1];
  return <Flex as='article' direction='column' className={styles.article}>
    <Flex as='header' direction='column' className={styles.articleHeader}>
      <Flex as='nav' aria-label={ru ? 'Хлебные крошки' : 'Breadcrumb'} className={styles.breadcrumb}>
        <Link as={RouterLink} to='/docs'>{ru ? 'Документация' : 'Docs'}</Link><Box as='span' aria-hidden='true'>/</Box><Text size='xs' tone='secondary'>{doc.name}</Text>
      </Flex>
      <Heading level={1} size='4xl' tabIndex={-1} className={styles.pageTitle}>{doc.name}</Heading>
      <Text as='p' size='lg' tone='secondary' className={styles.lead}>{doc.summary[language]}</Text>
      <Flex gap={3} align='center' wrap>
        <Badge>@rikkora/ui</Badge>
        <Link className={styles.textLink} href={`https://github.com/RezyJS/rikkora/blob/main/packages/ui/src/components/${doc.source}`} target='_blank' rel='noreferrer'>
          {ru ? 'Исходный код' : 'Source'} <Box as='span' aria-hidden='true'>↗</Box>
        </Link>
        <Link className={styles.textLink} href='#api'>API <Box as='span' aria-hidden='true'>↓</Box></Link>
      </Flex>
      <Dialog.Root>
        <Dialog.Trigger asChild><Button>{ru ? 'Открыть playground' : 'Open playground'}</Button></Dialog.Trigger>
        <Dialog.Content className={styles.playgroundDialog}>
          <Flex align='center' justify='between' gap={4}>
            <Dialog.Title>{doc.name} playground</Dialog.Title>
            <Dialog.Close asChild><Button variant='ghost' size='sm'>{ru ? 'Закрыть' : 'Close'}</Button></Dialog.Close>
          </Flex>
          <Dialog.Description>{ru ? 'Меняйте свойства и текст, чтобы проверить поведение компонента.' : 'Change properties and text to explore the component.'}</Dialog.Description>
          <ComponentPlayground key={doc.name} name={doc.name} showSummary={false} />
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
    <Separator decorative />
    <Flex as='section' direction='column' id='usage' className={styles.docSection} aria-labelledby='usage-heading'>
      <Heading id='usage-heading' level={2} size='2xl'>{ru ? 'Использование' : 'Usage'}</Heading>
      <Text as='p' tone='secondary'>{ru ? 'Импортируйте компонент из публичного API. Стили подключаются один раз в приложении.' : 'Import the component from the public API. Load the stylesheet once in your application.'} <Link as={RouterLink} to='/docs#setup' className={styles.textLink}>{ru ? 'Подключение' : 'Setup'}</Link></Text>
      <CodeBlock code={doc.usage} />
    </Flex>
    <Flex as='section' direction='column' id='api' className={styles.docSection} aria-labelledby='api-heading'>
      <Heading id='api-heading' level={2} size='2xl'>API</Heading>
      <Text as='p' size='sm' tone='secondary'>{ru ? 'DOM-компоненты принимают className, style, ref и подходящие HTML-атрибуты. У Root и Provider без DOM-узла нативных свойств нет.' : 'DOM components accept className, style, ref and the relevant HTML attributes. Roots and providers without a DOM node do not accept native attributes.'}</Text>
      {doc.api.map((part) => <Flex direction='column' key={part.name} className={styles.apiPart}>
        <Heading level={3} size='lg' className={styles.partName}>{part.name === doc.name ? doc.name : part.name}</Heading>
        {individualProps(part.props).map((item) => <Stack key={item.name} id={propAnchor(part.name, item.name)} gap={4} className={styles.propSection} data-prop={item.name}>
          <Flex align='center' gap={3} wrap>
            <Heading level={4} size='lg'><Box as='code'>{item.name}</Box></Heading>
            {item.required && <Badge variant='primary'>{ru ? 'Обязательно' : 'Required'}</Badge>}
          </Flex>
          <Text as='p' tone='secondary'>{item.description[language]}</Text>
          <Stack gap={2}>
            <Text size='sm'>{ru ? 'Тип: ' : 'Type: '}<Box as='code' className={styles.type}>{item.type}</Box></Text>
            <Text size='sm' tone='secondary'>{ru ? 'По умолчанию: ' : 'Default: '}<Box as='code'>{item.defaultValue}</Box></Text>
          </Stack>
          <PropPreview doc={doc} part={part.name} property={item} ru={ru} />
          <CodeBlock label={part.name === 'CSS variables' ? 'css' : 'tsx'} code={propExample(doc, part.name, item)} />
        </Stack>)}
      </Flex>)}
    </Flex>
    <Flex as='section' direction='column' id='accessibility' className={styles.docSection} aria-labelledby='accessibility-heading'>
      <Heading id='accessibility-heading' level={2} size='2xl'>{ru ? 'Доступность' : 'Accessibility'}</Heading>
      <Stack gap={3}>{doc.accessibility.map((note) => <Text as='p' key={note.en} tone='secondary'>{note[language]}</Text>)}</Stack>
      {doc.keyboard.length > 0 ? <ScrollArea orientation='horizontal' className={styles.tableScroll} aria-label={ru ? 'Управление с клавиатуры' : 'Keyboard interaction'}>
        <Table.Root><Table.Caption className={styles.visuallyHidden}>{ru ? 'Управление с клавиатуры' : 'Keyboard interaction'}</Table.Caption>
          <Table.Head><Table.Row><Table.Header>{ru ? 'Клавиша' : 'Key'}</Table.Header><Table.Header>{ru ? 'Действие' : 'Action'}</Table.Header></Table.Row></Table.Head>
          <Table.Body>{doc.keyboard.map((entry) => <Table.Row key={entry.keys}><Table.Header scope='row'><Box as='kbd' className={styles.key}>{entry.keys}</Box></Table.Header><Table.Cell>{entry.description[language]}</Table.Cell></Table.Row>)}</Table.Body>
        </Table.Root>
      </ScrollArea> : <Text as='p' size='sm' tone='secondary'>{ru ? 'Компонент не добавляет отдельного клавиатурного поведения.' : 'This component does not introduce separate keyboard behavior.'}</Text>}
    </Flex>
    <Separator decorative />
    <Grid as='nav' className={styles.pager} aria-label={ru ? 'Соседние компоненты' : 'Adjacent components'}>
      {previous ? <Link as={RouterLink} to={`/docs/components/${previous.slug}`}><Text as='span' size='xs' tone='secondary'>{ru ? 'Предыдущий' : 'Previous'}</Text><Text size='sm'>← {previous.name}</Text></Link> : <Box as='span' />}
      {next && <Link as={RouterLink} to={`/docs/components/${next.slug}`}><Text as='span' size='xs' tone='secondary'>{ru ? 'Следующий' : 'Next'}</Text><Text size='sm'>{next.name} →</Text></Link>}
    </Grid>
  </Flex>;
}
