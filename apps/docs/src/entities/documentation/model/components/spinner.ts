import type { ComponentDoc } from '../types';

export const spinnerDoc: ComponentDoc = {
  "name": "Spinner",
  "slug": "spinner",
  "category": "feedback",
  "summary": {
    "en": "An animated indicator for an operation in progress.",
    "ru": "Анимированный индикатор выполнения операции."
  },
  "usage": "import { Spinner } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <span role=\"status\"><Spinner /> Loading…</span>\n  );\n}",
  "api": [
    {
      "name": "Spinner",
      "props": [
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg'",
          "defaultValue": "'md'",
          "description": {
            "en": "Controls the component size.",
            "ru": "Задаёт размер компонента."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Spinner is decorative by default. Add loading text to the surrounding status region.",
      "ru": "Spinner по умолчанию декоративен. Добавьте текст о загрузке в окружающую область status."
    }
  ],
  "keyboard": [],
  "source": "Feedback/Spinner.tsx"
};
