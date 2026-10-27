import type { ComponentDoc } from '../types';

export const radioGroupDoc: ComponentDoc = {
  "name": "RadioGroup",
  "slug": "radio-group",
  "category": "forms",
  "summary": {
    "en": "A group of options with a single selection.",
    "ru": "Группа переключателей для выбора одного варианта из нескольких."
  },
  "usage": "import { Field, RadioGroup } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Field label=\"Plan\">\n      <RadioGroup\n        name=\"plan\"\n        defaultValue=\"basic\"\n        options={[\n          { value: \"basic\", label: \"Basic\" },\n          { value: \"pro\", label: \"Pro\" },\n        ]}\n      />\n    </Field>\n  );\n}",
  "api": [
    {
      "name": "RadioGroup",
      "props": [
        {
          "name": "options",
          "type": "readonly RadioOption[]",
          "defaultValue": "—",
          "description": {
            "en": "Options with a value, label and optional disabled state.",
            "ru": "Варианты со значением, подписью и необязательным disabled."
          },
          "required": true
        },
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
          "defaultValue": "'vertical'",
          "description": {
            "en": "The horizontal or vertical orientation.",
            "ru": "Горизонтальное или вертикальное расположение."
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
      "keys": "↑ / ↓ / ← / →",
      "description": {
        "en": "Selects the adjacent enabled option.",
        "ru": "Выбирает соседний доступный вариант."
      }
    },
    {
      "keys": "Space",
      "description": {
        "en": "Selects the focused option.",
        "ru": "Выбирает вариант в фокусе."
      }
    }
  ],
  "source": "Controls/RadioGroup.tsx"
};
