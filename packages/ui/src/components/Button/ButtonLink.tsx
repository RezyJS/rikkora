import { forwardRef, type ElementType, type ReactElement } from 'react';
import { Link, type LinkProps } from '../Link/Link';
import type { ButtonVisualProps } from './Button.types';
import { cn } from '../../lib/cn';
import { ButtonContent } from './ButtonContent';
import { useButtonRipple } from './useButtonRipple';
import styles from './Button.module.css';

export type ButtonLinkProps<T extends ElementType = 'a'> =
  Omit<LinkProps<T>, keyof ButtonVisualProps> & ButtonVisualProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = 'primary', size = 'md', radius = 'sm', tone = 'primary', startContent, endContent,
    fullWidth, compact, disableAnimation, ripple, textSize, fontWeight, italic, underline, strikethrough, textTransform,
    className, children, onPointerDown, onClick, ...props }, ref,
) {
  const ink = useButtonRipple<HTMLAnchorElement>(Boolean(ripple && !disableAnimation));
  return (
    <Link
      {...props}
      ref={ref}
      data-radius={radius}
      data-tone={tone}
      data-animation={disableAnimation ? 'none' : undefined}
      data-text-size={textSize}
      data-font-weight={fontWeight}
      data-italic={italic || undefined}
      data-underline={underline || undefined}
      data-strikethrough={strikethrough || undefined}
      data-text-transform={textTransform}
      onPointerDown={(event) => { onPointerDown?.(event); ink.onPointerDown(event); }}
      onClick={(event) => { onClick?.(event); ink.onClick(event); }}
      className={cn(styles.button, styles[size], styles[variant], fullWidth && styles.fullWidth, compact && styles.compact, ripple && styles.withRipple, className)}
    >
      <ButtonContent startContent={startContent} endContent={endContent}>{children}</ButtonContent>
      {ink.content}
    </Link>
  );
}) as <T extends ElementType = 'a'>(props: ButtonLinkProps<T>) => ReactElement | null;
