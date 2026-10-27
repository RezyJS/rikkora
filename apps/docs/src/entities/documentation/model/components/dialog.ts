import type { ComponentDoc } from '../types';

export const dialogDoc: ComponentDoc = {
  "name": "Dialog",
  "slug": "dialog",
  "category": "overlays",
  "summary": {
    "en": "A modal window above the page that blocks interaction with the background.",
    "ru": "Модальное окно поверх страницы, которое блокирует взаимодействие с фоном."
  },
  "usage": "import { Dialog, Button } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Dialog.Root>\n      <Dialog.Trigger asChild>\n        <Button>Open settings</Button>\n      </Dialog.Trigger>\n      <Dialog.Content>\n        <Dialog.Title>Settings</Dialog.Title>\n        <Dialog.Description>Update your preferences.</Dialog.Description>\n        <Dialog.Close asChild>\n          <Button>Close</Button>\n        </Dialog.Close>\n      </Dialog.Content>\n    </Dialog.Root>\n  );\n}",
  "api": [
    {
      "name": "Root",
      "props": [
        {
          "name": "open / defaultOpen",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Controlled or initial open state.",
            "ru": "Управляемое или начальное состояние открытия."
          },
          "required": false
        },
        {
          "name": "onOpenChange",
          "type": "(open: boolean) => void",
          "defaultValue": "—",
          "description": {
            "en": "Called when the open state changes.",
            "ru": "Вызывается при открытии и закрытии."
          },
          "required": false
        },
        {
          "name": "modal",
          "type": "boolean",
          "defaultValue": "true",
          "description": {
            "en": "Traps focus and blocks interaction with the background.",
            "ru": "Удерживает фокус и блокирует взаимодействие с фоном."
          },
          "required": false
        }
      ]
    },
    {
      "name": "Trigger / Close",
      "props": [
        {
          "name": "asChild",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Passes the component behavior to its child element.",
            "ru": "Передаёт поведение компонента дочернему элементу."
          },
          "required": false
        },
        {
          "name": "disabled",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Prevents interaction with the component.",
            "ru": "Блокирует взаимодействие с компонентом."
          },
          "required": false
        }
      ]
    },
    {
      "name": "Content",
      "props": [
        {
          "name": "container",
          "type": "HTMLElement | null",
          "defaultValue": "document.body",
          "description": {
            "en": "The element where portal content is mounted.",
            "ru": "Элемент, в котором размещается содержимое портала."
          },
          "required": false
        },
        {
          "name": "overlayClassName",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "The CSS class for the backdrop.",
            "ru": "CSS-класс подложки."
          },
          "required": false
        },
        {
          "name": "onEscapeKeyDown",
          "type": "(event: KeyboardEvent) => void",
          "defaultValue": "—",
          "description": {
            "en": "Handles Escape; preventDefault keeps the panel open.",
            "ru": "Обрабатывает Escape; preventDefault отменяет закрытие."
          },
          "required": false
        }
      ]
    },
    {
      "name": "Title / Description",
      "props": [
        {
          "name": "asChild",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Passes the component behavior to its child element.",
            "ru": "Передаёт поведение компонента дочернему элементу."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Include Dialog.Title and a labelled close button.",
      "ru": "Добавьте Dialog.Title и кнопку закрытия с понятной подписью."
    },
    {
      "en": "The dialog traps focus while open and returns it to the trigger on close.",
      "ru": "Окно удерживает фокус внутри и возвращает его на кнопку открытия после закрытия."
    }
  ],
  "keyboard": [
    {
      "keys": "Tab / Shift + Tab",
      "description": {
        "en": "Cycles within modal content.",
        "ru": "Перемещает фокус внутри модального содержимого."
      }
    },
    {
      "keys": "Escape",
      "description": {
        "en": "Closes the topmost window and restores focus.",
        "ru": "Закрывает верхнее окно и возвращает фокус."
      }
    }
  ],
  "source": "Overlays/DialogPrimitives.tsx"
};
