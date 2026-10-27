import { Flex, Heading, Stack, Text, ScrollArea, Table, Box } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { type ComponentDoc } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentAccessibility({ doc }: { doc: ComponentDoc }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return (<Flex
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
  </Flex>);
}
