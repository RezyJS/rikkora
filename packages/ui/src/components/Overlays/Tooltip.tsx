import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as Primitive from '@radix-ui/react-tooltip';
import { cn } from '../../lib/cn';
import { OverlayScope, PortalAppearance } from './PortalAppearance';
import styles from './Overlays.module.css';

export type TooltipProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export type TooltipProviderProps = ComponentPropsWithoutRef<typeof Primitive.Provider>;
export type TooltipTriggerProps = ComponentPropsWithoutRef<typeof Primitive.Trigger>;
export interface TooltipContentProps extends ComponentPropsWithoutRef<typeof Primitive.Content> { container?: HTMLElement | null }
function Root(props: TooltipProps) {
  return <OverlayScope><Primitive.Root {...props} /></OverlayScope>;
}
const Content = forwardRef<HTMLDivElement, TooltipContentProps>(function TooltipContent(
  { container, className, sideOffset = 8, forceMount, ...props }, ref,
) {
  return <Primitive.Portal container={container} forceMount={forceMount}><PortalAppearance>
    <Primitive.Content {...props} ref={ref} sideOffset={sideOffset} className={cn(styles.tooltip, className)} />
  </PortalAppearance></Primitive.Portal>;
});
/** Wrap related tooltips in Tooltip.Provider to share hover delays. */
export const Tooltip = { Provider: Primitive.Provider, Root, Trigger: Primitive.Trigger, Content };
