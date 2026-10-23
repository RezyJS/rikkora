import { forwardRef, useContext, useId, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { FieldContext } from './fieldControl';
import type { FormControlProps } from './Field.types';
import styles from './Field.module.css';

export { FormControl } from './FormControl';
export { useFieldControl } from './fieldControl';
export type { FormControlProps } from './Field.types';

export interface FieldProps extends HTMLAttributes<HTMLDivElement>, Omit<FormControlProps, 'children'> {
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  /** Use the same id on the control when specifying its id explicitly. One control per Field. */
  controlId?: string;
}
export const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(
  { label, description, error, controlId, disabled, invalid, required, className, children, ...props }, ref,
) {
  const generatedId = useId();
  const parent = useContext(FieldContext);
  const id = controlId ?? generatedId;
  const isInvalid = invalid ?? (error ? true : parent.invalid);
  const isRequired = required ?? parent.required;
  const describedBy = [description && `${id}-hint`, isInvalid && error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return <FieldContext.Provider value={{ id, labelledBy: `${id}-label`, describedBy,
    disabled: disabled ?? parent.disabled, invalid: isInvalid, required: isRequired }}>
    <div {...props} ref={ref} className={cn(styles.field, className)}>
      <label id={`${id}-label`} htmlFor={id} className={styles.label}>
        {label}{isRequired && <span aria-hidden='true'> *</span>}
      </label>
      {children}
      {description && <div id={`${id}-hint`} className={styles.hint}>{description}</div>}
      {isInvalid && error && <div id={`${id}-error`} className={styles.error}>{error}</div>}
    </div>
  </FieldContext.Provider>;
});
