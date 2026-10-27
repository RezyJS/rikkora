import type { ComponentDoc } from '../types';

export const textDoc: ComponentDoc = {
  "name": "Text",
  "slug": "text",
  "category": "foundation",
  "summary": {
    "en": "Displays text with configurable size and color.",
    "ru": "Выводит текст с настройками размера и цвета."
  },
  "usage": "import { Text } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Text as=\"p\" size=\"lg\" tone=\"secondary\">Rikkora UI</Text>\n  );\n}",
  "api": [
    {
      "name": "Text",
      "props": [
        {
          "name": "as",
          "type": "'span' | 'p' | 'div' | 'small' | 'strong' | 'em'",
          "defaultValue": "'span'",
          "description": {
            "en": "The HTML element or component to render.",
            "ru": "HTML-элемент или компонент для отображения."
          },
          "required": false
        },
        {
          "name": "size",
          "type": "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          "defaultValue": "'md'",
          "description": {
            "en": "Controls the component size.",
            "ru": "Задаёт размер компонента."
          },
          "required": false
        },
        {
          "name": "tone",
          "type": "'primary' | 'secondary' | 'tertiary'",
          "defaultValue": "'primary'",
          "description": {
            "en": "Changes the text color.",
            "ru": "Задаёт цвет текста."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Native HTML semantics",
      "ru": "Нативная HTML-семантика"
    }
  ],
  "keyboard": [],
  "source": "Foundation/Text.tsx"
};
