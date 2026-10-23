import { IconMoon, IconSun } from '@tabler/icons-react';
import { Flex, Button, Box } from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import styles from './PreferencesControls.module.css';

export function PreferencesControls() {
  const { t, theme, language, setTheme, setLanguage } = usePreferences();
  const themeLabel = theme === 'light' ? t.switchToDark : t.switchToLight;
  const languageLabel =
    language === 'en' ? t.switchToRussian : t.switchToEnglish;

  return (
    <Flex
      align='center'
      gap={2}
    >
      <Button
        size='icon-sm'
        variant='ghost'
        className={styles.control}
        aria-label={themeLabel}
        title={themeLabel}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <IconMoon size={20} stroke={1.7} aria-hidden='true' focusable='false' /> : <IconSun size={20} stroke={1.7} aria-hidden='true' focusable='false' />}
      </Button>
      <Button
        size='icon-sm'
        variant='ghost'
        className={styles.control}
        aria-label={languageLabel}
        title={languageLabel}
        onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
      >
        <Box
          as='span'
          aria-hidden='true'
        >
          {language === 'en' ? 'En' : 'Ru'}
        </Box>
      </Button>
    </Flex>
  );
}
