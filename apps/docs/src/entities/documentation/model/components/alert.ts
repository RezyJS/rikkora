import type { ComponentDoc } from '../types';

export const alertDoc: ComponentDoc = {
  "name": "Alert",
  "slug": "alert",
  "category": "feedback",
  "summary": {
    "en": "Displays a message inside the page, with an optional title.",
    "ru": "Выводит сообщение внутри страницы с необязательным заголовком."
  },
  "usage": "import { Alert } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Alert variant=\"primary\" title=\"Saved\" role=\"status\">Your changes are saved.</Alert>\n  );\n}",
  "api": [
    {
      "name": "Alert",
      "props": [
        {
          "name": "variant",
          "type": "'neutral' | 'primary' | 'danger'",
          "defaultValue": "'neutral'",
          "description": {
            "en": "Changes the visual appearance of the component.",
            "ru": "Задаёт вариант оформления компонента."
          },
          "required": false
        },
        {
          "name": "title",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "The message title.",
            "ru": "Заголовок сообщения."
          },
          "required": false
        },
        {
          "name": "role",
          "type": "'status' | 'alert'",
          "defaultValue": "None",
          "description": {
            "en": "How screen readers announce the message.",
            "ru": "Как скринридеры объявляют сообщение."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Use role=\"status\" for routine updates and role=\"alert\" for urgent messages.",
      "ru": "Используйте role=\"status\" для обычных уведомлений, role=\"alert\" — для срочных."
    }
  ],
  "keyboard": [],
  "source": "Feedback/Alert.tsx"
};
