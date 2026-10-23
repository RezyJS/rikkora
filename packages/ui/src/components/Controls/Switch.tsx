import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';
import { useFieldControl } from '../Field/fieldControl';
import styles from './Controls.module.css';

export interface SwitchProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'role' | 'size'> {
  invalid?: boolean;
}

/** Native checkbox form integration with switch semantics. */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, invalid, ...props }, ref,
) {
  const field = useFieldControl({ ...props, invalid });
  return <input {...props} {...field} type='checkbox' role='switch' ref={ref} className={cn(styles.switch, className)} />;
});
