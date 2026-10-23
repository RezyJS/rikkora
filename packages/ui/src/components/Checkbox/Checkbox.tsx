import { forwardRef } from 'react';
import { IconCheck, IconMinus } from '@tabler/icons-react';
import { cn } from '../../lib/cn';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';
import { useFieldControl } from '../Field/fieldControl';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, invalid, ...rest }, ref) => {
    const field = useFieldControl({ ...rest, invalid });
    return <span className={styles.control}>
      <input {...rest} {...field} ref={ref} type='checkbox' className={cn(styles.checkbox, className)} />
      <IconCheck className={cn(styles.indicator, styles.check)} size='var(--rkr-spacing-3)' stroke={2} aria-hidden='true' focusable='false' />
      <IconMinus className={cn(styles.indicator, styles.mixed)} size='var(--rkr-spacing-3)' stroke={2} aria-hidden='true' focusable='false' />
    </span>;
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
