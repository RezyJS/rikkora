import { forwardRef, useState, type ComponentPropsWithoutRef, type HTMLAttributes, type ReactNode } from 'react';
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

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> { size?: 'sm' | 'md' | 'lg' }
/** Decorative: supply loading announcements on the surrounding button or status region. */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(function Spinner(
  { size = 'md', className, ...props }, ref,
) {
  return <span aria-hidden='true' {...props} ref={ref} data-size={size} className={cn(styles.spinner, className)} />;
});

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

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt: string;
  fallback?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  imageProps?: Omit<ComponentPropsWithoutRef<'img'>, 'src' | 'alt' | 'children'>;
}
function AvatarContent({ src, alt, fallback, imageProps }: Pick<AvatarProps, 'src' | 'alt' | 'fallback' | 'imageProps'>) {
  const [failed, setFailed] = useState(false);
  const initials = alt.trim().split(/\s+/).slice(0, 2).map((word) => Array.from(word)[0]).join('').toLocaleUpperCase();
  if (src && !failed) return <img {...imageProps} src={src} alt={alt} onError={(event) => {
    setFailed(true); imageProps?.onError?.(event);
  }} />;
  return <span role='img' aria-label={alt}><span aria-hidden='true'>{fallback ?? initials}</span></span>;
}
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { src, alt, fallback, size = 'md', imageProps, className, ...props }, ref,
) {
  return <span {...props} ref={ref} data-size={size} className={cn(styles.avatar, className)}>
    <AvatarContent key={src ?? ''} src={src} alt={alt} fallback={fallback} imageProps={imageProps} />
  </span>;
});
