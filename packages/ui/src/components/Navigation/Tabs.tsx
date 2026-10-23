import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
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
