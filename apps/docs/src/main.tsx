import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@rikkora/ui/styles.css';
import '@fontsource-variable/onest';
import './app/styles/index.css';
import { App, PreferencesProvider } from './app';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PreferencesProvider>
        <App />
      </PreferencesProvider>
    </BrowserRouter>
  </StrictMode>,
);
