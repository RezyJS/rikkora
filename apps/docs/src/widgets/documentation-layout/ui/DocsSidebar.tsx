import { NavLink as RouterNavLink } from 'react-router';
import {
  Badge,
  Box,
  Field,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Link,
} from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { componentSlug } from '@/entities/documentation';
import { buttonSubtypeNames, categories, componentDocs } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';
import { introPages } from '@/entities/documentation';

const buttonSubtypes = new Set<string>(buttonSubtypeNames);

export function DocsSidebar({
  query,
  setQuery,
  onNavigate,
}: {
  query: string;
  setQuery: (value: string) => void;
  onNavigate?: () => void;
}) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const filter = query.trim().toLocaleLowerCase();
  const visibleButtonSubtypes = buttonSubtypeNames.filter(name => name.toLowerCase().includes(filter));
  const groups = categories.map((category) => ({
    ...category,
    count: category.names.filter(name => name.toLowerCase().includes(filter)).length,
    names: category.names.filter(name => !buttonSubtypes.has(name) && (
      name.toLowerCase().includes(filter) || (name === 'Button' && visibleButtonSubtypes.length > 0)
    )),
  }));
  const count = groups.reduce((total, group) => total + group.count, 0);
  return (
    <Stack
      gap={6}
      className={styles.sidebarContent}
    >
      <Field
        label={
          <Text className={styles.visuallyHidden}>
            {ru ? 'Поиск компонентов' : 'Search components'}
          </Text>
        }
        className={styles.search}
      >
        <Input
          type='search'
          placeholder={ru ? 'Найти компонент…' : 'Find a component…'}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Field>
      <Flex
        as='nav'
        direction='column'
        aria-label={ru ? 'Навигация документации' : 'Documentation navigation'}
        className={styles.navigation}
      >
        {!filter && (
          <Flex
            direction='column'
            className={styles.navGroup}
          >
            <Text
              as='div'
              size='xs'
              tone='secondary'
              className={styles.category}
            >
              {ru ? 'Начало работы' : 'Getting started'}
            </Text>
            <Link
              as={RouterNavLink}
              end
              to='/docs'
              className={styles.navLink}
              onClick={onNavigate}
            >
              {ru ? 'Обзор' : 'Overview'}
            </Link>
            {introPages.map((page) => (
              <Link
                as={RouterNavLink}
                key={page.id}
                to={`/docs/${page.id}`}
                className={styles.navLink}
                onClick={onNavigate}
              >
                {page.title[language]}
              </Link>
            ))}
          </Flex>
        )}
        {groups
          .filter((category) => category.names.length > 0)
          .map((category) => (
            <Flex
              direction='column'
              className={styles.navGroup}
              key={category.id}
            >
              <Heading
                level={2}
                size='xs'
                className={styles.category}
              >
                {category.title[language]}{' '}
                <Badge>( {category.count} )</Badge>
              </Heading>
              {category.names.map((name) => (
                <Box key={name}>
                  <Link
                    as={RouterNavLink}
                    end
                    to={`/docs/components/${componentSlug(name)}`}
                    className={styles.navLink}
                    onClick={onNavigate}
                  >
                    {name}
                  </Link>
                  {name === 'Button' && visibleButtonSubtypes.length > 0 && (
                    <Box as='ul' className={styles.navSubtree} aria-label={ru ? 'Подтипы Button' : 'Button subtypes'}>
                      {visibleButtonSubtypes.map(subtype => (
                        <Box as='li' key={subtype}>
                          <Link
                            as={RouterNavLink}
                            end
                            to={`/docs/components/${componentSlug(subtype)}`}
                            className={styles.navLink}
                            onClick={onNavigate}
                          >
                            {subtype}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Flex>
          ))}
        {count === 0 && (
          <Text
            as='p'
            size='sm'
            tone='secondary'
          >
            {ru ? 'Компоненты не найдены.' : 'No components found.'}
          </Text>
        )}
      </Flex>
      <Text
        as='span'
        size='xs'
        tone='secondary'
        role='status'
        aria-live='polite'
      >
        {filter ?
          ru ?
            `Найдено: ${count}`
            : `Found: ${count}`
          : ru ?
            `${componentDocs.length} компонентов`
            : `${componentDocs.length} components`}
      </Text>
    </Stack>
  );
}
