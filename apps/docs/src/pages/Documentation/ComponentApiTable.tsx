import { Box, Flex, Heading, ScrollArea, Table } from '@rikkora/ui';
import type { Language } from '../../localization/messages';
import type { ComponentDoc } from './componentDocs';
import { individualProps, propAnchor } from './prop-examples/propertyNavigation';
import styles from './Documentation.module.css';

export function ComponentApiTable({ doc, language }: { doc: ComponentDoc; language: Language }) {
  const ru = language === 'ru';
  const compound = doc.api.length > 1;
  return (
    <Flex as='section' direction='column' id='api' className={styles.docSection} aria-labelledby='api-heading'>
      <Heading id='api-heading' level={2} size='2xl'>API</Heading>
      <ScrollArea orientation='horizontal' className={styles.tableScroll} aria-label={`${doc.name} API`}>
        <Table.Root className={styles.apiTable}>
          <Table.Caption className={styles.visuallyHidden}>{doc.name} API</Table.Caption>
          <Table.Head>
            <Table.Row>
              {compound && <Table.Header>{ru ? 'Компонент' : 'Component'}</Table.Header>}
              <Table.Header>{ru ? 'Свойство' : 'Prop'}</Table.Header>
              <Table.Header>{ru ? 'Тип' : 'Type'}</Table.Header>
              <Table.Header>{ru ? 'По умолчанию' : 'Default'}</Table.Header>
              <Table.Header>{ru ? 'Описание' : 'Description'}</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {doc.api.flatMap(part => individualProps(part.props).map(property => (
              <Table.Row key={`${part.name}-${property.name}`} id={propAnchor(part.name, property.name)}>
                {compound && <Table.Cell><Box as='code'>{part.name}</Box></Table.Cell>}
                <Table.Header scope='row'>
                  <Box as='code'>{property.name}</Box>
                  {property.required && <Box as='span' className={styles.required} aria-label={ru ? 'Обязательно' : 'Required'}> *</Box>}
                </Table.Header>
                <Table.Cell><Box as='code' className={styles.type}>{property.type}</Box></Table.Cell>
                <Table.Cell><Box as='code'>{property.defaultValue}</Box></Table.Cell>
                <Table.Cell>{property.description[language]}</Table.Cell>
              </Table.Row>
            )))}
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    </Flex>
  );
}
