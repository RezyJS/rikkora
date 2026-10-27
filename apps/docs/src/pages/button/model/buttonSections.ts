import { localized, type DocumentationSection } from '@/entities/documentation';

export const buttonSections: DocumentationSection[] = [
  { id: 'usage', label: localized('Usage', 'Использование') },
  { id: 'appearance', label: localized('Appearance', 'Оформление') },
  { id: 'layout', label: localized('Button sizes', 'Размеры кнопки') },
  { id: 'typography', label: localized('Text and content', 'Текст и содержимое') },
  { id: 'behavior', label: localized('States and behavior', 'Состояния и поведение') },
  { id: 'accessibility', label: localized('Accessibility', 'Доступность') },
  { id: 'api', label: localized('Props reference', 'Справочник пропсов') },
];

export const buttonPropGroups = [
  { title: localized('Appearance', 'Оформление'), names: ['variant', 'tone'] },
  { title: localized('Sizes and padding', 'Размеры и отступы'), names: ['size', 'radius', 'compact', 'fullWidth'] },
  { title: localized('Text and content', 'Текст и содержимое'), names: ['textSize', 'fontWeight', 'italic', 'underline', 'strikethrough', 'textTransform', 'startContent', 'endContent'] },
  { title: localized('States', 'Состояния'), names: ['disabled', 'pressed', 'loading', 'loadingText', 'loadingPlacement'] },
  { title: localized('Motion', 'Анимации'), names: ['ripple', 'disableAnimation'] },
  { title: localized('HTML and composition', 'HTML и композиция'), names: ['type', 'asChild', 'aria-label'] },
];
