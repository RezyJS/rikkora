import { Suspense } from 'react';
import { ToastProvider } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationSearchProvider } from '@/features/documentation-search';
import { AppRouter } from '../router/AppRouter';
import { AppFallback } from './AppFallback';

export default function App() {
  const { language } = usePreferences();
  return (
    <ToastProvider
      closeLabel={language === 'ru' ? 'Закрыть уведомление' : 'Dismiss notification'}
      viewportLabel={language === 'ru' ? 'Уведомления' : 'Notifications'}
    >
      <DocumentationSearchProvider>
        <Suspense fallback={<AppFallback />}><AppRouter /></Suspense>
      </DocumentationSearchProvider>
    </ToastProvider>
  );
}
