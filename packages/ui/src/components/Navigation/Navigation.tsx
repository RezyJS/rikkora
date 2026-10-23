import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '../../lib/cn';
import styles from './Navigation.module.css';

export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;
export type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List>;
export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(function TabsRoot({ className, ...props }, ref) {
  return <TabsPrimitive.Root {...props} ref={ref} className={cn(styles.tabs, className)} />;
});
const TabsList = forwardRef<HTMLDivElement, TabsListProps>(function TabsList({ className, ...props }, ref) {
  return <TabsPrimitive.List {...props} ref={ref} className={cn(styles.tabList, className)} />;
});
const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger({ className, ...props }, ref) {
  return <TabsPrimitive.Trigger {...props} ref={ref} className={cn(styles.tabTrigger, className)} />;
});
const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent({ className, ...props }, ref) {
  return <TabsPrimitive.Content {...props} ref={ref} className={cn(styles.tabContent, className)} />;
});
export const Tabs = { Root: TabsRoot, List: TabsList, Trigger: TabsTrigger, Content: TabsContent };

export type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;
export type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;
export type AccordionContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;
export type AccordionHeaderProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>;
const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(function AccordionRoot({ className, ...props }, ref) {
  return <AccordionPrimitive.Root {...props} ref={ref} className={cn(styles.accordion, className)} />;
});
const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem({ className, ...props }, ref) {
  return <AccordionPrimitive.Item {...props} ref={ref} className={cn(styles.accordionItem, className)} />;
});
const AccordionHeader = forwardRef<HTMLHeadingElement, AccordionHeaderProps>(function AccordionHeader({ className, ...props }, ref) {
  return <AccordionPrimitive.Header {...props} ref={ref} className={cn(styles.accordionHeader, className)} />;
});
const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(function AccordionTrigger({ className, children, ...props }, ref) {
  return <AccordionPrimitive.Trigger {...props} ref={ref} className={cn(styles.accordionTrigger, className)}>
    {children}<IconChevronDown className={styles.chevron} size='var(--rkr-spacing-4)' stroke={2} aria-hidden='true' focusable='false' />
  </AccordionPrimitive.Trigger>;
});
const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(function AccordionContent({ className, ...props }, ref) {
  return <AccordionPrimitive.Content {...props} ref={ref} className={cn(styles.accordionContent, className)} />;
});
export const Accordion = { Root: AccordionRoot, Item: AccordionItem, Header: AccordionHeader, Trigger: AccordionTrigger, Content: AccordionContent };
