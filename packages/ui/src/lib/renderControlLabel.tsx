import { Children, type ReactNode } from 'react';

/** Correct the font's optical baseline for plain labels while preserving composed content. */
export function renderControlLabel(children: ReactNode, className: string) {
  return Children.map(children, (child) =>
    typeof child === 'number' || (typeof child === 'string' && child.trim())
      ? <span className={className}>{child}</span>
      : child,
  );
}
