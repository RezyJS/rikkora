import type { ComponentDoc } from '../types';

export const separatorDoc: ComponentDoc = {
  "name": "Separator",
  "slug": "separator",
  "category": "foundation",
  "summary": {
    "en": "Separates content with a horizontal or vertical line.",
    "ru": "Разделяет содержимое горизонтальной или вертикальной линией."
  },
  "usage": "import { Separator } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Separator orientation=\"horizontal\" />\n  );\n}",
  "api": [
    {
      "name": "Separator",
      "props": [
        {
          "name": "orientation",
          "type": "'horizontal' | 'vertical'",
          "defaultValue": "'horizontal'",
          "description": {
            "en": "The horizontal or vertical orientation.",
            "ru": "Горизонтальное или вертикальное расположение."
          },
          "required": false
        },
        {
          "name": "decorative",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Hides a decorative separator from screen readers.",
            "ru": "Скрывает декоративный разделитель от скринридеров."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Decorative lines use decorative",
      "ru": "Для декоративных линий задайте decorative"
    }
  ],
  "keyboard": [],
  "source": "Foundation/Separator.tsx"
};
