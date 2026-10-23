import { createContext, forwardRef, useContext, useId, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import styles from './Field.module.css';

export interface FormControlProps {
  children?: ReactNode;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
}
interface FieldContextValue extends Omit<FormControlProps, 'children'> {
  id?: string;
  describedBy?: string;
  labelledBy?: string;
}
const FieldContext = createContext<FieldContextValue>({});

/** Supplies shared state without adding a DOM wrapper. Explicit control props take precedence. */
export function FormControl({ children, ...state }: FormControlProps) {
  const parent = useContext(FieldContext);
  return <FieldContext.Provider value={{ ...parent, ...state }}>{children}</FieldContext.Provider>;
}

interface ControlState extends Omit<FormControlProps, 'children'> {
  id?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  'aria-invalid'?: HTMLAttributes<HTMLElement>['aria-invalid'];
}
export function useFieldControl(props: ControlState) {
  const context = useContext(FieldContext);
  const invalid = props.invalid ?? context.invalid;
  return {
    id: props.id ?? context.id,
    disabled: props.disabled ?? context.disabled,
    required: props.required ?? context.required,
    'aria-invalid': props['aria-invalid'] ?? invalid,
    'aria-labelledby': props['aria-labelledby'] ?? context.labelledBy,
    'aria-describedby': [context.describedBy, props['aria-describedby']].filter(Boolean).join(' ') || undefined,
  };
}

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
