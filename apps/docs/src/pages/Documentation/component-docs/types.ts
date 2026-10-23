import type { ComponentName } from '../../../components/Showcase/componentNames';
import type { Language } from '../../../localization/messages';

export type Localized = Record<Language, string>;

export interface ApiProp {
  name: string;
  type: string;
  defaultValue: string;
  description: Localized;
  required?: boolean;
}

export interface ApiPart {
  name: string;
  props: ApiProp[];
}

export interface KeyboardEntry {
  keys: string;
  description: Localized;
}

export interface ComponentDoc {
  name: ComponentName;
  slug: string;
  category: string;
  summary: Localized;
  usage: string;
  api: ApiPart[];
  accessibility: Localized[];
  keyboard: KeyboardEntry[];
  source: string;
}
