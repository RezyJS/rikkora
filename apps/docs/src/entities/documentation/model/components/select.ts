import type { ComponentDoc } from '../types';

export const selectDoc: ComponentDoc = {
  "name": "Select",
  "slug": "select",
  "category": "forms",
  "summary": {
    "en": "A dropdown list for selecting one or more options. Uses the native browser control.",
    "ru": "Выпадающий список для выбора одного или нескольких вариантов. Использует нативный элемент браузера."
  },
  "usage": "import { Field, Select } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Field label=\"Theme\">\n      <Select name=\"theme\" defaultValue=\"dark\">\n        <option value=\"dark\">Dark</option>\n        <option value=\"light\">Light</option>\n      </Select>\n    </Field>\n  );\n}",
  "api": [
    {
      "name": "Select",
      "props": [
        {
          "name": "children",
          "type": "option | optgroup elements",
          "defaultValue": "—",
          "description": {
            "en": "The content displayed inside the component.",
            "ru": "Содержимое компонента."
          },
          "required": true
        },
        {
          "name": "value / defaultValue",
          "type": "string | number | readonly string[]",
          "defaultValue": "—",
          "description": {
            "en": "Controlled or initial value.",
            "ru": "Управляемое или начальное значение."
          },
          "required": false
        },
        {
          "name": "onChange",
          "type": "ChangeEventHandler",
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
        },
        {
          "name": "multiple",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Allows selecting several options.",
            "ru": "Разрешает выбор нескольких вариантов."
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
      "keys": "↑ / ↓ / typing",
      "description": {
        "en": "Uses the browser native option navigation.",
        "ru": "Использует нативную навигацию по вариантам браузера."
      }
    }
  ],
  "source": "Controls/Select.tsx"
};
