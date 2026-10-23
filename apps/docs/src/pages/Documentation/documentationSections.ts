import { localized } from './component-docs/builders';
import type { Localized } from './component-docs/types';

export interface DocumentationSection {
  id: string;
  label: Localized;
}

export const componentSections = [
  { id: 'usage', label: localized('Usage', 'Использование') },
  { id: 'examples', label: localized('Props', 'Свойства') },
  { id: 'accessibility', label: localized('Accessibility', 'Доступность') },
  { id: 'api', label: localized('API', 'API') },
];

export const overviewSections = [
  { id: 'setup', label: localized('Setup', 'Подключение') },
  { id: 'themes', label: localized('Themes and styling', 'Темы и стилизация') },
  { id: 'conventions', label: localized('API conventions', 'Соглашения API') },
  { id: 'components', label: localized('Components', 'Компоненты') },
];
