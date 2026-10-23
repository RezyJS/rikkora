import { createElement, forwardRef, type ReactElement } from 'react';
import type { BoxElement, BoxProps } from './Foundation.types';

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { as: Tag = 'div', padding, paddingX, paddingY, style, ...props }, ref,
) {
  return createElement(Tag, { ...props, ref, style: {
    ...(padding !== undefined && { padding: `var(--rkr-spacing-${padding})` }),
    ...(paddingX !== undefined && { paddingInline: `var(--rkr-spacing-${paddingX})` }),
    ...(paddingY !== undefined && { paddingBlock: `var(--rkr-spacing-${paddingY})` }),
    ...style,
  } });
}) as <T extends BoxElement = 'div'>(props: BoxProps<T>) => ReactElement | null;
