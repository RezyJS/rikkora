import { NavLink as RouterNavLink } from 'react-router';
import {
  Badge,
  Field,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Link,
} from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import { componentSlug } from '../../components/Showcase/componentNames';
import { categories, componentDocs } from './componentDocs';
import styles from './Documentation.module.css';
import { introPages } from './introPages';

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
  const groups = categories.map((category) => ({
    ...category,
    names: category.names.filter((name) => name.toLowerCase().includes(filter)),
  }));
  const count = groups.reduce((total, group) => total + group.names.length, 0);
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
                <Badge>( {category.names.length} )</Badge>
              </Heading>
              {category.names.map((name) => (
                <Link
                  as={RouterNavLink}
                  key={name}
                  to={`/docs/components/${componentSlug(name)}`}
                  className={styles.navLink}
                  onClick={onNavigate}
                >
                  {name}
                </Link>
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
