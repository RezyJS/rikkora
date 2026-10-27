import { forwardRef, type ReactNode } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { DropdownMenu } from '../Overlays/DropdownMenu';
import Button from './Button';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonProps, ButtonSize } from './Button.types';

export type SplitButtonProps = Omit<ButtonProps, 'asChild' | 'ref' | 'size'> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  menu: ReactNode;
  menuLabel: string;
};

export const SplitButton = forwardRef<HTMLButtonElement, SplitButtonProps>(function SplitButton(
  { children, menu, menuLabel, variant, tone, size = 'md', radius, disabled, loading,
    fullWidth, compact, disableAnimation, className, ...props }, ref,
) {
  const arrowSize: ButtonSize = size === 'md' ? 'icon' : `icon-${size}`;
  return <DropdownMenu.Root>
    <ButtonGroup fullWidth={fullWidth} className={className} aria-label={props['aria-label']}>
      <Button {...props} ref={ref} variant={variant} tone={tone} size={size} radius={radius}
        disabled={disabled} loading={loading} compact={compact} disableAnimation={disableAnimation}>
        {children}
      </Button>
      <DropdownMenu.Trigger asChild>
        <Button variant={variant} tone={tone} size={arrowSize} radius={radius}
          disabled={disabled || loading} disableAnimation={disableAnimation} aria-label={menuLabel}>
          <IconChevronDown size={16} stroke={1.7} aria-hidden='true' focusable='false' />
        </Button>
      </DropdownMenu.Trigger>
    </ButtonGroup>
    <DropdownMenu.Content align='end'>{menu}</DropdownMenu.Content>
  </DropdownMenu.Root>;
});
