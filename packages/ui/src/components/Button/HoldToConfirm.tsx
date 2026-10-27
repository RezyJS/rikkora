import { forwardRef, useCallback, useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export type HoldToConfirmProps = Omit<ButtonProps, 'asChild' | 'ref' | 'onClick' | 'type'> & {
  holdDuration?: number;
  holdingText?: ReactNode;
  confirmedText?: ReactNode;
  instructions?: string;
  onConfirm: () => void;
};

export const HoldToConfirm = forwardRef<HTMLButtonElement, HoldToConfirmProps>(function HoldToConfirm(
  { holdDuration = 1500, holdingText, confirmedText, instructions = 'Hold the pointer, Enter, or Space to confirm. Release or press Escape to cancel.',
    onConfirm, children, disabled, loading, style, className, onPointerDown, onPointerUp, onPointerCancel,
    onPointerMove, onPointerLeave, onLostPointerCapture, onKeyDown, onKeyUp, onBlur, ...props }, ref,
) {
  const [holding, setHolding] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const active = useRef(false);
  const id = useId();
  const duration = Number.isFinite(holdDuration) && holdDuration > 0 ? holdDuration : 1500;
  const cancel = useCallback(() => {
    clearTimeout(timer.current);
    active.current = false;
    setHolding(false);
  }, []);
  function start() {
    if (active.current || disabled || loading) return;
    active.current = true;
    setConfirmed(false);
    setHolding(true);
    timer.current = setTimeout(() => {
      if (!active.current) return;
      setHolding(false);
      setConfirmed(true);
      onConfirm();
    }, duration);
  }
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!holding) return;
    window.addEventListener('blur', cancel);
    return () => window.removeEventListener('blur', cancel);
  }, [holding, cancel]);
  useEffect(() => {
    if (disabled || loading) {
      clearTimeout(timer.current);
      active.current = false;
      setHolding(false);
    }
  }, [disabled, loading]);
  return <>
    <Button {...props} ref={ref} type='button' disabled={disabled} loading={loading}
      aria-describedby={[props['aria-describedby'], id].filter(Boolean).join(' ')}
      aria-live={props['aria-live'] ?? 'polite'}
      className={[styles.hold, className].filter(Boolean).join(' ')}
      style={{ ...style, '--rkr-button-hold-duration': `${duration}ms` } as CSSProperties}
      data-holding={holding || undefined}
      onClick={(event) => event.preventDefault()}
      onPointerDown={(event) => {
        onPointerDown?.(event);
        if (event.defaultPrevented || event.button !== 0) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        start();
      }}
      onPointerUp={(event) => { onPointerUp?.(event); cancel(); }}
      onPointerCancel={(event) => { onPointerCancel?.(event); cancel(); }}
      onLostPointerCapture={(event) => { onLostPointerCapture?.(event); cancel(); }}
      onPointerLeave={(event) => { onPointerLeave?.(event); cancel(); }}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        const box = event.currentTarget.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) cancel();
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.defaultPrevented) return;
        if (event.key === 'Escape') cancel();
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (!event.repeat) start(); }
      }}
      onKeyUp={(event) => { onKeyUp?.(event); if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); cancel(); } }}
      onBlur={(event) => { onBlur?.(event); cancel(); }}>
      {confirmed && confirmedText != null ? confirmedText : holding && holdingText != null ? holdingText : children}
    </Button>
    <span id={id} className={styles.visuallyHidden}>{instructions}</span>
  </>;
});
