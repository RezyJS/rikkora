import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Feedback.module.css';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  min?: number;
  max?: number;
  /** Omit for indeterminate progress. Supply aria-label or aria-labelledby. */
  value?: number;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { min = 0, max = 100, value, className, ...props }, ref,
) {
  const lower = Number.isFinite(min) ? min : 0;
  const upper = Number.isFinite(max) && max > lower ? max : lower + 100;
  const current = value !== undefined && Number.isFinite(value) ? Math.max(lower, Math.min(upper, value)) : undefined;
  const percentage = current === undefined ? undefined : (current - lower) / (upper - lower) * 100;
  return <div {...props} ref={ref} role='progressbar' aria-valuemin={lower} aria-valuemax={upper}
    aria-valuenow={current} data-state={current === undefined ? 'indeterminate' : 'determinate'}
    className={cn(styles.progress, className)}>
    <div className={styles.progressIndicator} style={{ width: percentage === undefined ? undefined : `${percentage}%` }} />
  </div>;
});
