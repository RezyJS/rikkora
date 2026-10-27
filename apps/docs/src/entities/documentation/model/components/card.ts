import type { ComponentDoc } from '../types';

export const cardDoc: ComponentDoc = {
  "name": "Card",
  "slug": "card",
  "category": "foundation",
  "summary": {
    "en": "Groups related content in a container with a border or background.",
    "ru": "Объединяет связанное содержимое в контейнере с границей или фоном."
  },
  "usage": "import { Card, Text } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Card variant=\"filled\" padding={6}><Text>Content</Text></Card>\n  );\n}",
  "api": [
    {
      "name": "Card",
      "props": [
        {
          "name": "variant",
          "type": "'outline' | 'filled'",
          "defaultValue": "'outline'",
          "description": {
            "en": "Changes the visual appearance of the component.",
            "ru": "Задаёт вариант оформления компонента."
          },
          "required": false
        },
        {
          "name": "padding",
          "type": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
          "defaultValue": "6",
          "description": {
            "en": "Sets inner spacing using a spacing token.",
            "ru": "Задаёт внутренний отступ через токен."
          },
          "required": false
        },
        {
          "name": "paddingX",
          "type": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
          "defaultValue": "padding",
          "description": {
            "en": "Sets horizontal padding independently of padding.",
            "ru": "Задаёт отступ по горизонтали независимо от padding."
          },
          "required": false
        },
        {
          "name": "paddingY",
          "type": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
          "defaultValue": "padding",
          "description": {
            "en": "Sets vertical padding independently of padding.",
            "ru": "Задаёт отступ по вертикали независимо от padding."
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
  "source": "Foundation/Card.tsx"
};
