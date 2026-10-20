import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@rikkora/ui/styles.css';
import '@fontsource-variable/onest';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
