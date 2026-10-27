import type { ComponentDoc } from '../types';

export const avatarDoc: ComponentDoc = {
  "name": "Avatar",
  "slug": "avatar",
  "category": "data",
  "summary": {
    "en": "Displays a profile image, with initials or custom content as a fallback.",
    "ru": "Показывает изображение профиля, инициалы или заданную замену."
  },
  "usage": "import { Avatar } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Avatar src=\"/avatar.jpg\" alt=\"Rikka Inohana\" size=\"lg\" />\n  );\n}",
  "api": [
    {
      "name": "Avatar",
      "props": [
        {
          "name": "alt",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "Text describing the image. Also used to generate initials.",
            "ru": "Описание изображения; также используется для инициалов."
          },
          "required": true
        },
        {
          "name": "src",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "The profile image URL.",
            "ru": "Адрес изображения профиля."
          },
          "required": false
        },
        {
          "name": "fallback",
          "type": "ReactNode",
          "defaultValue": "Initials",
          "description": {
            "en": "Content shown when the image is unavailable.",
            "ru": "Содержимое вместо недоступного изображения."
          },
          "required": false
        },
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg'",
          "defaultValue": "'md'",
          "description": {
            "en": "Controls the component size.",
            "ru": "Задаёт размер компонента."
          },
          "required": false
        },
        {
          "name": "imageProps",
          "type": "img attributes except src/alt/children",
          "defaultValue": "—",
          "description": {
            "en": "Additional HTML attributes for the image.",
            "ru": "Дополнительные HTML-атрибуты изображения."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Provide alternative text in alt",
      "ru": "Задайте альтернативный текст в alt"
    }
  ],
  "keyboard": [],
  "source": "Feedback/Avatar.tsx"
};
