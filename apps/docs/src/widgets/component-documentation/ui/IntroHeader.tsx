import { useEffect } from 'react';
import { Flex, Heading, Text } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import type { IntroPageData } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function IntroHeader({ page }: { page: IntroPageData }) {
  const { language } = usePreferences();
  const title = page.title[language];
  useEffect(() => { document.title = title + ' — Rikkora UI'; }, [title]);
  return (<Flex
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
  </Flex>);
}
