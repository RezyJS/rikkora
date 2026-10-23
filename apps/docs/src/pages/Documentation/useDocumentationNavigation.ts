import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router';

export function useDocumentationNavigation() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const content = useRef<HTMLElement>(null);
  useEffect(() => {
    if (location.hash)
      document.getElementById(location.hash.slice(1))?.scrollIntoView({
        behavior:
          (
            navigationType === 'POP' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ) ?
            'instant'
          : 'smooth',
        block: 'start',
      });
    else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      content.current?.querySelector('h1')?.focus({ preventScroll: true });
    }
  }, [location.pathname, location.hash, location.key, navigationType]);
  return { location, content };
}
