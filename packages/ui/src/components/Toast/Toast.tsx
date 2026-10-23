import { createContext, forwardRef, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties, type ReactNode } from 'react';
import * as Primitive from '@radix-ui/react-toast';
import { Portal } from '@radix-ui/react-portal';
import { cn } from '../../lib/cn';
import { OverlayScope, PortalAppearance } from '../Overlays/PortalAppearance';
import styles from './Toast.module.css';

export type ToastProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export type ToastTitleProps = ComponentPropsWithoutRef<typeof Primitive.Title>;
export type ToastDescriptionProps = ComponentPropsWithoutRef<typeof Primitive.Description>;
export type ToastCloseProps = ComponentPropsWithoutRef<typeof Primitive.Close>;
export type ToastActionProps = ComponentPropsWithoutRef<typeof Primitive.Action>;
export interface ToastViewportProps extends ComponentPropsWithoutRef<typeof Primitive.Viewport> { container?: HTMLElement | null }
export type ToastProviderProps = ComponentPropsWithoutRef<typeof Primitive.Provider>;
const Root = forwardRef<HTMLLIElement, ToastProps>(function ToastRoot({ className, ...props }, ref) {
  return <Primitive.Root {...props} ref={ref} className={cn(styles.toast, className)} />;
});
const Title = forwardRef<HTMLDivElement, ToastTitleProps>(function ToastTitle({ className, ...props }, ref) {
  return <Primitive.Title {...props} ref={ref} className={cn(styles.title, className)} />;
});
const Description = forwardRef<HTMLDivElement, ToastDescriptionProps>(function ToastDescription({ className, ...props }, ref) {
  return <Primitive.Description {...props} ref={ref} className={cn(styles.description, className)} />;
});
const Viewport = forwardRef<HTMLOListElement, ToastViewportProps>(function ToastViewport({ className, container, ...props }, ref) {
  return <Portal container={container} asChild><PortalAppearance><Primitive.Viewport {...props} ref={ref} className={cn(styles.viewport, className)} /></PortalAppearance></Portal>;
});
function Provider(props: ToastProviderProps) {
  return <OverlayScope><Primitive.Provider {...props} /></OverlayScope>;
}
/** Declarative primitives; use ToastProvider/useToast when an imperative queue is useful. */
export const Toast = { Provider, Root, Title, Description, Close: Primitive.Close, Action: Primitive.Action, Viewport };

export interface ToastMessage {
  title: ReactNode;
  description?: ReactNode;
  duration?: number;
  /** Defaults to background so routine notifications do not interrupt screen readers. */
  type?: 'foreground' | 'background';
}
interface ToastEntry extends ToastMessage { id: number }
export interface ToastApi {
  toast: (message: ToastMessage) => number;
  dismiss: (id: number) => void;
  dismissAll: () => void;
}
const ToastContext = createContext<ToastApi | null>(null);
export interface ToastQueueProviderProps extends ToastProviderProps {
  maxVisible?: number;
  closeLabel?: string;
  viewportLabel?: string;
}
/** Collapsible stack with a FIFO queue; waiting messages keep their full visible duration. */
export function ToastProvider({ children, maxVisible = 3, closeLabel = 'Dismiss notification', viewportLabel = 'Notifications', ...props }: ToastQueueProviderProps) {
  const nextId = useRef(0);
  const [entries, setEntries] = useState<ToastEntry[]>([]);
  const [frontContent, setFrontContent] = useState<HTMLDivElement | null>(null);
  const [frontHeight, setFrontHeight] = useState<number>();
  useLayoutEffect(() => {
    if (!frontContent) return;
    const measure = () => {
      const root = frontContent.parentElement!;
      const computed = getComputedStyle(root);
      setFrontHeight(frontContent.offsetHeight + parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom)
        + parseFloat(computed.borderTopWidth) + parseFloat(computed.borderBottomWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frontContent);
    return () => observer.disconnect();
  }, [frontContent]);
  const toast = useCallback((message: ToastMessage) => {
    const id = ++nextId.current;
    setEntries((current) => [...current, { ...message, id }]);
    return id;
  }, []);
  const dismiss = useCallback((id: number) => setEntries((current) => current.filter((entry) => entry.id !== id)), []);
  const dismissAll = useCallback(() => setEntries([]), []);
  const api = useMemo(() => ({ toast, dismiss, dismissAll }), [toast, dismiss, dismissAll]);
  const limit = Number.isFinite(maxVisible) ? Math.max(1, Math.floor(maxVisible)) : 3;
  const visible = entries.slice(0, limit);
  return <ToastContext.Provider value={api}><Provider {...props}>
    {children}
    {visible.map((entry, index) => <Root key={entry.id} open type={entry.type ?? 'background'} duration={entry.duration}
      data-stack-index={visible.length - index - 1}
      style={{ '--rkr-toast-index': visible.length - index - 1, '--rkr-toast-order': index + 1 } as CSSProperties}
      onOpenChange={(open) => { if (!open) dismiss(entry.id); }}>
      <div ref={index === visible.length - 1 ? setFrontContent : undefined}>
        <Title>{entry.title}</Title>
        {entry.description && <Description>{entry.description}</Description>}
      </div>
      <Primitive.Close className={styles.close} aria-label={closeLabel}>×</Primitive.Close>
    </Root>)}
    <Viewport label={viewportLabel} data-stacked='' style={{ '--rkr-toast-front-height': frontHeight === undefined ? undefined : `${frontHeight}px` } as CSSProperties} />
  </Provider></ToastContext.Provider>;
}
export function useToast(): ToastApi {
  const api = useContext(ToastContext);
  if (!api) throw new Error('useToast must be used within ToastProvider');
  return api;
}
