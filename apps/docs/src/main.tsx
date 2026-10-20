import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@rikkora/ui/styles.css';
import '@fontsource-variable/onest';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { PreferencesProvider } from './preferences/PreferencesProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PreferencesProvider>
        <App />
      </PreferencesProvider>
    </BrowserRouter>
  </StrictMode>,
);
