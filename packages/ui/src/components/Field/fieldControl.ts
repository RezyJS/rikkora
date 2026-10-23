import { createContext, useContext, type HTMLAttributes } from 'react';
import type { FormControlProps } from './Field.types';

interface FieldContextValue extends Omit<FormControlProps, 'children'> {
  id?: string;
  describedBy?: string;
  labelledBy?: string;
}
export const FieldContext = createContext<FieldContextValue>({});

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

