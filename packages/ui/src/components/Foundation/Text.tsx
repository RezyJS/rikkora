import { createElement, forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Foundation.module.css';
import type { TextSize } from './Foundation.types';

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
