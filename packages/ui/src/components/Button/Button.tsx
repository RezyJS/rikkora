import { forwardRef, type ForwardedRef, type ReactNode, type PointerEvent, type MouseEvent, type KeyboardEvent } from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import type { ButtonComponent, ButtonProps } from './Button.types';
import { cn } from '../../lib/cn';
import { ButtonContent } from './ButtonContent';
import { useButtonRipple } from './useButtonRipple';
import styles from './Button.module.css';

const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    radius = 'sm',
    tone = 'primary', startContent, endContent, fullWidth = false, compact = false,
    loadingText, loadingPlacement = 'start', disableAnimation = false, ripple = false,
    pressed, asChild = false, onPointerDown, onClick, onClickCapture, onKeyDownCapture,
    textSize, fontWeight, italic, underline, strikethrough, textTransform,
    loading = false,
    type = 'button',
    disabled = false,
    className,
    children,
    ...rest
  } = props;

  const blocked = disabled || loading;
  const ink = useButtonRipple<HTMLButtonElement>(ripple && !disableAnimation && !blocked);
  const content = (label: ReactNode) => <>
    <ButtonContent startContent={startContent} endContent={endContent}
      loading={loading} loadingText={loadingText} loadingPlacement={size.startsWith('icon') ? 'center' : loadingPlacement}>
      {label}
    </ButtonContent>
    {ink.content}
  </>;
  const shared = {
    ...rest,
    'aria-busy': loading,
    'aria-pressed': pressed ?? rest['aria-pressed'],
    'data-loading': loading || undefined,
    'data-radius': radius,
    'data-tone': tone,
    'data-animation': disableAnimation ? 'none' : undefined,
    'data-text-size': textSize,
    'data-font-weight': fontWeight,
    'data-italic': italic || undefined,
    'data-underline': underline || undefined,
    'data-strikethrough': strikethrough || undefined,
    'data-text-transform': textTransform,
    className: cn(styles.button, styles[size], styles[variant], fullWidth && styles.fullWidth, compact && styles.compact, ripple && styles.withRipple, className),
    onPointerDown: (event: PointerEvent<HTMLButtonElement>) => { onPointerDown?.(event); ink.onPointerDown(event); },
    onClick: (event: MouseEvent<HTMLButtonElement>) => { if (!event.defaultPrevented) { onClick?.(event); ink.onClick(event); } },
    onClickCapture: (event: MouseEvent<HTMLButtonElement>) => {
      if (blocked) { event.preventDefault(); event.stopPropagation(); return; }
      onClickCapture?.(event);
    },
    onKeyDownCapture: (event: KeyboardEvent<HTMLButtonElement>) => {
      if (blocked && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); event.stopPropagation(); return; }
      onKeyDownCapture?.(event);
    },
  };
  if (asChild) return <Slot {...shared} ref={ref} aria-disabled={blocked || undefined} tabIndex={blocked ? -1 : rest.tabIndex}>
    <Slottable child={children}>{content}</Slottable>
  </Slot>;
  return <button {...shared} ref={ref as ForwardedRef<HTMLButtonElement>} type={type} disabled={blocked}>{content(children)}</button>;
}) as ButtonComponent;

export default Button;
Button.displayName = 'Button';
