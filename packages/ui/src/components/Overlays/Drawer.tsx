import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { Dialog, type DialogProps, type DialogContentProps } from './DialogPrimitives';
import styles from './Overlays.module.css';

const { Content } = Dialog;

export type DrawerProps = DialogProps;
export interface DrawerContentProps extends DialogContentProps { side?: 'left' | 'right' | 'top' | 'bottom' }
const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(function DrawerContent(
  { side = 'right', className, ...props }, ref,
) {
  return <Content {...props} ref={ref} data-side={side} className={cn(styles.drawer, className)} />;
});
/** Drawer shares Dialog's portal, focus management, dismissal, and scroll locking. */
export const Drawer = { ...Dialog, Content: DrawerContent };
