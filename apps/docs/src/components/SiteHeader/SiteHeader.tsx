import { IconBrandGithubFilled } from '@tabler/icons-react';
import { Link as RouterLink } from 'react-router';
import { Flex, Box, Link } from '@rikkora/ui';
import { PreferencesControls } from '../PreferencesControls/PreferencesControls';
import styles from './SiteHeader.module.css';
import { usePreferences } from '../../preferences/PreferencesContext';

export function SiteHeader() {
  const { t } = usePreferences();
  return (
    <Box
      as='header'
      className={styles.header}
    >
      <Link
        as={RouterLink}
        to='/'
        className={styles.logo}
        aria-label={t.home}
      >
        rikkora
        <Box
          as='span'
          className={styles.logoAccent}
        >
          .
        </Box>
      </Link>

      <Box
        as='nav'
        className={styles.navigation}
        aria-label={t.navigation}
      >
        <Link
          as={RouterLink}
          to='/docs/components'
          className={styles.navLink}
        >
          {t.components}
        </Link>

        <Link
          as={RouterLink}
          to='/docs'
          className={styles.navLink}
        >
          {t.documentation}
        </Link>

        <Link
          href='https://github.com/RezyJS/rikkora'
          className={styles.githubLink}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t.github}
        >
          <IconBrandGithubFilled size={21} aria-hidden='true' focusable='false' />
        </Link>
        <Flex
          align='center'
          className={styles.preferences}
        >
          <PreferencesControls />
        </Flex>
      </Box>
    </Box>
  );
}
