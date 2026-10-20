import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { InputProps } from './Input.types';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...rest }, ref) => (
    <input {...rest} ref={ref} type={type} className={cn(styles.input, className)} />
  ),
);

Input.displayName = 'Input';
export default Input;
