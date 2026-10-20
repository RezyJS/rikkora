import { Hero } from '../../components/Hero/Hero';
import { SiteHeader } from '../../components/SiteHeader/SiteHeader';
import { Showcase } from '../../components/Showcase/Showcase';

import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />

      <main>
        <Hero />

        <Showcase />
      </main>
    </div>
  );
}
