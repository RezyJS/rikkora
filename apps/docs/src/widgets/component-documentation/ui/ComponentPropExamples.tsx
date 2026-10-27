import { ComponentExampleSection } from './ComponentExampleSection';
import { ComponentPropertyMetadata } from './ComponentPropertyMetadata';
import type { ComponentType } from 'react';
import type { DocPreviewProps } from './PreviewFrame';
import { Flex, Heading } from '@rikkora/ui';
import type { Language } from '@/shared/config/i18n';
import type { ComponentDoc } from '@/entities/documentation';
import { individualProps, propAnchor } from '@/entities/documentation';
import { previewValues } from '@/entities/documentation';
import { PropPreview } from './PropPreview';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentPropExamples({ doc, language, Preview }: { doc: ComponentDoc; language: Language; Preview: ComponentType<DocPreviewProps> }) {
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
            <ComponentExampleSection key={property.name} id={`example-${propAnchor(part.name, property.name)}`} dataProp={property.name}
 title={property.name} description={property.description[language]} level={doc.api.length > 1 ? 4 : 3}>
 <ComponentPropertyMetadata property={property} values={previewValues(doc, part.name, property)} ru={ru} />
 <PropPreview Preview={Preview} doc={doc} part={part.name} property={property} ru={ru} />
 </ComponentExampleSection>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
