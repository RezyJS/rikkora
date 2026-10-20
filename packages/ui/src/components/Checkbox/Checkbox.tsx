import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...rest }, ref) => (
    <input {...rest} ref={ref} type='checkbox' className={cn(styles.checkbox, className)} />
  ),
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
