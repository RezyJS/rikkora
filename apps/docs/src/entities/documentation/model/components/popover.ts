import type { ComponentDoc } from '../types';

export const popoverDoc: ComponentDoc = {
  "name": "Popover",
  "slug": "popover",
  "category": "overlays",
  "summary": {
    "en": "Shows additional content in a panel next to the trigger.",
    "ru": "Показывает дополнительное содержимое в панели рядом с элементом открытия."
  },
  "usage": "import { Popover, Button, Text } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Popover.Root>\n      <Popover.Trigger asChild>\n        <Button>Details</Button>\n      </Popover.Trigger>\n      <Popover.Content aria-label=\"Details\">\n        <Text>Additional information</Text>\n        <Popover.Close asChild>\n          <Button>Close</Button>\n        </Popover.Close>\n      </Popover.Content>\n    </Popover.Root>\n  );\n}",
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
          "defaultValue": "false",
          "description": {
            "en": "Traps focus and blocks interaction with the background.",
            "ru": "Удерживает фокус и блокирует взаимодействие с фоном."
          },
          "required": false
        }
      ]
    },
    {
      "name": "Trigger / Anchor / Close",
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
    }
  ],
  "accessibility": [
    {
      "en": "Give Popover.Content an accessible name with aria-label or aria-labelledby.",
      "ru": "Задайте имя Popover.Content через aria-label или aria-labelledby."
    }
  ],
  "keyboard": [
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
        "en": "Closes the popover and restores trigger focus.",
        "ru": "Закрывает popover и возвращает фокус в триггер."
      }
    }
  ],
  "source": "Overlays/Popover.tsx"
};
