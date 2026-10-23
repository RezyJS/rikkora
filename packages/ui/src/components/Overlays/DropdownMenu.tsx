import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import { cn } from '../../lib/cn';
import { OverlayScope, PortalAppearance } from './PortalAppearance';
import styles from './Overlays.module.css';

export type DropdownMenuProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export type DropdownMenuTriggerProps = ComponentPropsWithoutRef<typeof Primitive.Trigger>;
export type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof Primitive.Item>;
export type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof Primitive.Label>;
export type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof Primitive.Separator>;
export interface DropdownMenuContentProps extends ComponentPropsWithoutRef<typeof Primitive.Content> { container?: HTMLElement | null }
function Root(props: DropdownMenuProps) {
  return <OverlayScope><Primitive.Root {...props} /></OverlayScope>;
}
const Content = forwardRef<HTMLDivElement, DropdownMenuContentProps>(function DropdownMenuContent(
  { container, className, sideOffset = 8, forceMount, ...props }, ref,
) {
  return <Primitive.Portal container={container} forceMount={forceMount}><PortalAppearance>
    <Primitive.Content {...props} ref={ref} sideOffset={sideOffset} className={cn(styles.menu, className)} />
  </PortalAppearance></Primitive.Portal>;
});
const Item = forwardRef<HTMLDivElement, DropdownMenuItemProps>(function DropdownMenuItem({ className, ...props }, ref) {
  return <Primitive.Item {...props} ref={ref} className={cn(styles.menuItem, className)} />;
});
const Label = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(function DropdownMenuLabel({ className, ...props }, ref) {
  return <Primitive.Label {...props} ref={ref} className={cn(styles.menuLabel, className)} />;
});
const Separator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(function DropdownMenuSeparator({ className, ...props }, ref) {
  return <Primitive.Separator {...props} ref={ref} className={cn(styles.menuSeparator, className)} />;
});
export const DropdownMenu = { Root, Trigger: Primitive.Trigger, Content, Item, Label, Separator };
