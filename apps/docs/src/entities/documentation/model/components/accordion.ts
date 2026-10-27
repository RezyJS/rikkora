import type { ComponentDoc } from '../types';

export const accordionDoc: ComponentDoc = {
  "name": "Accordion",
  "slug": "accordion",
  "category": "navigation",
  "summary": {
    "en": "Displays sections that can be expanded and collapsed.",
    "ru": "Показывает разделы, которые можно раскрывать и сворачивать."
  },
  "usage": "import { Accordion } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Accordion.Root type=\"single\" collapsible defaultValue=\"one\">\n      <Accordion.Item value=\"one\">\n        <Accordion.Header>\n          <Accordion.Trigger>When will my order arrive?</Accordion.Trigger>\n        </Accordion.Header>\n        <Accordion.Content>Within 3–5 business days.</Accordion.Content>\n      </Accordion.Item>\n      <Accordion.Item value=\"two\">\n        <Accordion.Header><Accordion.Trigger>How can I track my order?</Accordion.Trigger></Accordion.Header>\n        <Accordion.Content>Use the tracking link in your email.</Accordion.Content>\n      </Accordion.Item>\n    </Accordion.Root>\n  );\n}",
  "api": [
    {
      "name": "Root",
      "props": [
        {
          "name": "type",
          "type": "'single' | 'multiple'",
          "defaultValue": "—",
          "description": {
            "en": "Allows one or several sections to be open.",
            "ru": "Разрешает раскрывать один или несколько разделов."
          },
          "required": true
        },
        {
          "name": "value / defaultValue",
          "type": "string | string[]",
          "defaultValue": "—",
          "description": {
            "en": "Controlled or initial value.",
            "ru": "Управляемое или начальное значение."
          },
          "required": false
        },
        {
          "name": "onValueChange",
          "type": "(value: string | string[]) => void",
          "defaultValue": "—",
          "description": {
            "en": "Called with the updated value.",
            "ru": "Получает новое значение."
          },
          "required": false
        },
        {
          "name": "collapsible",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Allows all accordion sections to be closed.",
            "ru": "Разрешает закрыть все разделы аккордеона."
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
      "name": "Item",
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
      "name": "Header / Trigger / Content",
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
      "en": "Place Trigger inside Header and choose a heading level that matches the page structure.",
      "ru": "Размещайте Trigger внутри Header и выбирайте уровень заголовка по структуре страницы."
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
      "keys": "Enter / Space",
      "description": {
        "en": "Expands or collapses an item.",
        "ru": "Раскрывает или закрывает пункт."
      }
    },
    {
      "keys": "↑ / ↓ · Home / End",
      "description": {
        "en": "Moves between item triggers.",
        "ru": "Переводит фокус между триггерами пунктов."
      }
    }
  ],
  "source": "Navigation/Accordion.tsx"
};
