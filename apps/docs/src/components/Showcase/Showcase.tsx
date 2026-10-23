import { IconArrowUpRight } from '@tabler/icons-react';
import { Link as RouterLink } from 'react-router';
import { Box, Flex, Heading, Link, ToastProvider } from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import { ShowcaseScene } from './ShowcaseScene';
import styles from './ShowcaseScene.module.css';

export function Showcase() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return (
    <Box
      as='section'
      id='components'
      className={styles.section}
      aria-labelledby='components-title'
    >
      <Flex
        direction='column'
        align='center'
        gap={2}
        className={styles.intro}
      >
        <Heading
          id='components-title'
          className={styles.headline}
        >
          {ru ? 'Собери ' : 'Make it '}
          <Box
            as='span'
            className={styles.headlineAccent}
          >
            {ru ? 'по-своему.' : 'yours.'}
          </Box>
        </Heading>
      </Flex>
      <Box className={styles.container}>
        <ToastProvider
          closeLabel={ru ? 'Закрыть уведомление' : 'Dismiss notification'}
          viewportLabel={ru ? 'Уведомления' : 'Notifications'}
        >
          <ShowcaseScene />
        </ToastProvider>
        <Flex
          justify='center'
          className={styles.footer}
        >
          <Link
            as={RouterLink}
            to='/docs/components/button'
          >
            {ru ? 'Все компоненты' : 'All components'} <IconArrowUpRight size={16} aria-hidden='true' focusable='false' />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
