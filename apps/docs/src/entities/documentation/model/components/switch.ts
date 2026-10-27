import type { ComponentDoc } from '../types';

export const switchDoc: ComponentDoc = {
  "name": "Switch",
  "slug": "switch",
  "category": "forms",
  "summary": {
    "en": "A switch for turning a setting on or off.",
    "ru": "Переключатель для включения и выключения настройки."
  },
  "usage": "import { Field, Switch } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Field label=\"Notifications\"><Switch name=\"notifications\" defaultChecked /></Field>\n  );\n}",
  "api": [
    {
      "name": "Switch",
      "props": [
        {
          "name": "checked / defaultChecked",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Controlled or initial checked state.",
            "ru": "Управляемое или начальное состояние выбора."
          },
          "required": false
        },
        {
          "name": "onChange",
          "type": "ChangeEventHandler<HTMLInputElement>",
          "defaultValue": "—",
          "description": {
            "en": "Called when the field value changes.",
            "ru": "Вызывается при изменении значения поля."
          },
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "The field name used in form submission.",
            "ru": "Имя поля при отправке формы."
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
        },
        {
          "name": "required",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Marks the field as required.",
            "ru": "Отмечает поле как обязательное."
          },
          "required": false
        },
        {
          "name": "invalid",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Marks an invalid value and applies error styling.",
            "ru": "Отмечает некорректное значение и включает оформление ошибки."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Use Field or aria-label to give the control an accessible name.",
      "ru": "Задайте доступное имя поля через Field или aria-label."
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
      "keys": "Space",
      "description": {
        "en": "Toggles the checked state.",
        "ru": "Переключает состояние выбора."
      }
    }
  ],
  "source": "Controls/Switch.tsx"
};
