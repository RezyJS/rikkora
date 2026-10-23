import { IconArrowDown } from '@tabler/icons-react';
import { Button, Box } from '@rikkora/ui';
import styles from './ScrollIndicator.module.css';
import { usePreferences } from '../../preferences/PreferencesContext';

export function ScrollIndicator() {
  const { t } = usePreferences();
  const scrollToNextSection = () => {
    document.getElementById('components')?.scrollIntoView({
      behavior:
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ?
          'instant'
        : 'smooth',
      block: 'start',
    });
  };

  return (
    <Button
      variant='ghost'
      type='button'
      className={styles.indicator}
      onClick={scrollToNextSection}
      aria-label={t.scrollTo}
    >
      <Box
        as='span'
        className={styles.line}
        aria-hidden='true'
      />

      <Box
        as='span'
        className={styles.label}
      >
        {t.scroll}
      </Box>

      <IconArrowDown width={16} height={24} stroke={2} aria-hidden='true' focusable='false' />
    </Button>
  );
}
