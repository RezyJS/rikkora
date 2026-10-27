import { Box, Heading, ScrollArea, Table } from '@rikkora/ui';
import { buttonDoc, localized, propAnchor } from '@/entities/documentation';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationSection, documentationStyles } from '@/shared/ui/documentation';
import { buttonPropGroups } from '../model/buttonSections';
import styles from './ButtonDocs.module.css';

export function ButtonPropsReference() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const props = buttonDoc.api[0].props;
  const known = new Set(buttonPropGroups.flatMap(group => group.names));
  const other = props.filter(property => !known.has(property.name));
  const groups = [...buttonPropGroups, ...(other.length ? [{ title: localized('Other props', 'Другие пропсы'), names: other.map(property => property.name) }] : [])];
  return <DocumentationSection id='api' title={ru ? 'Справочник пропсов' : 'Props reference'}>
    {groups.map(group => <Box key={group.title.en} className={styles.apiGroup}>
      <Heading level={3} size='lg'>{group.title[language]}</Heading>
      <ScrollArea orientation='horizontal' className={styles.apiScroll} aria-label={`Button API: ${group.title[language]}`}>
        <Table.Root className={styles.apiTable}>
          <Table.Caption className={documentationStyles.visuallyHidden}>Button: {group.title[language]}</Table.Caption>
          <Table.Head><Table.Row>
            <Table.Header>{ru ? 'Имя пропса' : 'Prop Name'}</Table.Header>
            <Table.Header>{ru ? 'Тип пропса' : 'Prop Type'}</Table.Header>
            <Table.Header>{ru ? 'По умолчанию' : 'Default'}</Table.Header>
            <Table.Header>{ru ? 'Описание' : 'Description'}</Table.Header>
          </Table.Row></Table.Head>
          <Table.Body>{group.names.map(name => props.find(property => property.name === name)).filter(property => property !== undefined).map(property => <Table.Row key={property.name} id={propAnchor('Button', property.name)}>
            <Table.Header scope='row'><Box as='code'>{property.name}</Box></Table.Header>
            <Table.Cell><Box as='code' className={styles.apiType}>{property.type}</Box></Table.Cell>
            <Table.Cell><Box as='code'>{property.defaultValue}</Box></Table.Cell>
            <Table.Cell>{property.description[language]}</Table.Cell>
          </Table.Row>)}</Table.Body>
        </Table.Root>
      </ScrollArea>
    </Box>)}
  </DocumentationSection>;
}
