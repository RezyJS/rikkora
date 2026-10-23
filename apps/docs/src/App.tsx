import { Home } from './pages/Home/Home';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Flex, Spinner, Text, ToastProvider } from '@rikkora/ui';
import { SiteHeader } from './components/SiteHeader/SiteHeader';
import { usePreferences } from './preferences/PreferencesContext';

const Documentation = lazy(() => import('./pages/Documentation/Documentation').then((module) => ({ default: module.Documentation })));

export default function App() {
  const { language } = usePreferences();
  return <ToastProvider closeLabel={language === 'ru' ? 'Закрыть уведомление' : 'Dismiss notification'}
    viewportLabel={language === 'ru' ? 'Уведомления' : 'Notifications'}><Suspense fallback={<><SiteHeader /><Flex as='main' align='center' justify='center' gap={3} style={{ padding: 'var(--rkr-spacing-12)' }}>
    <Spinner /><Text role='status'>{language === 'ru' ? 'Загрузка документации…' : 'Loading documentation…'}</Text>
  </Flex></>}><Routes>
    <Route path='/' element={<Home />} />
    <Route path='/docs' element={<Documentation />} />
    <Route path='/docs/about' element={<Documentation intro='about' />} />
    <Route path='/docs/recipes' element={<Documentation intro='recipes' />} />
    <Route path='/docs/components' element={<Navigate to='/docs/components/button' replace />} />
    <Route path='/docs/components/:slug' element={<Documentation />} />
    <Route path='/docs/*' element={<Documentation notFound />} />
    <Route path='*' element={<Home />} />
  </Routes></Suspense></ToastProvider>;
}
