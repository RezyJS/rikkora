import {
  forwardRef,
  type CSSProperties,
  type ElementType,
  type ReactElement,
} from 'react';

import type {
  GridAlign,
  GridElement,
  GridGap,
  GridJustify,
  GridProps,
  GridTrack,
} from './Grid.types';

const alignMap: Record<GridAlign, CSSProperties['alignItems']> = {
  start: 'start',
  center: 'center',
  end: 'end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap: Record<GridJustify, CSSProperties['justifyItems']> = {
  start: 'start',
  center: 'center',
  end: 'end',
  stretch: 'stretch',
};

function resolveGap(gap: GridGap): string {
  if (typeof gap === 'string') {
    return gap;
  }

  const token = String(gap).replace('.', '-');
  const fallback = `${gap / 4}rem`;

  return `var(--rkr-spacing-${token}, ${fallback})`;
}

function resolveTrack(value: GridTrack): string {
  if (typeof value === 'string') {
    return value;
  }

  return `repeat(${value}, minmax(0, 1fr))`;
}

type GridComponent = <T extends GridElement = 'div'>(
  props: GridProps<T>,
) => ReactElement | null;

const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      as,
      columns,
      rows,
      gap,
      rowGap,
      columnGap,
      align,
      justify,
      style,
      children,
      ...rest
    },
    ref,
  ) => {
    const Component = (as ?? 'div') as ElementType;

    const computedStyle: CSSProperties = {
      ...style,

      display: 'grid',

      ...(columns !== undefined && {
        gridTemplateColumns: resolveTrack(columns),
      }),

      ...(rows !== undefined && {
        gridTemplateRows: resolveTrack(rows),
      }),

      ...(gap !== undefined && {
        gap: resolveGap(gap),
      }),

      ...(rowGap !== undefined && {
        rowGap: resolveGap(rowGap),
      }),

      ...(columnGap !== undefined && {
        columnGap: resolveGap(columnGap),
      }),

      ...(align !== undefined && {
        alignItems: alignMap[align],
      }),

      ...(justify !== undefined && {
        justifyItems: justifyMap[justify],
      }),
    };

    return (
      <Component
        {...rest}
        ref={ref}
        style={computedStyle}
      >
        {children}
      </Component>
    );
  },
) as GridComponent;

export default Grid;
