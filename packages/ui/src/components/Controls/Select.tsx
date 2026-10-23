import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { cn } from '../../lib/cn';
import { useFieldControl } from '../Field/fieldControl';
import styles from './Controls.module.css';

export interface SelectProps extends ComponentPropsWithoutRef<'select'> { invalid?: boolean }

/** Native select: children are option/optgroup elements; onChange receives a DOM event. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, invalid, ...props }, ref,
) {
  const field = useFieldControl({ ...props, invalid });
  const hasIndicator = !props.multiple && !(Number(props.size) > 1);
  return <span className={styles.selectControl}>
    <select {...props} {...field} ref={ref} data-indicator={hasIndicator || undefined} className={cn(styles.select, className)} />
    {hasIndicator && <IconChevronDown className={styles.selectIndicator} size='var(--rkr-spacing-4)' stroke={2} aria-hidden='true' focusable='false' />}
  </span>;
});
