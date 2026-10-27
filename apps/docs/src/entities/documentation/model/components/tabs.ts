import type { ComponentDoc } from '../types';

export const tabsDoc: ComponentDoc = {
  "name": "Tabs",
  "slug": "tabs",
  "category": "navigation",
  "summary": {
    "en": "Switches between content panels using tabs.",
    "ru": "Переключает панели содержимого с помощью вкладок."
  },
  "usage": "import { Tabs } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Tabs.Root defaultValue=\"overview\">\n      <Tabs.List aria-label=\"Sections\">\n        <Tabs.Trigger value=\"overview\">Overview</Tabs.Trigger>\n        <Tabs.Trigger value=\"settings\">Settings</Tabs.Trigger>\n      </Tabs.List>\n      <Tabs.Content value=\"overview\">Overview content</Tabs.Content>\n      <Tabs.Content value=\"settings\">Settings content</Tabs.Content>\n    </Tabs.Root>\n  );\n}",
  "api": [
    {
      "name": "Root",
      "props": [
        {
          "name": "value / defaultValue",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "Controlled or initial value.",
            "ru": "Управляемое или начальное значение."
          },
          "required": false
        },
        {
          "name": "onValueChange",
          "type": "(value: string) => void",
          "defaultValue": "—",
          "description": {
            "en": "Called with the updated value.",
            "ru": "Получает новое значение."
          },
          "required": false
        },
        {
          "name": "orientation",
          "type": "'horizontal' | 'vertical'",
          "defaultValue": "'horizontal'",
          "description": {
            "en": "The horizontal or vertical orientation.",
            "ru": "Горизонтальное или вертикальное расположение."
          },
          "required": false
        },
        {
          "name": "activationMode",
          "type": "'automatic' | 'manual'",
          "defaultValue": "'automatic'",
          "description": {
            "en": "Whether focus activates a tab immediately or waits for confirmation.",
            "ru": "Активировать вкладку при фокусе или после подтверждения."
          },
          "required": false
        }
      ]
    },
    {
      "name": "List",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "An accessible name for the component.",
            "ru": "Доступное имя компонента."
          },
          "required": true
        },
        {
          "name": "loop",
          "type": "boolean",
          "defaultValue": "true",
          "description": {
            "en": "Moves focus from the last item back to the first.",
            "ru": "Переводит фокус с последнего пункта на первый."
          },
          "required": false
        }
      ]
    },
    {
      "name": "Trigger / Content",
      "props": [
        {
          "name": "value",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "Value",
            "ru": "Значение"
          },
          "required": true
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Give each Trigger and its Content the same value to connect the tab and panel.",
      "ru": "Задайте одинаковый value у Trigger и Content, чтобы связать вкладку с её содержимым."
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
      "keys": "← / → or ↑ / ↓",
      "description": {
        "en": "Moves focus along the tab orientation; skips disabled tabs.",
        "ru": "Перемещает фокус по ориентации вкладок; пропускает недоступные."
      }
    },
    {
      "keys": "Home / End",
      "description": {
        "en": "Focuses the first or last tab.",
        "ru": "Переводит фокус на первую или последнюю вкладку."
      }
    },
    {
      "keys": "Enter / Space",
      "description": {
        "en": "Activates the focused tab in manual mode.",
        "ru": "Активирует вкладку в ручном режиме."
      }
    }
  ],
  "source": "Navigation/Tabs.tsx"
};
