import type { ComponentDoc } from '../types';

export const skeletonDoc: ComponentDoc = {
  "name": "Skeleton",
  "slug": "skeleton",
  "category": "feedback",
  "summary": {
    "en": "A placeholder that reserves space for content while it loads.",
    "ru": "Заглушка, которая сохраняет место для содержимого во время загрузки."
  },
  "usage": "import { Skeleton } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Skeleton shape=\"text\" style={{ width: \"12rem\" }} />\n  );\n}",
  "api": [
    {
      "name": "Skeleton",
      "props": [
        {
          "name": "shape",
          "type": "'rectangle' | 'circle' | 'text'",
          "defaultValue": "'rectangle'",
          "description": {
            "en": "The placeholder shape.",
            "ru": "Форма заглушки."
          },
          "required": false
        },
        {
          "name": "animated",
          "type": "boolean",
          "defaultValue": "true",
          "description": {
            "en": "Enables the loading animation.",
            "ru": "Включает анимацию загрузки."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Hidden from screen readers",
      "ru": "Скрыт от скринридеров"
    }
  ],
  "keyboard": [],
  "source": "Feedback/Skeleton.tsx"
};
