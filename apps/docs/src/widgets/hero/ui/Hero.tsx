import { IconArrowUpRight } from '@tabler/icons-react';
import { Box, Heading, Text, ButtonLink } from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { ScrollIndicator } from '@/shared/ui/scroll-indicator';

import rikka from '../../../shared/assets/rikka.webp';
import styles from './Hero.module.css';
import { usePreferences } from '@/shared/model/preferences';

export function Hero() {
  const { t } = usePreferences();
  return (
    <Box
      as='section'
      className={styles.hero}
      aria-labelledby='hero-title'
    >
      <Box className={styles.container}>
        <Box className={styles.content}>
          <Box
            as='span'
            className={styles.eyebrow}
          >
            {t.eyebrow}
          </Box>

          <Heading
            level={1}
            id='hero-title'
            className={styles.title}
          >
            rikkora<Box as='span'>.</Box>
          </Heading>

          <Text
            as='p'
            className={styles.description}
          >
            {t.heroBefore}
            <Box as='span'>{t.heroName}</Box>
            {t.heroAfter}
          </Text>

          <ButtonLink
            radius='lg'
            as={RouterLink}
            to='/docs/components'
            className={styles.cta}
          >
            {t.explore}
            <IconArrowUpRight size={16} stroke={1.7} aria-hidden='true' focusable='false' />
          </ButtonLink>
        </Box>
      </Box>

      <Box className={styles.artwork}>
        <Box
          as='img'
          src={rikka}
          alt={t.mascot}
          className={styles.rikka}
          fetchPriority='high'
        />
      </Box>

      <ScrollIndicator />
    </Box>
  );
}
