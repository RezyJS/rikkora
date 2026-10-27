import { useRef, useState, type ReactNode } from 'react';
import { DocumentationSearchContext } from '../model/DocumentationSearchContext';

export function DocumentationSearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const sidebarScrollTop = useRef(0);
  return <DocumentationSearchContext.Provider value={{ query, setQuery, sidebarScrollTop }}>
    {children}
  </DocumentationSearchContext.Provider>;
}
