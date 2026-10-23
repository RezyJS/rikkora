import { forwardRef, type ComponentPropsWithoutRef, type CSSProperties, type Ref } from 'react';
import * as Primitive from '@radix-ui/react-scroll-area';
import { cn } from '../../lib/cn';
import styles from './ScrollArea.module.css';

export type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';
export type ScrollAreaViewportProps = Omit<ComponentPropsWithoutRef<typeof Primitive.Viewport>, 'asChild' | 'children' | 'disableImplicitContentElement'>;
export interface ScrollAreaCSSProperties extends CSSProperties {
  '--rkr-scrollbar-size'?: string;
  '--rkr-scrollbar-track-color'?: string;
  '--rkr-scrollbar-thumb-color'?: string;
  '--rkr-scrollbar-thumb-hover-color'?: string;
}
export interface ScrollAreaProps extends Omit<ComponentPropsWithoutRef<typeof Primitive.Root>, 'asChild'> {
  style?: ScrollAreaCSSProperties;
  orientation?: ScrollAreaOrientation;
  /** Native scrolling element: events, tabIndex, className, style and ARIA attributes. */
  viewportProps?: ScrollAreaViewportProps;
  /** Use scrollTo/scrollTop/scrollLeft on this element, not the outer root ref. */
  viewportRef?: Ref<HTMLDivElement>;
}

/** Native scrolling with custom overlay tracks. Constrain height for vertical scrolling. */
export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(function ScrollArea(
  { orientation = 'vertical', type = 'hover', scrollHideDelay = 600, viewportProps = {}, viewportRef,
    className, children, 'aria-label': label, 'aria-labelledby': labelledBy, 'aria-describedby': describedBy, ...props }, ref,
) {
  const accessibleLabel = viewportProps['aria-label'] ?? label;
  const accessibleLabelledBy = viewportProps['aria-labelledby'] ?? labelledBy;
  return <Primitive.Root {...props} ref={ref} type={type} scrollHideDelay={scrollHideDelay}
    data-rkr-scroll-area='' data-orientation={orientation} className={cn(styles.root, className)}>
    <Primitive.Viewport {...viewportProps} ref={viewportRef} tabIndex={viewportProps.tabIndex ?? 0}
      role={viewportProps.role ?? (accessibleLabel || accessibleLabelledBy ? 'region' : undefined)}
      aria-label={accessibleLabel} aria-labelledby={accessibleLabelledBy}
      aria-describedby={viewportProps['aria-describedby'] ?? describedBy}
      className={cn(styles.viewport, viewportProps.className)}>
      {children}
    </Primitive.Viewport>
    {(['vertical', 'horizontal'] as const).filter((axis) => orientation === 'both' || orientation === axis).map((axis) => (
      <Primitive.Scrollbar key={axis} orientation={axis} className={styles.scrollbar} data-rkr-scrollbar='' aria-hidden='true'>
        <Primitive.Thumb className={styles.thumb} data-rkr-scroll-thumb='' />
      </Primitive.Scrollbar>
    ))}
    <Primitive.Corner className={styles.corner} />
  </Primitive.Root>;
});
