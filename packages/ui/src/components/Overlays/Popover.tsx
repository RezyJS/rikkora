import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as Primitive from '@radix-ui/react-popover';
import { cn } from '../../lib/cn';
import { OverlayScope, PortalAppearance } from './PortalAppearance';
import styles from './Overlays.module.css';

export type PopoverProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export interface PopoverContentProps extends ComponentPropsWithoutRef<typeof Primitive.Content> { container?: HTMLElement | null }
export type PopoverTriggerProps = ComponentPropsWithoutRef<typeof Primitive.Trigger>;
export type PopoverAnchorProps = ComponentPropsWithoutRef<typeof Primitive.Anchor>;
export type PopoverCloseProps = ComponentPropsWithoutRef<typeof Primitive.Close>;
function Root(props: PopoverProps) {
  return <OverlayScope><Primitive.Root {...props} /></OverlayScope>;
}
const Content = forwardRef<HTMLDivElement, PopoverContentProps>(function PopoverContent(
  { container, className, sideOffset = 8, forceMount, ...props }, ref,
) {
  return <Primitive.Portal container={container} forceMount={forceMount}><PortalAppearance>
    <Primitive.Content {...props} ref={ref} sideOffset={sideOffset} className={cn(styles.popover, className)} />
  </PortalAppearance></Primitive.Portal>;
});
export const Popover = { Root, Trigger: Primitive.Trigger, Anchor: Primitive.Anchor, Content, Close: Primitive.Close };
