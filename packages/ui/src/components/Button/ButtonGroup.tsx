import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';
import styles from './Button.module.css';

export interface ButtonGroupProps extends ComponentPropsWithoutRef<'div'> {
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup(
  { orientation = 'horizontal', fullWidth, className, ...props }, ref,
) {
  return <div {...props} ref={ref} role={props.role ?? 'group'} data-orientation={orientation}
    className={cn(styles.group, fullWidth && styles.groupFullWidth, className)} />;
});
