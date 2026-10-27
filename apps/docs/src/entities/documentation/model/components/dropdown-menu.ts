import type { ComponentDoc } from '../types';

export const dropdownMenuDoc: ComponentDoc = {
  "name": "DropdownMenu",
  "slug": "dropdown-menu",
  "category": "overlays",
  "summary": {
    "en": "A dropdown menu of actions with keyboard navigation.",
    "ru": "Выпадающее меню действий с управлением с клавиатуры."
  },
  "usage": "import { DropdownMenu, Button } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <DropdownMenu.Root>\n      <DropdownMenu.Trigger asChild>\n        <Button>Actions</Button>\n      </DropdownMenu.Trigger>\n      <DropdownMenu.Content>\n        <DropdownMenu.Item onSelect={() => console.log(\"Edit\")}>\n          Edit\n        </DropdownMenu.Item>\n        <DropdownMenu.Item disabled>Delete</DropdownMenu.Item>\n      </DropdownMenu.Content>\n    </DropdownMenu.Root>\n  );\n}",
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
        }
      ]
    },
    {
      "name": "Trigger",
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
          "type": "'top' | 'right' | 'bottom' | 'left'",
          "defaultValue": "'bottom'",
          "description": {
            "en": "The side where the panel appears.",
            "ru": "Сторона размещения панели."
          },
          "required": false
        },
        {
          "name": "align",
          "type": "'start' | 'center' | 'end'",
          "defaultValue": "'center'",
          "description": {
            "en": "Aligns content within its container or relative to its trigger.",
            "ru": "Выравнивает содержимое в контейнере или относительно элемента открытия."
          },
          "required": false
        },
        {
          "name": "sideOffset",
          "type": "number",
          "defaultValue": "8",
          "description": {
            "en": "Distance from the trigger in pixels.",
            "ru": "Расстояние от элемента открытия в пикселях."
          },
          "required": false
        },
        {
          "name": "avoidCollisions",
          "type": "boolean",
          "defaultValue": "true",
          "description": {
            "en": "Adjusts placement to keep content within the viewport.",
            "ru": "Меняет положение содержимого у границ экрана."
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
        }
      ]
    },
    {
      "name": "Item",
      "props": [
        {
          "name": "disabled",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Prevents interaction with the component.",
            "ru": "Блокирует взаимодействие с компонентом."
          },
          "required": false
        },
        {
          "name": "onSelect",
          "type": "(event: Event) => void",
          "defaultValue": "—",
          "description": {
            "en": "Called when a menu item is selected.",
            "ru": "Вызывается при выборе пункта меню."
          },
          "required": false
        }
      ]
    },
    {
      "name": "Label / Separator",
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
      "en": "Keyboard navigation skips disabled items",
      "ru": "Навигация пропускает неактивные пункты"
    }
  ],
  "keyboard": [
    {
      "keys": "Enter / Space / ↓",
      "description": {
        "en": "Opens the menu from its trigger.",
        "ru": "Открывает меню из триггера."
      }
    },
    {
      "keys": "↑ / ↓ · Home / End",
      "description": {
        "en": "Moves between enabled items.",
        "ru": "Перемещает фокус между доступными пунктами."
      }
    },
    {
      "keys": "Typing",
      "description": {
        "en": "Finds a matching item.",
        "ru": "Ищет подходящий пункт."
      }
    },
    {
      "keys": "Enter / Space",
      "description": {
        "en": "Selects the focused item.",
        "ru": "Выбирает пункт в фокусе."
      }
    },
    {
      "keys": "Escape",
      "description": {
        "en": "Closes the menu and restores focus.",
        "ru": "Закрывает меню и возвращает фокус."
      }
    }
  ],
  "source": "Overlays/DropdownMenu.tsx"
};
