import { useId, type ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';
import { Box, Heading, Link, Table } from '@rikkora/ui';
import { buttonDoc, previewValues, propAnchor } from '@/entities/documentation';
import { usePreferences } from '@/shared/model/preferences';
import { ExampleBlock, documentationStyles } from '@/shared/ui/documentation';
import styles from './ButtonDocs.module.css';

export function ButtonExampleCard({ title, props = [], code, children, showTitle = true }: {
  title: string;
  props?: readonly string[];
  code: string;
  children: ReactNode;
  showTitle?: boolean;
}) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const id = useId();
  return <Box as='section' className={styles.exampleGroup} aria-labelledby={showTitle ? id : undefined} aria-label={showTitle ? undefined : title}>
    {props.map(name => <Box as='span' key={name} id={`example-${propAnchor('Button', name)}`} className={styles.anchor} />)}
    {showTitle && <Heading id={id} level={3} size='lg' className={styles.cardTitle}>{title}</Heading>}
    {props.length > 0 && <Table.Root className={styles.propertyTable}>
      <Table.Caption className={documentationStyles.visuallyHidden}>{title}: {ru ? 'свойства' : 'props'}</Table.Caption>
      <Table.Head><Table.Row>
        <Table.Header>{ru ? 'Проп' : 'Prop'}</Table.Header>
        <Table.Header>{ru ? 'Значения / тип' : 'Values / type'}</Table.Header>
        <Table.Header>{ru ? 'По умолчанию' : 'Default'}</Table.Header>
      </Table.Row></Table.Head>
      <Table.Body>{props.map(name => {
      const property = buttonDoc.api[0].props.find(entry => entry.name === name)!;
      const values = previewValues(buttonDoc, 'Button', property);
      return <Table.Row key={name}>
        <Table.Header scope='row'><Link as={RouterLink} to={`#${propAnchor('Button', name)}`} className={styles.propertyName}>{name}</Link></Table.Header>
        <Table.Cell><Box className={styles.propertyValues}>{(values.length ? values : [property.type]).map(value => <Box as='code' key={String(value)} className={styles.propertyValue}>{String(value)}</Box>)}</Box></Table.Cell>
        <Table.Cell><Box as='code' className={styles.propertyDefault}>{property.defaultValue}</Box></Table.Cell>
      </Table.Row>;
    })}</Table.Body></Table.Root>}
    <ExampleBlock code={code}>{children}</ExampleBlock>
  </Box>;
}

export function ButtonDemoGroup({ children }: { children: ReactNode }) {
  return <Box className={styles.demoGroup}>{children}</Box>;
}

export function ButtonSample({ children }: { children: ReactNode }) {
  return <Box className={styles.sample}>{children}</Box>;
}
