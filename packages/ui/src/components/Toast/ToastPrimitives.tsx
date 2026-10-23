import { forwardRef, type CSSProperties } from 'react';
import * as Primitive from '@radix-ui/react-toast';
import { Portal } from '@radix-ui/react-portal';
import { cn } from '../../lib/cn';
import { OverlayScope, PortalAppearance } from '../Overlays/PortalAppearance';
import type { ToastProps, ToastTitleProps, ToastDescriptionProps, ToastViewportProps, ToastProviderProps } from './Toast.types';
import styles from './Toast.module.css';

const Root = forwardRef<HTMLLIElement, ToastProps>(function ToastRoot({ className, ...props }, ref) {
  return <Primitive.Root {...props} ref={ref} className={cn(styles.toast, className)} />;
});
const Title = forwardRef<HTMLDivElement, ToastTitleProps>(function ToastTitle({ className, ...props }, ref) {
  return <Primitive.Title {...props} ref={ref} className={cn(styles.title, className)} />;
});
const Description = forwardRef<HTMLDivElement, ToastDescriptionProps>(function ToastDescription({ className, ...props }, ref) {
  return <Primitive.Description {...props} ref={ref} className={cn(styles.description, className)} />;
});
const Viewport = forwardRef<HTMLOListElement, ToastViewportProps>(function ToastViewport({ className, container, width, style, ...props }, ref) {
  return <Portal container={container} asChild><PortalAppearance><Primitive.Viewport {...props} ref={ref} className={cn(styles.viewport, className)}
    style={{ ...style, ...(width !== undefined && { '--rkr-toast-width': typeof width === 'number' ? `${width}px` : width }) } as CSSProperties} /></PortalAppearance></Portal>;
});
function Provider(props: ToastProviderProps) {
  return <OverlayScope><Primitive.Provider {...props} /></OverlayScope>;
}
/** Declarative primitives; use ToastProvider/useToast when an imperative queue is useful. */
export const Toast = { Provider, Root, Title, Description, Close: Primitive.Close, Action: Primitive.Action, Viewport };

