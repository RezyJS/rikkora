import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
import type * as Primitive from '@radix-ui/react-toast';

export type ToastProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export type ToastTitleProps = ComponentPropsWithoutRef<typeof Primitive.Title>;
export type ToastDescriptionProps = ComponentPropsWithoutRef<typeof Primitive.Description>;
export type ToastCloseProps = ComponentPropsWithoutRef<typeof Primitive.Close>;
export type ToastActionProps = ComponentPropsWithoutRef<typeof Primitive.Action>;
export interface ToastViewportProps extends ComponentPropsWithoutRef<typeof Primitive.Viewport> {
  container?: HTMLElement | null;
  /** Fixed toast width: numbers are pixels; defaults to 24rem, capped to the viewport. */
  width?: CSSProperties['width'];
}
export type ToastProviderProps = ComponentPropsWithoutRef<typeof Primitive.Provider>;
export interface ToastMessage {
  title: ReactNode;
  description?: ReactNode;
  duration?: number;
  /** Defaults to background so routine notifications do not interrupt screen readers. */
  type?: 'foreground' | 'background';
}
export interface ToastApi {
  toast: (message: ToastMessage) => number;
  dismiss: (id: number) => void;
  dismissAll: () => void;
}
export interface ToastQueueProviderProps extends ToastProviderProps {
  maxVisible?: number;
  /** Fixed toast width: numbers are pixels; defaults to 24rem, capped to the viewport. */
  width?: CSSProperties['width'];
  closeLabel?: string;
  viewportLabel?: string;
}
