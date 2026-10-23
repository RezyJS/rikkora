import { type ComponentPropsWithRef } from 'react';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Tone = 'neutral' | 'primary' | 'danger';

export type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;

export type BoxElement = keyof HTMLElementTagNameMap;

export type BoxProps<T extends BoxElement = 'div'> = {
  as?: T;
  padding?: Space;
  paddingX?: Space;
  paddingY?: Space;
} & Omit<ComponentPropsWithRef<T>, 'as' | 'padding' | 'paddingX' | 'paddingY'>;
