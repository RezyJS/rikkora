import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Grid, Link, Text, Flex, Box } from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { usePreferences } from '@/shared/model/preferences';
import { type ComponentDoc, componentDocs } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentPager({ doc }: { doc: ComponentDoc }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const index = componentDocs.findIndex(entry => entry.name === doc.name);
  const previous = componentDocs[index - 1];
  const next = componentDocs[index + 1];
  return (<Grid
    as='nav'
    className={styles.pager}
    aria-label={ru ? 'Соседние компоненты' : 'Adjacent components'}
  >
    {previous ?
      <Link
        as={RouterLink}
        to={`/docs/components/${previous.slug}`}
      >
        <Text
          as='span'
          size='xs'
          tone='secondary'
        >
          {ru ? 'Предыдущий' : 'Previous'}
        </Text>
        <Flex
          align='center'
          gap={2}
        >
          <IconArrowLeft
            size={16}
            stroke={1.7}
            aria-hidden='true'
            focusable='false'
          />
          <Text size='sm'>{previous.name}</Text>
        </Flex>
      </Link>
      : <Box as='span' />}
    {next && (
      <Link
        as={RouterLink}
        to={`/docs/components/${next.slug}`}
      >
        <Text
          as='span'
          size='xs'
          tone='secondary'
        >
          {ru ? 'Следующий' : 'Next'}
        </Text>
        <Flex
          align='center'
          gap={2}
        >
          <Text size='sm'>{next.name}</Text>
          <IconArrowRight
            size={16}
            stroke={1.7}
            aria-hidden='true'
            focusable='false'
          />
        </Flex>
      </Link>
    )}
  </Grid>);
}
