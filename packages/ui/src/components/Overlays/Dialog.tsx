import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as Primitive from '@radix-ui/react-dialog';
import { cn } from '../../lib/cn';
import { OverlayScope, PortalAppearance } from './PortalAppearance';
import styles from './Overlays.module.css';

export type DialogProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export interface DialogContentProps extends ComponentPropsWithoutRef<typeof Primitive.Content> {
  container?: HTMLElement | null;
  overlayClassName?: string;
}
export type DialogTriggerProps = ComponentPropsWithoutRef<typeof Primitive.Trigger>;
export type DialogTitleProps = ComponentPropsWithoutRef<typeof Primitive.Title>;
export type DialogDescriptionProps = ComponentPropsWithoutRef<typeof Primitive.Description>;
export type DialogCloseProps = ComponentPropsWithoutRef<typeof Primitive.Close>;

function Root(props: DialogProps) {
  return <OverlayScope><Primitive.Root {...props} /></OverlayScope>;
}
const Content = forwardRef<HTMLDivElement, DialogContentProps>(function DialogContent(
  { container, overlayClassName, className, children, forceMount, ...props }, ref,
) {
  return <Primitive.Portal container={container} forceMount={forceMount}><PortalAppearance>
    <Primitive.Overlay className={cn(styles.overlay, overlayClassName)} />
    <Primitive.Content {...props} ref={ref} className={cn(styles.dialog, className)}>{children}</Primitive.Content>
  </PortalAppearance></Primitive.Portal>;
});
const Title = forwardRef<HTMLHeadingElement, DialogTitleProps>(function DialogTitle({ className, ...props }, ref) {
  return <Primitive.Title {...props} ref={ref} className={cn(styles.title, className)} />;
});
const Description = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(function DialogDescription({ className, ...props }, ref) {
  return <Primitive.Description {...props} ref={ref} className={cn(styles.description, className)} />;
});

/** Include Title, Description (or aria-describedby={undefined}), and an accessible Close control. */
export const Dialog = { Root, Trigger: Primitive.Trigger, Content, Title, Description, Close: Primitive.Close };

export type DrawerProps = DialogProps;
export interface DrawerContentProps extends DialogContentProps { side?: 'left' | 'right' | 'top' | 'bottom' }
const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(function DrawerContent(
  { side = 'right', className, ...props }, ref,
) {
  return <Content {...props} ref={ref} data-side={side} className={cn(styles.drawer, className)} />;
});
/** Drawer shares Dialog's portal, focus management, dismissal, and scroll locking. */
export const Drawer = { ...Dialog, Content: DrawerContent };
