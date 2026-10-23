import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router';
import { Flex, Heading, Link, Text } from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import { CodeBlock } from './CodeBlock';
import type { IntroPageData } from './introPages';
import styles from './Documentation.module.css';

export function IntroPage({ page }: { page: IntroPageData }) {
  const { language } = usePreferences();
  const title = page.title[language];
  useEffect(() => {
    document.title = `${title} — Rikkora UI`;
  }, [title]);
  return (
    <Flex
      as='article'
      direction='column'
      className={styles.article}
    >
      <Flex
        as='header'
        direction='column'
        className={styles.articleHeader}
      >
        <Text
          as='p'
          size='sm'
          tone='secondary'
        >
          {language === 'ru' ? 'Начало работы' : 'Getting started'}
        </Text>
        <Heading
          level={1}
          size='4xl'
          tabIndex={-1}
          className={styles.pageTitle}
        >
          {title}
        </Heading>
        <Text
          as='p'
          size='lg'
          tone='secondary'
          className={styles.lead}
        >
          {page.lead[language]}
        </Text>
      </Flex>
      {page.sections.map((section) => (
        <Flex
          as='section'
          key={section.id}
          id={section.id}
          direction='column'
          className={styles.docSection}
          aria-labelledby={`${section.id}-heading`}
        >
          <Heading
            id={`${section.id}-heading`}
            level={2}
            size='2xl'
          >
            {section.title[language]}
          </Heading>
          <Text
            as='p'
            tone='secondary'
          >
            {section.body[language]}
          </Text>
          {section.code && <CodeBlock code={section.code} />}
          {section.links && (
            <Flex
              gap={4}
              wrap
            >
              {section.links.map((link) =>
                link.to.startsWith('https://') ?
                  <Link
                    key={link.to}
                    href={link.to}
                    className={styles.textLink}
                  >
                    {link.label[language]}
                  </Link>
                : <Link
                    key={link.to}
                    as={RouterLink}
                    to={link.to}
                    className={styles.textLink}
                  >
                    {link.label[language]}
                  </Link>,
              )}
            </Flex>
          )}
        </Flex>
      ))}
    </Flex>
  );
}
