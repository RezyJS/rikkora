import { createContext, useContext, type RefObject } from 'react';

export const DocumentationSearchContext = createContext<{
  query: string;
  setQuery: (query: string) => void;
  sidebarScrollTop: RefObject<number>;
} | null>(null);

export function useDocumentationSearch() {
  const context = useContext(DocumentationSearchContext);
  if (!context) throw new Error('DocumentationSearchProvider is required');
  return context;
}
