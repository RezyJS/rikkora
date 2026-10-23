import { Box, Flex, Text } from '@rikkora/ui';
import type { ExampleConfiguration } from '../../components/Showcase/exampleConfiguration';
import type { ApiProp, ComponentDoc } from './componentDocs';
import { previewCode, previewValues } from './propExamples';
import { ComponentPreview } from './ComponentPreview';
import { ExampleBlock } from './ExampleBlock';
import styles from './Documentation.module.css';

export function PropPreview({
  doc,
  part,
  property,
  ru,
}: {
  doc: ComponentDoc;
  part: string;
  property: ApiProp;
  ru: boolean;
}) {
  const values = previewValues(doc, part, property);
  if (!values.length) return null;
  return (
    <ExampleBlock
      code={previewCode(doc, part, property, values)}
      language={part === 'CSS variables' ? 'css' : 'tsx'}
    >
      <Flex
        wrap
        gap={6}
        align='center'
        justify='center'
        className={styles.propPreviews}
        role='group'
        aria-label={property.name + (ru ? ' — примеры' : ' examples')}
      >
        {values.map((value) => {
          const configuration: ExampleConfiguration = {};
          if (value !== undefined)
            for (const name of part.split(' / '))
              configuration[name] = { [property.name]: value };
          if (part === 'CSS variables')
            configuration[doc.name] = {
              style: {
                width: 240,
                height: 140,
                [property.name]:
                  property.type === 'CSS length' ? '14px' : '#7c5cff',
              },
            };
          return (
            <Box
              key={String(value)}
              className={styles.propPreview}
            >
              <ComponentPreview
                doc={doc}
                configuration={configuration}
                ru={ru}
              />
              {value !== undefined && (
                <Text
                  as='span'
                  size='xs'
                  tone='secondary'
                  className={styles.exampleValue}
                >
                  {String(value)}
                </Text>
              )}
            </Box>
          );
        })}
      </Flex>
    </ExampleBlock>
  );
}
