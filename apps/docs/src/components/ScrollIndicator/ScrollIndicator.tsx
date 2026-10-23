import { Button, Box } from '@rikkora/ui';
import styles from './ScrollIndicator.module.css';
import { usePreferences } from '../../preferences/PreferencesContext';

export function ScrollIndicator() {
  const { t } = usePreferences();
  const scrollToNextSection = () => {
    document.getElementById('components')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
  };

  return (
    <Button variant='ghost'
      type='button'
      className={styles.indicator}
      onClick={scrollToNextSection}
      aria-label={t.scrollTo}
    >
      <Box as='span'
        className={styles.line}
        aria-hidden='true'
      />

      <Box as='span' className={styles.label}>{t.scroll}</Box>

      <svg
        width='16'
        height='24'
        viewBox='0 0 16 24'
        fill='none'
        aria-hidden='true'
      >
        <path
          d='M8 1V22M2 16L8 22L14 16'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Button>
  );
}
