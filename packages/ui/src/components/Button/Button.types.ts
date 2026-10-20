import type { ComponentPropsWithRef } from 'react';

type NativeButtonProps = ComponentPropsWithRef<'button'>;

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends NativeButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export type IconButtonProps = ButtonProps;
