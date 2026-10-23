import type { ApiProp, KeyboardEntry, Localized } from './types';

export const localized = (en: string, ru: string): Localized => ({ en, ru });

export const prop = (
  name: string,
  type: string,
  defaultValue: string,
  en: string,
  ru: string,
  required = false,
): ApiProp => ({
  name,
  type,
  defaultValue,
  description: localized(en, ru),
  required,
});

export const key = (keys: string, en: string, ru: string): KeyboardEntry => ({
  keys,
  description: localized(en, ru),
});
