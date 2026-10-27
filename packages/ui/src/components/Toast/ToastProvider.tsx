import { useCallback, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import * as Primitive from '@radix-ui/react-toast';
import { IconX } from '@tabler/icons-react';
import type { ToastMessage, ToastQueueProviderProps } from './Toast.types';
import { Toast } from './ToastPrimitives';
import { ToastContext } from './useToast';
import styles from './Toast.module.css';

interface ToastEntry extends ToastMessage { id: number }
const { Provider, Root, Title, Description, Viewport } = Toast;

/** Collapsible stack with a FIFO queue that reveals all notifications on hover or focus. */
export function ToastProvider({ children, maxVisible = 3, width, closeLabel = 'Dismiss notification', viewportLabel = 'Notifications', ...props }: ToastQueueProviderProps) {
  const nextId = useRef(0);
  const [entries, setEntries] = useState<ToastEntry[]>([]);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [viewport, setViewport] = useState<HTMLOListElement | null>(null);
  const [frontContent, setFrontContent] = useState<HTMLDivElement | null>(null);
  const [frontHeight, setFrontHeight] = useState<number>();
  useLayoutEffect(() => {
    if (!viewport) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    const focus = () => setFocused(true);
    const blur = (event: FocusEvent) => {
      if (!viewport.contains(event.relatedTarget as Node | null)) setFocused(false);
    };
    // Toast roots are portaled into the viewport; native events follow their DOM ancestry.
    viewport.addEventListener('pointerenter', enter);
    viewport.addEventListener('pointerleave', leave);
    viewport.addEventListener('focusin', focus);
    viewport.addEventListener('focusout', blur);
    return () => {
      viewport.removeEventListener('pointerenter', enter);
      viewport.removeEventListener('pointerleave', leave);
      viewport.removeEventListener('focusin', focus);
      viewport.removeEventListener('focusout', blur);
    };
  }, [viewport]);
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
  const expanded = hovered || focused;
  const visible = expanded ? entries : entries.slice(0, limit);
  const overflowCount = Math.max(0, entries.length - limit);
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
    <Viewport ref={setViewport} width={width} label={entries.length ? `${viewportLabel} (${entries.length})` : viewportLabel} data-stacked=''
      data-overflow-count={overflowCount || undefined}
      style={{
        '--rkr-toast-front-height': frontHeight === undefined ? undefined : `${frontHeight}px`,
        '--rkr-toast-peek-height': `${Math.max(0, Math.min(entries.length, limit) - 1) * 12}px`,
      } as CSSProperties} />
  </Provider></ToastContext.Provider>;
}
