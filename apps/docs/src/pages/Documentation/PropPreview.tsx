import { Box, Button, Checkbox, Field, Flex, Grid, IconButton, Input, Text, Textarea } from '@rikkora/ui';
import { ComponentExample } from '../../components/Showcase/ComponentExample';
import { ConfiguredExample } from '../../components/Showcase/ConfiguredExample';
import { additionalExamples } from '../../components/Showcase/catalog';
import type { ApiProp, ComponentDoc } from './componentDocs';
import { exampleValue } from './propExamples';
import styles from './Documentation.module.css';

/** Fixed visual examples, with no playground controls or automatically opened overlays. */
export function PropPreview({ doc, part, property, ru }: { doc: ComponentDoc; part: string; property: ApiProp; ru: boolean }) {
  if (part !== doc.name || !['variant', 'size', 'tone', 'level', 'padding', 'direction', 'align', 'justify', 'gap', 'columns', 'rows',
    'orientation', 'disabled', 'loading', 'required', 'invalid', 'readOnly', 'checked', 'shape', 'animated', 'decorative'].includes(property.name)) return null;
  let values: (string | number | boolean)[] = Array.from(property.type.matchAll(/'([^']+)'/g), (match) => match[1]);
  if (property.type === 'boolean') values = [false, true];
  if (!values.length) {
    try { values = [JSON.parse(exampleValue(doc, property)) as number]; } catch { return null; }
  }
  function example(value: string | number | boolean) {
    const additional = additionalExamples.find((name) => name === doc.name);
    if (additional) return <ComponentExample name={additional} configuration={{ [part]: { [property.name]: value } }} />;
    switch (doc.name) {
      case 'Button': return <Button>{ru ? 'Сохранить' : 'Save'}</Button>;
      case 'IconButton': return <IconButton aria-label={ru ? 'В избранное' : 'Favorite'}>★</IconButton>;
      case 'Input': return <Field label={ru ? 'Имя' : 'Name'}><Input placeholder={ru ? 'Введите имя' : 'Enter your name'} /></Field>;
      case 'Textarea': return <Field label={ru ? 'Сообщение' : 'Message'}><Textarea rows={2} placeholder={ru ? 'Введите сообщение' : 'Write a message'} /></Field>;
      case 'Checkbox': return <Field label={ru ? 'Получать обновления' : 'Receive updates'}><Checkbox onChange={() => {}} /></Field>;
      case 'Flex': return <Flex gap={3}><Box padding={3}>A</Box><Box padding={3}>B</Box><Box padding={3}>C</Box></Flex>;
      case 'Grid': return <Grid columns={2} gap={3}><Box padding={3}>A</Box><Box padding={3}>B</Box><Box padding={3}>C</Box></Grid>;
    }
  }
  return <Flex wrap gap={4} className={styles.propPreviews} role='group' aria-label={`${property.name} ${ru ? '— примеры' : 'examples'}`}>
    {values.map((value) => <Flex direction='column' gap={3} key={String(value)} className={styles.propPreview}>
      <Text size='xs' tone='secondary'>{property.name}={String(value)}</Text>
      <ConfiguredExample name={doc.name} configuration={{ [part]: { [property.name]: value } }} onChange={() => {}}>
        {example(value)}
      </ConfiguredExample>
    </Flex>)}
  </Flex>;
}
