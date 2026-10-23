import {
  Children,
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbsProps extends ComponentPropsWithoutRef<'nav'> {
  /** Links followed by the current page. The last item receives aria-current="page". */
  children?: ReactNode;
  /** Decorative separator, hidden from assistive technology. */
  separator?: ReactNode;
}

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  function Breadcrumbs(
    {
      children,
      separator = '/',
      'aria-label': label = 'Breadcrumb',
      className,
      ...props
    },
    ref,
  ) {
    const items = Children.toArray(children);
    return (
      <nav
        {...props}
        ref={ref}
        aria-label={label}
        className={cn(styles.root, className)}
      >
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li
              key={index}
              className={styles.item}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item}
              {index < items.length - 1 && (
                <span
                  className={styles.separator}
                  aria-hidden='true'
                >
                  {separator}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);
