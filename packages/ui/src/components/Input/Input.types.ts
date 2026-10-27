import type { ComponentPropsWithRef } from 'react';

export type InputVariant = 'default' | 'hover';

export type InputProps = ComponentPropsWithRef<'input'> & {
  invalid?: boolean;
  variant?: InputVariant;
  underline?: boolean;
};
