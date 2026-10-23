import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import styles from './Foundation.module.css';
import type { BoxProps } from './Foundation.types';
import { Box } from './Box';

export interface CardProps extends BoxProps { variant?: 'outline' | 'filled' }

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { padding = 6, variant = 'outline', className, ...props }, ref,
) {
  return <Box {...props} ref={ref} padding={padding} data-variant={variant} className={cn(styles.card, className)} />;
});
