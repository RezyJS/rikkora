import { forwardRef, useId, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { useFieldControl } from '../Field/fieldControl';
import styles from './Controls.module.css';

export interface RadioOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<ComponentPropsWithoutRef<'fieldset'>, 'onChange' | 'defaultValue'> {
  options: readonly RadioOption[];
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  invalid?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

/** Native radios provide arrow navigation, form submission, reset, and constraint validation. */
export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(function RadioGroup(
  { options, name, value, defaultValue, onValueChange, required, invalid, orientation = 'vertical', className, ...props }, ref,
) {
  const generatedName = useId();
  const field = useFieldControl({ ...props, required, invalid });
  const { required: isRequired, ...groupField } = field;
  return <fieldset {...props} {...groupField} ref={ref} role='radiogroup' aria-required={isRequired}
    data-orientation={orientation} className={cn(styles.radioGroup, className)}>
    {options.map((option) => <label key={option.value} className={styles.radioLabel}>
      <input type='radio' name={name ?? generatedName} value={option.value} form={props.form}
        checked={value === undefined ? undefined : value === option.value}
        defaultChecked={value === undefined ? defaultValue === option.value : undefined}
        disabled={field.disabled || option.disabled} required={isRequired}
        onChange={(event) => { if (event.target.checked) onValueChange?.(option.value); }} />
      <span>{option.label}</span>
    </label>)}
  </fieldset>;
});
