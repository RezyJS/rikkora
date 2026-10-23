import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Foundation.module.css';

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(function Separator(
  { orientation = 'horizontal', decorative = false, className, ...props }, ref,
) {
  return <div {...props} ref={ref} role={decorative ? 'none' : 'separator'}
    aria-orientation={decorative ? undefined : orientation} data-orientation={orientation}
    className={cn(styles.separator, className)} />;
});
