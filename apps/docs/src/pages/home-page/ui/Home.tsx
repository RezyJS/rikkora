import { Box } from '@rikkora/ui';
import { Hero } from '@/widgets/hero';
import { SiteHeader } from '@/widgets/site-header';
import { Showcase } from '@/widgets/showcase';

import styles from './Home.module.css';

export function Home() {
  return (
    <Box className={styles.page}>
      <SiteHeader />

      <Box as='main'>
        <Hero />

        <Showcase />
      </Box>
    </Box>
  );
}
