import type { ComponentPropsWithoutRef, ReactElement, ReactNode, Ref } from 'react';
import type { TextSize } from '../Foundation/Foundation.types';

type NativeButtonProps = ComponentPropsWithoutRef<'button'>;

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'danger';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg' | 'icon-xl';

export type ButtonRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type ButtonTone = 'primary' | 'danger' | 'success';
export type ButtonLoadingPlacement = 'start' | 'end' | 'center';
export type ButtonFontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type ButtonTextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

export interface ButtonVisualProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  tone?: ButtonTone;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  compact?: boolean;
  disableAnimation?: boolean;
  ripple?: boolean;
  textSize?: TextSize;
  fontWeight?: ButtonFontWeight;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  textTransform?: ButtonTextTransform;
}

export interface ButtonBaseProps extends NativeButtonProps, ButtonVisualProps {
  loading?: boolean;
  loadingText?: ReactNode;
  loadingPlacement?: ButtonLoadingPlacement;
  pressed?: boolean;
}

export type ButtonProps = ButtonBaseProps & (
  | { asChild?: false; ref?: Ref<HTMLButtonElement> }
  | { asChild: true; children: ReactElement; ref?: Ref<HTMLElement> }
);

export interface ButtonComponent {
  (props: ButtonBaseProps & { asChild: true; children: ReactElement; ref?: Ref<HTMLElement> }): ReactElement | null;
  (props: ButtonBaseProps & { asChild?: false; ref?: Ref<HTMLButtonElement> }): ReactElement | null;
  displayName?: string;
}
