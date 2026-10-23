import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';
import { useFieldControl } from '../Field/Field';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, invalid, ...rest }, ref) => {
    const field = useFieldControl({ ...rest, invalid });
    return <input {...rest} {...field} ref={ref} type='checkbox' className={cn(styles.checkbox, className)} />;
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
