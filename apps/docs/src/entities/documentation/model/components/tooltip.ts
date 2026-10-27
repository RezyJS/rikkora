import type { ComponentDoc } from '../types';

export const tooltipDoc: ComponentDoc = {
  "name": "Tooltip",
  "slug": "tooltip",
  "category": "overlays",
  "summary": {
    "en": "Shows a short hint on hover or keyboard focus.",
    "ru": "Показывает короткую подсказку при наведении или фокусе с клавиатуры."
  },
  "usage": "import { Tooltip, Button } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Tooltip.Provider delayDuration={300}>\n      <Tooltip.Root>\n        <Tooltip.Trigger asChild>\n          <Button variant=\"outline\">Help</Button>\n        </Tooltip.Trigger>\n        <Tooltip.Content>Additional information</Tooltip.Content>\n      </Tooltip.Root>\n    </Tooltip.Provider>\n  );\n}",
  "api": [
    {
      "name": "Provider",
      "props": [
        {
          "name": "delayDuration",
          "type": "number",
          "defaultValue": "700",
          "description": {
            "en": "Delay before showing the tooltip, in milliseconds.",
            "ru": "Задержка появления подсказки в миллисекундах."
          },
          "required": false
        },
        {
          "name": "skipDelayDuration",
          "type": "number",
          "defaultValue": "300",
          "description": {
            "en": "The interval when another tooltip opens without a delay.",
            "ru": "Интервал, в котором следующая подсказка открывается без задержки."
          },
          "required": false
        }
      ]
    },
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
        }
      ]
    },
    {
      "name": "Content",
      "props": [
        {
          "name": "side",
          "type": "'top' | 'right' | 'bottom' | 'left'",
          "defaultValue": "'top'",
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
      "en": "Use Tooltip for text hints. Put links and buttons in Popover instead.",
      "ru": "Используйте Tooltip для текстовых подсказок. Ссылки и кнопки размещайте в Popover."
    }
  ],
  "keyboard": [
    {
      "keys": "Tab",
      "description": {
        "en": "Focus on the trigger reveals the explanation.",
        "ru": "Фокус на триггере показывает пояснение."
      }
    },
    {
      "keys": "Escape",
      "description": {
        "en": "Dismisses the tooltip.",
        "ru": "Закрывает подсказку."
      }
    }
  ],
  "source": "Overlays/Tooltip.tsx"
};
