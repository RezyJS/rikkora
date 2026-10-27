import type { ComponentDoc } from '../types';

export const stackDoc: ComponentDoc = {
  "name": "Stack",
  "slug": "stack",
  "category": "layout",
  "summary": {
    "en": "Arranges elements vertically with spacing between them.",
    "ru": "Располагает элементы друг под другом с заданным расстоянием между ними."
  },
  "usage": "import { Stack, Text } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Stack gap={3}><Text>First</Text><Text>Second</Text></Stack>\n  );\n}",
  "api": [
    {
      "name": "Stack",
      "props": [
        {
          "name": "direction",
          "type": "'row' | 'column' | 'row-reverse' | 'column-reverse'",
          "defaultValue": "'column'",
          "description": {
            "en": "The axis and order of items.",
            "ru": "Направление и порядок элементов."
          },
          "required": false
        },
        {
          "name": "gap",
          "type": "number | string",
          "defaultValue": "4",
          "description": {
            "en": "The spacing between items.",
            "ru": "Расстояние между элементами."
          },
          "required": false
        },
        {
          "name": "align / justify / wrap",
          "type": "Flex layout props",
          "defaultValue": "CSS default",
          "description": {
            "en": "Item alignment and wrapping.",
            "ru": "Выравнивание и перенос элементов."
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
  "source": "Foundation/Stack.tsx"
};
