import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { InputProps } from './Input.types';
import styles from './Input.module.css';
import { useFieldControl } from '../Field/fieldControl';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', invalid, ...rest }, ref) => {
    const field = useFieldControl({ ...rest, invalid });
    return <input {...rest} {...field} ref={ref} type={type} className={cn(styles.input, className)} />;
  },
);

Input.displayName = 'Input';
export default Input;
