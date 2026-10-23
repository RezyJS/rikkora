import { forwardRef, useState, type ComponentPropsWithoutRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './Feedback.module.css';

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
