import type { ReactNode } from 'react';

export interface FormControlProps {
  children?: ReactNode;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
}
