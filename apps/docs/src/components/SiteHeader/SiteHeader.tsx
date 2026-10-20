import { Link } from 'react-router';
import { Flex } from '@rikkora/ui';
import { PreferencesControls } from '../PreferencesControls/PreferencesControls';
import styles from './SiteHeader.module.css';
import { usePreferences } from '../../preferences/PreferencesContext';

export function SiteHeader() {
  const { t } = usePreferences();
  return (
    <header className={styles.header}>
      <Link
        to='/'
        className={styles.logo}
        aria-label={t.home}
      >
        rikkora<span className={styles.logoAccent}>.</span>
      </Link>

      <nav
        className={styles.navigation}
        aria-label={t.navigation}
      >
        <Link
          to='/docs/components'
          className={styles.navLink}
        >
          {t.components}
        </Link>

        <Link
          to='/docs'
          className={styles.navLink}
        >
          {t.documentation}
        </Link>

        <a
          href='https://github.com/RezyJS/rikkora'
          className={styles.githubLink}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t.github}
        >
          <svg
            viewBox='0 0 24 24'
            width='21'
            height='21'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.49 0-1.21.43-2.2 1.14-2.98-.11-.28-.49-1.41.11-2.93 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.52.22 2.65.11 2.93.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.08 5.48.4.35.76 1.03.76 2.07v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z' />
          </svg>
        </a>
        <Flex align='center' className={styles.preferences}>
          <PreferencesControls />
        </Flex>
      </nav>
    </header>
  );
}
