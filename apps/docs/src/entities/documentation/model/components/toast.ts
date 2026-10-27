import type { ComponentDoc } from '../types';

export const toastDoc: ComponentDoc = {
  "name": "Toast",
  "slug": "toast",
  "category": "feedback",
  "summary": {
    "en": "Shows temporary notifications about actions and their results.",
    "ru": "Показывает временные уведомления о действиях и их результатах."
  },
  "usage": "import { Button, ToastProvider, useToast } from '@rikkora/ui';\n\nfunction SaveButton() {\n  const { toast } = useToast();\n  return (\n    <Button onClick={() => toast({\n      title: 'Saved',\n      description: 'Your changes are saved.',\n    })}>\n      Save\n    </Button>\n  );\n}\n\nfunction Example() {\n  return (\n    <ToastProvider maxVisible={3}>\n      <SaveButton />\n    </ToastProvider>\n  );\n}",
  "api": [
    {
      "name": "ToastProvider",
      "props": [
        {
          "name": "width",
          "type": "number | string",
          "defaultValue": "'24rem'",
          "description": {
            "en": "The toast width as pixels or a CSS length.",
            "ru": "Ширина уведомления в пикселях или CSS-единицах."
          },
          "required": false
        },
        {
          "name": "maxVisible",
          "type": "number",
          "defaultValue": "3",
          "description": {
            "en": "The number of notifications in the collapsed stack. Hover or keyboard focus reveals all notifications in a scrollable list.",
            "ru": "Количество уведомлений в свёрнутой стопке. Наведение или фокус с клавиатуры раскрывает весь список с прокруткой."
          },
          "required": false
        },
        {
          "name": "duration",
          "type": "number",
          "defaultValue": "5000",
          "description": {
            "en": "Time before automatic dismissal, in milliseconds.",
            "ru": "Время до автоматического закрытия в миллисекундах."
          },
          "required": false
        },
        {
          "name": "closeLabel",
          "type": "string",
          "defaultValue": "'Dismiss notification'",
          "description": {
            "en": "The accessible name of the close button.",
            "ru": "Доступное имя кнопки закрытия."
          },
          "required": false
        },
        {
          "name": "viewportLabel",
          "type": "string",
          "defaultValue": "'Notifications'",
          "description": {
            "en": "The accessible name of the notification region.",
            "ru": "Доступное имя области уведомлений."
          },
          "required": false
        }
      ]
    },
    {
      "name": "useToast()",
      "props": [
        {
          "name": "toast",
          "type": "(message: ToastMessage) => number",
          "defaultValue": "—",
          "description": {
            "en": "Adds a notification and returns its id.",
            "ru": "Добавляет уведомление и возвращает его id."
          },
          "required": false
        },
        {
          "name": "dismiss",
          "type": "(id: number) => void",
          "defaultValue": "—",
          "description": {
            "en": "Closes a notification by its id.",
            "ru": "Закрывает уведомление по id."
          },
          "required": false
        },
        {
          "name": "dismissAll",
          "type": "() => void",
          "defaultValue": "—",
          "description": {
            "en": "Closes all notifications.",
            "ru": "Закрывает все уведомления."
          },
          "required": false
        }
      ]
    },
    {
      "name": "ToastMessage",
      "props": [
        {
          "name": "title",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "The message title.",
            "ru": "Заголовок сообщения."
          },
          "required": true
        },
        {
          "name": "description",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Additional text below the label or title.",
            "ru": "Дополнительный текст под подписью или заголовком."
          },
          "required": false
        },
        {
          "name": "duration",
          "type": "number",
          "defaultValue": "Provider duration",
          "description": {
            "en": "Time before automatic dismissal, in milliseconds.",
            "ru": "Время до автоматического закрытия в миллисекундах."
          },
          "required": false
        },
        {
          "name": "type",
          "type": "'foreground' | 'background'",
          "defaultValue": "'background'",
          "description": {
            "en": "Controls how screen readers announce the notification.",
            "ru": "Определяет порядок объявления уведомления скринридером."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Timers pause on hover and focus",
      "ru": "Таймер приостанавливается при наведении и фокусе"
    },
    {
      "en": "One notification provider per region",
      "ru": "Один провайдер на область уведомлений"
    }
  ],
  "keyboard": [
    {
      "keys": "F8",
      "description": {
        "en": "Focuses the notification region.",
        "ru": "Переводит фокус в область уведомлений."
      }
    },
    {
      "keys": "Tab / Shift + Tab",
      "description": {
        "en": "Moves focus to the next or previous control.",
        "ru": "Переводит фокус на следующий или предыдущий контрол."
      }
    },
    {
      "keys": "Escape",
      "description": {
        "en": "Dismisses the focused toast.",
        "ru": "Закрывает уведомление в фокусе."
      }
    }
  ],
  "source": "Toast/Toast.tsx"
};
