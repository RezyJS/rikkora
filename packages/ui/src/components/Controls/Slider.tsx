import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';
import { useFieldControl } from '../Field/fieldControl';
import styles from './Controls.module.css';

export interface SliderProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'size'> { invalid?: boolean }

/** A horizontal native range control. Use Field or aria-label to supply its accessible name. */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { className, invalid, min = 0, max = 100, step = 1, ...props }, ref,
) {
  const field = useFieldControl({ ...props, invalid });
  return <input {...props} {...field} type='range' min={min} max={max} step={step} ref={ref}
    className={cn(styles.slider, className)} />;
});
