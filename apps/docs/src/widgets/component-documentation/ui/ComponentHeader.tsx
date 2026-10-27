import { IconCode } from '@tabler/icons-react';
import { Flex, Breadcrumbs, Link, Text, Stack, Heading, Badge, ButtonLink } from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { usePreferences } from '@/shared/model/preferences';
import { type ComponentDoc } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentHeader({ doc }: { doc: ComponentDoc }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return (<Flex
    as='header'
    direction='column'
    className={styles.articleHeader}
  >
    <Breadcrumbs
      aria-label={ru ? 'Хлебные крошки' : 'Breadcrumb'}
      className={styles.breadcrumb}
    >
      <Link
        as={RouterLink}
        to='/docs'
      >
        {ru ? 'Документация' : 'Docs'}
      </Link>
      <Text
        size='xs'
        tone='secondary'
      >
        {doc.name}
      </Text>
    </Breadcrumbs>
    <Stack gap={2}>
      <Heading
        level={1}
        size='4xl'
        tabIndex={-1}
        className={styles.pageTitle}
      >
        {doc.name}
      </Heading>
      <Text
        as='p'
        size='lg'
        tone='secondary'
        className={styles.lead}
      >
        {doc.summary[language]}
      </Text>
    </Stack>
    <Flex
      gap={3}
      align='center'
      wrap
    >
      <Badge>@rikkora/ui</Badge>
      <ButtonLink
        variant='primary'
        size='xs'
        radius='full'
        href={`https://github.com/RezyJS/rikkora/blob/main/packages/ui/src/components/${doc.source}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <IconCode
          size={16}
          stroke={1.7}
          aria-hidden='true'
          focusable='false'
        />
        {ru ? 'Исходный код' : 'Source'}
      </ButtonLink>
    </Flex>
  </Flex>);
}
