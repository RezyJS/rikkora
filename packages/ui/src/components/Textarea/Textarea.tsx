import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { TextareaProps } from './Textarea.types';
import styles from './Textarea.module.css';
import { useFieldControl } from '../Field/Field';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, invalid, ...rest }, ref) => {
    const field = useFieldControl({ ...rest, invalid });
    return <textarea {...rest} {...field} ref={ref} rows={rows} className={cn(styles.textarea, className)} />;
  },
);

Textarea.displayName = 'Textarea';
export default Textarea;
