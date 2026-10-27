import { forwardRef, useState } from 'react';
import Button from './Button';
import type { ButtonProps } from './Button.types';

export type ToggleButtonProps = Omit<ButtonProps, 'asChild' | 'ref' | 'pressed' | 'aria-pressed'> & {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
};

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(function ToggleButton(
  { pressed, defaultPressed = false, onPressedChange, onClick, variant = 'outline', ...props }, ref,
) {
  const [internal, setInternal] = useState(defaultPressed);
  const current = pressed ?? internal;
  return <Button {...props} ref={ref} variant={variant} pressed={current} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (pressed === undefined) setInternal(!current);
    onPressedChange?.(!current);
  }} />;
});
