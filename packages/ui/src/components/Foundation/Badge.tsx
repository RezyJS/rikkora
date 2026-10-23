import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import { renderControlLabel } from '../../lib/renderControlLabel';
import styles from './Foundation.module.css';
import type { Tone } from './Foundation.types';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { variant?: Tone }

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'neutral', className, children, ...props }, ref,
) {
  return <span {...props} ref={ref} data-variant={variant} className={cn(styles.badge, className)}>{renderControlLabel(children, styles.badgeLabel)}</span>;
});
