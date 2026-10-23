import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Feedback.module.css';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  shape?: 'rectangle' | 'circle' | 'text';
  animated?: boolean;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { shape = 'rectangle', animated = true, className, ...props }, ref,
) {
  return <div aria-hidden='true' {...props} ref={ref} data-shape={shape} data-animated={animated}
    className={cn(styles.skeleton, className)} />;
});
