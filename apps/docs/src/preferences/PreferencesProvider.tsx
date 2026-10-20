import { useState, type ReactNode } from 'react';
import { messages, type Language } from '../localization/messages';
import { PreferencesContext, type Theme } from './PreferencesContext';

function persist(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* Preferences still work without storage. */ }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, updateTheme] = useState<Theme>(() =>
    document.documentElement.dataset.rkrTheme === 'violet-smoke' ? 'dark' : 'light',
  );
  const [language, updateLanguage] = useState<Language>(() =>
    document.documentElement.lang === 'ru' ? 'ru' : 'en',
  );
  const setTheme = (value: Theme) => {
    document.documentElement.dataset.rkrTheme = value === 'dark' ? 'violet-smoke' : 'violet-smoke-light';
    document.documentElement.style.colorScheme = value;
    persist('rikkora.theme', value);
    updateTheme(value);
  };
  const setLanguage = (value: Language) => {
    document.documentElement.lang = value;
    persist('rikkora.language', value);
    updateLanguage(value);
  };
  return (
    <PreferencesContext.Provider value={{ theme, language, setTheme, setLanguage, t: messages[language] }}>
      {children}
    </PreferencesContext.Provider>
  );
}
