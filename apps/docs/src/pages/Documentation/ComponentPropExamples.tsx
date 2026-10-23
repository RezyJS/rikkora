import { Box, Flex, Heading, Stack, Text } from '@rikkora/ui';
import type { Language } from '../../localization/messages';
import type { ComponentDoc } from './componentDocs';
import { individualProps, propAnchor } from './prop-examples/propertyNavigation';
import { previewValues } from './prop-examples/previewValues';
import { PropPreview } from './PropPreview';
import styles from './Documentation.module.css';

export function ComponentPropExamples({ doc, language }: { doc: ComponentDoc; language: Language }) {
  const ru = language === 'ru';
  const parts = doc.api.map(part => ({
    ...part,
    props: individualProps(part.props).filter(property => previewValues(doc, part.name, property).length > 0),
  })).filter(part => part.props.length > 0);
  if (!parts.length) return null;
  return (
    <Flex as='section' direction='column' id='examples' className={styles.docSection} aria-labelledby='examples-heading'>
      <Heading id='examples-heading' level={2} size='2xl'>{ru ? 'Свойства' : 'Props'}</Heading>
      {parts.map(part => (
        <Flex direction='column' key={part.name} className={styles.apiPart}>
          {doc.api.length > 1 && <Heading level={3} size='lg' className={styles.partName}>{part.name}</Heading>}
          {part.props.map(property => (
            <Stack key={property.name} id={`example-${propAnchor(part.name, property.name)}`} gap={4} className={styles.propSection} data-prop={property.name}>
              <Heading level={doc.api.length > 1 ? 4 : 3} size='lg'><Box as='code'>{property.name}</Box></Heading>
              <Text as='p' tone='secondary'>{property.description[language]}</Text>
              <Box as='dl' className={styles.propMetadata}>
                <Box>
                  <Box as='dt'>{property.type === 'boolean' || property.type.split(' | ').every(value => /^'[^']*'$|^-?\d+(?:\.\d+)?$/.test(value)) ? (ru ? 'Значения' : 'Values') : (ru ? 'Примеры значений' : 'Example values')}</Box>
                  <Box as='dd'>
                    {previewValues(doc, part.name, property).map(value => <Box as='code' key={String(value)} className={styles.valueToken}>{String(value)}</Box>)}
                  </Box>
                </Box>
                <Box>
                  <Box as='dt'>{ru ? 'По умолчанию' : 'Default'}</Box>
                  <Box as='dd'><Box as='code' className={styles.defaultToken}>{property.defaultValue}</Box></Box>
                </Box>
              </Box>
              <PropPreview doc={doc} part={part.name} property={property} ru={ru} />
            </Stack>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
