import { forwardRef, type CSSProperties, type ReactElement } from 'react';

import type {
  FlexAlign,
  FlexElement,
  FlexGap,
  FlexJustify,
  FlexProps,
} from './Flex.types';

const alignMap: Record<FlexAlign, CSSProperties['alignItems']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap: Record<FlexJustify, CSSProperties['justifyContent']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

function resolveGap(gap: FlexGap): string {
  if (typeof gap === 'string') {
    const value = gap.trim();

    if (/^-?\d*\.?\d+$/.test(value)) {
      return `${value}px`;
    }

    return value;
  }

  const token = String(gap).replace('.', '-');

  return `var(--rkr-spacing-${token}, ${gap / 4}rem)`;
}

type FlexComponent = <T extends FlexElement = 'div'>(
  props: FlexProps<T>,
) => ReactElement | null;

const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    { as, direction, align, justify, wrap, gap, style, children, ...rest },
    ref,
  ) => {
    const Component = (as ?? 'div') as React.ElementType;

    const computedStyle: CSSProperties = {
      ...style,

      display: 'flex',

      ...(direction !== undefined && {
        flexDirection: direction,
      }),

      ...(align !== undefined && {
        alignItems: alignMap[align],
      }),

      ...(justify !== undefined && {
        justifyContent: justifyMap[justify],
      }),

      ...(wrap !== undefined && {
        flexWrap: wrap ? 'wrap' : 'nowrap',
      }),

      ...(gap !== undefined && {
        gap: resolveGap(gap),
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
) as FlexComponent;

export default Flex;
