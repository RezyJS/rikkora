import { createContext, forwardRef, useContext, useImperativeHandle, useLayoutEffect, useRef, type ReactNode } from 'react';

const OriginContext = createContext<React.RefObject<HTMLSpanElement | null> | null>(null);
const LayerContext = createContext(0);

/** The marker records the source theme without coupling the library to the docs provider. */
export function OverlayScope({ children }: { children: ReactNode }) {
  const origin = useRef<HTMLSpanElement>(null);
  const layer = useContext(LayerContext) + 1;
  return <LayerContext.Provider value={layer}><OriginContext.Provider value={origin}>
    <span ref={origin} hidden aria-hidden='true' />{children}
  </OriginContext.Provider></LayerContext.Provider>;
}

/** Body portals retain scoped tokens, language, direction and live theme changes. */
export const PortalAppearance = forwardRef<HTMLDivElement, { children: ReactNode }>(function PortalAppearance({ children }, forwardedRef) {
  const origin = useContext(OriginContext);
  const layer = useContext(LayerContext);
  const surface = useRef<HTMLDivElement>(null);
  useImperativeHandle(forwardedRef, () => surface.current!, []);
  useLayoutEffect(() => {
    const source = origin?.current;
    const target = surface.current;
    if (!source || !target) return;
    let copied: string[] = [];
    const sync = () => {
      const computed = getComputedStyle(source);
      copied.forEach((key) => target.style.removeProperty(key));
      copied = Array.from(computed).filter((key) => key.startsWith('--rkr-'));
      copied.forEach((key) => target.style.setProperty(key, computed.getPropertyValue(key)));
      target.style.setProperty('--rkr-overlay-layer', String(layer));
      target.style.colorScheme = computed.colorScheme;
      target.dir = computed.direction;
      target.lang = source.closest('[lang]')?.getAttribute('lang') ?? '';
      const theme = source.closest('[data-rkr-theme]')?.getAttribute('data-rkr-theme');
      if (theme) target.setAttribute('data-rkr-theme', theme);
      else target.removeAttribute('data-rkr-theme');
    };
    sync();
    const observer = new MutationObserver(sync);
    for (let element: HTMLElement | null = source; element; element = element.parentElement) {
      observer.observe(element, { attributes: true, attributeFilter: ['data-rkr-theme', 'style', 'class', 'dir', 'lang'] });
    }
    return () => observer.disconnect();
  }, [origin, layer]);
  return <div ref={surface} style={{ display: 'contents' }}>{children}</div>;
});
