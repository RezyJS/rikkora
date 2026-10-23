import { forwardRef } from 'react';
import { Flex } from '../Flex';
import type { FlexProps } from '../Flex/Flex.types';

/** A vertical Flex with a default spacing token; all Flex props remain available. */
export type StackProps = FlexProps;

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { direction = 'column', gap = 4, ...props }, ref,
) {
  return <Flex {...props} direction={direction} gap={gap} ref={ref} />;
});
