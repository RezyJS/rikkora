import type { ComponentPropsWithRef, JSX } from 'react';

export type GridElement = Extract<
  keyof HTMLElementTagNameMap,
  keyof JSX.IntrinsicElements
>;

export type GridTrack = number | string;
export type GridGap = number | string;

export type GridAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export type GridJustify = 'start' | 'center' | 'end' | 'stretch';

export interface GridOwnProps {
  columns?: GridTrack;
  rows?: GridTrack;

  gap?: GridGap;
  rowGap?: GridGap;
  columnGap?: GridGap;

  align?: GridAlign;
  justify?: GridJustify;
}

export type GridProps<T extends GridElement = 'div'> = GridOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithRef<T>, keyof GridOwnProps | 'as'>;
