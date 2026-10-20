import { Flex, IconButton } from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import styles from './PreferencesControls.module.css';

export function PreferencesControls() {
  const { t, theme, language, setTheme, setLanguage } = usePreferences();
  const themeLabel = theme === 'light' ? t.switchToDark : t.switchToLight;
  const languageLabel = language === 'en' ? t.switchToRussian : t.switchToEnglish;

  return (
    <Flex align='center' gap={2}>
      <IconButton variant='ghost' size='sm' className={styles.control}
        aria-label={themeLabel} title={themeLabel}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7'
          strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
          {theme === 'light' ? (
            <path d='M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z' />
          ) : (
            <>
              <circle cx='12' cy='12' r='4' />
              <path d='M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
            </>
          )}
        </svg>
      </IconButton>
      <IconButton variant='ghost' size='sm' className={styles.control}
        aria-label={languageLabel} title={languageLabel}
        onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
        <span aria-hidden='true'>{language === 'en' ? 'En' : 'Ru'}</span>
      </IconButton>
    </Flex>
  );
}
