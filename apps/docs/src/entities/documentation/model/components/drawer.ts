import type { ComponentDoc } from '../types';

export const drawerDoc: ComponentDoc = {
  "name": "Drawer",
  "slug": "drawer",
  "category": "overlays",
  "summary": {
    "en": "A panel that opens from an edge of the screen. Supports the same focus behavior as Dialog.",
    "ru": "Панель, которая выдвигается от края экрана. Управляет фокусом так же, как Dialog."
  },
  "usage": "import { Drawer, Button } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Drawer.Root>\n      <Drawer.Trigger asChild>\n        <Button>Open settings</Button>\n      </Drawer.Trigger>\n      <Drawer.Content side=\"right\">\n        <Drawer.Title>Settings</Drawer.Title>\n        <Drawer.Description>Update your preferences.</Drawer.Description>\n        <Drawer.Close asChild>\n          <Button>Close</Button>\n        </Drawer.Close>\n      </Drawer.Content>\n    </Drawer.Root>\n  );\n}",
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
          "name": "side",
          "type": "'left' | 'right' | 'top' | 'bottom'",
          "defaultValue": "'right'",
          "description": {
            "en": "The side where the panel appears.",
            "ru": "Сторона размещения панели."
          },
          "required": false
        },
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
  "source": "Overlays/Drawer.tsx"
};
