import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  Accordion,
  Box,
  Flex,
  Stack,
  Text,
  ScrollArea,
  Link,
} from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { documentationStyles as styles } from '@/shared/ui/documentation';
import { individualProps, propAnchor, previewValues } from '@/entities/documentation';
import type { ComponentDoc } from '@/entities/documentation';
import type { DocumentationSection } from '@/entities/documentation';

export function DocumentationToc({
  doc,
  sections,
  hash,
}: {
  doc?: ComponentDoc;
  sections: DocumentationSection[];
  hash: string;
}) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return (
    <Box
      as='aside'
      className={styles.toc}
    >
      <ScrollArea
        className={styles.tocScroll}
        viewportProps={{ tabIndex: -1 }}
      >
        <Flex
          as='nav'
          direction='column'
          aria-label={ru ? 'На этой странице' : 'On this page'}
        >
          <Text
            as='p'
            size='md'
            className={styles.tocTitle}
          >
            {ru ? 'На этой странице' : 'On this page'}
          </Text>
          {sections.map((section) => (
            <Fragment key={section.id}>
              <Link
                as={RouterLink}
                to={`#${section.id}`}
              >
                {section.label[language]}
              </Link>
              {section.id === 'examples' && doc && (
                <Accordion.Root
                  key={doc.slug}
                  type='single'
                  collapsible
                  className={styles.tocProps}
                  defaultValue={hash.startsWith('#example-prop-') ? 'props' : undefined}
                >
                  <Accordion.Item value='props'>
                    <Accordion.Header>
                      <Accordion.Trigger className={styles.tocPropsTrigger}>
                        {ru ? 'Свойства' : 'Props'}
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className={styles.tocPropsContent}>
                      <Stack gap={4}>
                        {doc.api.filter(part => individualProps(part.props).some(property => previewValues(doc, part.name, property).length > 0)).map((part) => (
                          <Stack
                            key={part.name}
                            gap={2}
                          >
                            {doc.api.length > 1 && (
                              <Text
                                size='sm'
                                tone='secondary'
                              >
                                {part.name}
                              </Text>
                            )}
                            {individualProps(part.props).filter(property => previewValues(doc, part.name, property).length > 0).map((property) => (
                              <Link
                                as={RouterLink}
                                key={property.name}
                                to={`#example-${propAnchor(part.name, property.name)}`}
                              >
                                {property.name}
                              </Link>
                            ))}
                          </Stack>
                        ))}
                      </Stack>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              )}
            </Fragment>
          ))}
        </Flex>
      </ScrollArea>
    </Box>
  );
}
