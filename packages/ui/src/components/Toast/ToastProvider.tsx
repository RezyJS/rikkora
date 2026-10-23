import { useCallback, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import * as Primitive from '@radix-ui/react-toast';
import { IconX } from '@tabler/icons-react';
import type { ToastMessage, ToastQueueProviderProps } from './Toast.types';
import { Toast } from './ToastPrimitives';
import { ToastContext } from './useToast';
import styles from './Toast.module.css';

interface ToastEntry extends ToastMessage { id: number }
const { Provider, Root, Title, Description, Viewport } = Toast;

/** Collapsible stack with a FIFO queue; waiting messages keep their full visible duration. */
export function ToastProvider({ children, maxVisible = 3, width, closeLabel = 'Dismiss notification', viewportLabel = 'Notifications', ...props }: ToastQueueProviderProps) {
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
      <Primitive.Close className={styles.close} aria-label={closeLabel}><IconX size='var(--rkr-spacing-4)' stroke={2} aria-hidden='true' focusable='false' /></Primitive.Close>
    </Root>)}
    <Viewport width={width} label={viewportLabel} data-stacked='' style={{ '--rkr-toast-front-height': frontHeight === undefined ? undefined : `${frontHeight}px` } as CSSProperties} />
  </Provider></ToastContext.Provider>;
}
