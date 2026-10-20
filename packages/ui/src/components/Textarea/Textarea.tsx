import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { TextareaProps } from './Textarea.types';
import styles from './Textarea.module.css';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...rest }, ref) => (
    <textarea {...rest} ref={ref} rows={rows} className={cn(styles.textarea, className)} />
  ),
);

Textarea.displayName = 'Textarea';
export default Textarea;
