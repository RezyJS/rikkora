import { forwardRef, useRef, useState, type ReactNode } from 'react';
import { Dialog } from '../Overlays/DialogPrimitives';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export type ConfirmButtonProps = Omit<ButtonProps, 'asChild' | 'ref' | 'title' | 'onClick' | 'type'> & {
  title: ReactNode;
  description?: ReactNode;
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  pendingText?: ReactNode;
  errorText?: ReactNode;
  onConfirm: () => void | Promise<void>;
  onConfirmError?: (error: unknown) => void;
};

export const ConfirmButton = forwardRef<HTMLButtonElement, ConfirmButtonProps>(function ConfirmButton(
  { title, description, confirmText = 'Confirm', cancelText = 'Cancel', pendingText = 'Confirming…',
    errorText = 'Could not complete the action. Try again.', onConfirm, onConfirmError,
    variant = 'danger', tone = 'danger', children, ...props }, ref,
) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const lock = useRef(false);
  const cancel = useRef<HTMLButtonElement>(null);
  async function confirm() {
    if (lock.current) return;
    lock.current = true;
    setPending(true);
    setFailed(false);
    try {
      await onConfirm();
      setOpen(false);
    } catch (error) {
      if (onConfirmError) onConfirmError(error);
      else setFailed(true);
    } finally {
      lock.current = false;
      setPending(false);
    }
  }
  return <Dialog.Root open={open} onOpenChange={(next) => {
    if (lock.current) return;
    setFailed(false);
    setOpen(next);
  }}>
    <Dialog.Trigger asChild><Button {...props} ref={ref} variant={variant} tone={tone}>{children}</Button></Dialog.Trigger>
    <Dialog.Content role='alertdialog' {...(description == null ? { 'aria-describedby': undefined } : {})}
      onOpenAutoFocus={(event) => { event.preventDefault(); cancel.current?.focus(); }}>
      <Dialog.Title>{title}</Dialog.Title>
      {description != null && <Dialog.Description>{description}</Dialog.Description>}
      {failed && <p role='alert' className={styles.confirmError}>{errorText}</p>}
      <div className={styles.confirmActions}>
        <Dialog.Close asChild><Button ref={cancel} variant='secondary' disabled={pending}>{cancelText}</Button></Dialog.Close>
        <Button tone={tone} loading={pending} loadingText={pendingText} onClick={() => { void confirm(); }}>{confirmText}</Button>
      </div>
    </Dialog.Content>
  </Dialog.Root>;
});
