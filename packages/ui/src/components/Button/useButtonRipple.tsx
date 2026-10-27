import { useState, type MouseEvent, type PointerEvent } from 'react';
import styles from './Button.module.css';

export function useButtonRipple<T extends HTMLElement>(enabled: boolean) {
  const [ripple, setRipple] = useState<{ x: number; y: number; size: number; id: number } | null>(null);
  function show(target: T, x?: number, y?: number) {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = target.getBoundingClientRect();
    setRipple(current => ({
      x: x === undefined ? bounds.width / 2 : x - bounds.left,
      y: y === undefined ? bounds.height / 2 : y - bounds.top,
      size: Math.hypot(bounds.width, bounds.height) * 2,
      id: (current?.id ?? 0) + 1,
    }));
  }
  return {
    onPointerDown: (event: PointerEvent<T>) => {
      if (event.button === 0 && !event.defaultPrevented) show(event.currentTarget, event.clientX, event.clientY);
    },
    onClick: (event: MouseEvent<T>) => {
      if (event.detail === 0 && !event.defaultPrevented) show(event.currentTarget);
    },
    content: enabled && ripple && <span key={ripple.id} aria-hidden='true' className={styles.ripple}
      style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
      onAnimationEnd={() => setRipple(null)} />,
  };
}
