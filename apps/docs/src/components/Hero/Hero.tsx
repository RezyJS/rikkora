import { Link } from 'react-router';
import { ScrollIndicator } from '../ScrollIndicator/ScrollIndicator';

import rikka from '../../assets/rikka.webp';
import styles from './Hero.module.css';
import { usePreferences } from '../../preferences/PreferencesContext';

export function Hero() {
  const { t } = usePreferences();
  return (
    <section
      className={styles.hero}
      aria-labelledby='hero-title'
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{t.eyebrow}</span>

          <h1
            id='hero-title'
            className={styles.title}
          >
            rikkora<span>.</span>
          </h1>

          <p className={styles.description}>
            {t.heroBefore}<span>{t.heroName}</span>{t.heroAfter}
          </p>

          <Link
            to='/docs/components'
            className={styles.cta}
          >
            {t.explore}
            <span aria-hidden='true'>↗</span>
          </Link>
        </div>
      </div>

      <div className={styles.artwork}>
        <img
          src={rikka}
          alt={t.mascot}
          className={styles.rikka}
          fetchPriority='high'
        />
      </div>

      <ScrollIndicator />
    </section>
  );
}
