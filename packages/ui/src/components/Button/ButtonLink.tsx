import { forwardRef, type ElementType, type ReactElement } from 'react';
import { Link, type LinkProps } from '../Link/Link';
import type { ButtonProps } from './Button.types';
import { cn } from '../../lib/cn';
import { renderControlLabel } from '../../lib/renderControlLabel';
import styles from './Button.module.css';

export type ButtonLinkProps<T extends ElementType = 'a'> =
  Omit<LinkProps<T>, 'size' | 'variant' | 'radius'> &
  Pick<ButtonProps, 'variant' | 'size' | 'radius'>;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = 'primary', size = 'md', radius = 'sm', className, children, ...props }, ref,
) {
  return (
    <Link
      {...props}
      ref={ref}
      data-radius={radius}
      className={cn(styles.button, styles[size], styles[variant], className)}
    >
      <span className={styles.content}>
        {renderControlLabel(children, styles.label)}
      </span>
    </Link>
  );
}) as <T extends ElementType = 'a'>(props: ButtonLinkProps<T>) => ReactElement | null;
