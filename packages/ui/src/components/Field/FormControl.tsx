import { useContext } from 'react';
import { FieldContext } from './fieldControl';
import type { FormControlProps } from './Field.types';

/** Supplies shared state without adding a DOM wrapper. Explicit control props take precedence. */
export function FormControl({ children, ...state }: FormControlProps) {
  const parent = useContext(FieldContext);
  return <FieldContext.Provider value={{ ...parent, ...state }}>{children}</FieldContext.Provider>;
}

