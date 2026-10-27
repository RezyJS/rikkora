import { IconArrowUpRight } from '@tabler/icons-react';
import { useState } from 'react';
import { Box, Field, Input, Link, Stack, Text } from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { usePreferences } from '@/shared/model/preferences';
import { componentNames, componentSlug } from '@/entities/documentation';
import styles from '../ShowcaseScene.module.css';

export function ComponentSearchExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [query, setQuery] = useState('');
  const results = componentNames.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <Box className={styles.sample}>
      <Stack gap={3}>
        <Field label={ru ? 'Найти компонент' : 'Find a component'}>
          <Input
            type='search'
            placeholder={ru ? 'Поиск…' : 'Search…'}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Field>
        {query.trim() && (
          <Stack
            gap={2}
            role='status'
          >
            {results.slice(0, 5).map((item) => (
              <Link
                as={RouterLink}
                key={item}
                to={`/docs/components/${componentSlug(item)}`}
              >
                {item} <IconArrowUpRight size={16} aria-hidden='true' focusable='false' />
              </Link>
            ))}
            {!results.length && (
              <Text
                size='sm'
                tone='secondary'
              >
                {ru ? 'Ничего не найдено' : 'No matches'}
              </Text>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
