import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { renderControlLabel } from '../../lib/renderControlLabel';
import type { ButtonLoadingPlacement } from './Button.types';
import styles from './Button.module.css';

export function ButtonContent({ children, startContent, endContent, loading, loadingText, loadingPlacement = 'start' }: {
  children?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  loading?: boolean;
  loadingText?: ReactNode;
  loadingPlacement?: ButtonLoadingPlacement;
}) {
  const spinner = <span aria-hidden='true' className={styles.spinner} />;
  const start = loading && loadingPlacement === 'start' ? spinner : startContent;
  const end = loading && loadingPlacement === 'end' ? spinner : endContent;
  return <>
    <span className={cn(styles.content, loading && loadingPlacement === 'center' && styles.contentHidden)}>
      {start != null && <span className={styles.slot}>{start}</span>}
      {renderControlLabel(loading && loadingText != null ? loadingText : children, styles.label)}
      {end != null && <span className={styles.slot}>{end}</span>}
    </span>
    {loading && loadingPlacement === 'center' && <span aria-hidden='true' className={cn(styles.spinner, styles.spinnerCenter)} />}
  </>;
}
