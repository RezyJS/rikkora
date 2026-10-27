import type { ComponentDoc } from '../types';

export const boxDoc: ComponentDoc = {
  "name": "Box",
  "slug": "box",
  "category": "layout",
  "summary": {
    "en": "A container with configurable padding and a choice of HTML element.",
    "ru": "Контейнер с настройкой внутренних отступов и выбором HTML-элемента."
  },
  "usage": "import { Box } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Box padding={6}>Content</Box>\n  );\n}",
  "api": [
    {
      "name": "Box",
      "props": [
        {
          "name": "as",
          "type": "HTML element name",
          "defaultValue": "'div'",
          "description": {
            "en": "The HTML element or component to render.",
            "ru": "HTML-элемент или компонент для отображения."
          },
          "required": false
        },
        {
          "name": "padding",
          "type": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
          "defaultValue": "CSS default",
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
  "source": "Foundation/Box.tsx"
};
