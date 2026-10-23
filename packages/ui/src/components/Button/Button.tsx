import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import { cn } from '../../lib/cn';
import { renderControlLabel } from '../../lib/renderControlLabel';
import style from './Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    radius = 'sm',
    loading = false,
    type = 'button',
    disabled = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      data-loading={loading || undefined}
      data-radius={radius}
      className={cn(style.button, style[size], style[variant], className)}
    >
      <span className={cn(style.content, loading && style.contentHidden)}>
        {renderControlLabel(children, style.label)}
      </span>
      {loading && (
        <span
          aria-hidden='true'
          className={style.spinner}
        ></span>
      )}
    </button>
  );
});

export default Button;
Button.displayName = 'Button';
