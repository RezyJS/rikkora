import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import type { Tone } from '../Foundation/Foundation';
import styles from './Feedback.module.css';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: Tone;
  title?: ReactNode;
}

/** Static by default. Opt into role="status" or "alert" for a dynamically inserted message. */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { variant = 'neutral', title, children, className, ...props }, ref,
) {
  return <div {...props} ref={ref} data-variant={variant} className={cn(styles.alert, className)}>
    {title && <div className={styles.alertTitle}>{title}</div>}{children}
  </div>;
});
