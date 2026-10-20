import type { ComponentPropsWithRef, JSX } from 'react';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export type FlexJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export type FlexGap = number | string;

export type FlexElement = Extract<
  keyof HTMLElementTagNameMap,
  keyof JSX.IntrinsicElements
>;

export interface FlexOwnProps {
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: boolean;
  gap?: FlexGap;
}

export type FlexProps<T extends FlexElement = 'div'> = FlexOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithRef<T>, keyof FlexOwnProps | 'as'>;
