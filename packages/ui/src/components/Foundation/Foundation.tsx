import { createElement, forwardRef, type HTMLAttributes, type ComponentPropsWithRef, type ReactElement } from 'react';
import { cn } from '../../lib/cn';
import { Flex } from '../Flex';
import type { FlexProps } from '../Flex/Flex.types';
import styles from './Foundation.module.css';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Tone = 'neutral' | 'primary' | 'danger';
export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'span' | 'p' | 'div' | 'small' | 'strong' | 'em';
  size?: TextSize;
  tone?: 'primary' | 'secondary' | 'tertiary';
}
export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { as: Tag = 'span', size = 'md', tone = 'primary', className, ...props }, ref,
) {
  return createElement(Tag, { ...props, ref, 'data-size': size, 'data-tone': tone, className: cn(styles.text, className) });
});

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: TextSize | '2xl' | '3xl' | '4xl';
}
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level = 2, size = '2xl', className, ...props }, ref,
) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <Tag {...props} ref={ref} data-size={size} className={cn(styles.heading, className)} />;
});

export type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
export type BoxElement = keyof HTMLElementTagNameMap;
export type BoxProps<T extends BoxElement = 'div'> = {
  as?: T;
  padding?: Space;
} & Omit<ComponentPropsWithRef<T>, 'as' | 'padding'>;
export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { as: Tag = 'div', padding, style, ...props }, ref,
) {
  return createElement(Tag, { ...props, ref, style: {
    ...(padding !== undefined && { padding: `var(--rkr-spacing-${padding})` }), ...style,
  } });
}) as <T extends BoxElement = 'div'>(props: BoxProps<T>) => ReactElement | null;

/** A vertical Flex with a default spacing token; all Flex props remain available. */
export type StackProps = FlexProps;
export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { direction = 'column', gap = 4, ...props }, ref,
) {
  return <Flex {...props} direction={direction} gap={gap} ref={ref} />;
});

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(function Separator(
  { orientation = 'horizontal', decorative = false, className, ...props }, ref,
) {
  return <div {...props} ref={ref} role={decorative ? 'none' : 'separator'}
    aria-orientation={decorative ? undefined : orientation} data-orientation={orientation}
    className={cn(styles.separator, className)} />;
});

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { variant?: Tone }
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'neutral', className, ...props }, ref,
) {
  return <span {...props} ref={ref} data-variant={variant} className={cn(styles.badge, className)} />;
});

export interface CardProps extends BoxProps { variant?: 'outline' | 'filled' }
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { padding = 6, variant = 'outline', className, ...props }, ref,
) {
  return <Box {...props} ref={ref} padding={padding} data-variant={variant} className={cn(styles.card, className)} />;
});
