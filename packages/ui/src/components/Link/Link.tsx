import { forwardRef, type ComponentPropsWithRef, type ElementType, type ReactElement } from 'react';
import { cn } from '../../lib/cn';
import styles from './Link.module.css';

export type LinkProps<T extends ElementType = 'a'> = {
  /** Render a router link component while retaining its navigation props. */
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithRef<T>, 'as' | 'className'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { as: Component = 'a', className, ...props }, ref,
) {
  return <Component {...props} ref={ref} className={cn(styles.link, className)} />;
}) as <T extends ElementType = 'a'>(props: LinkProps<T>) => ReactElement | null;
