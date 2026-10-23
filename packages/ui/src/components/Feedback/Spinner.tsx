import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Feedback.module.css';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> { size?: 'sm' | 'md' | 'lg' }

/** Decorative: supply loading announcements on the surrounding button or status region. */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(function Spinner(
  { size = 'md', className, ...props }, ref,
) {
  return <span aria-hidden='true' {...props} ref={ref} data-size={size} className={cn(styles.spinner, className)} />;
});
