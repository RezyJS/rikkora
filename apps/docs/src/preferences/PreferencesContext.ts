import { createContext, useContext } from 'react';
import type { Language, Messages } from '../localization/messages';

export type Theme = 'light' | 'dark';
export const PreferencesContext = createContext<{
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  t: Messages;
} | null>(null);

export function usePreferences() {
  const preferences = useContext(PreferencesContext);
  if (!preferences) throw new Error('PreferencesProvider is missing');
  return preferences;
}
