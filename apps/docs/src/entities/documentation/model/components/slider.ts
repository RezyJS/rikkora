import type { ComponentDoc } from '../types';

export const sliderDoc: ComponentDoc = {
  "name": "Slider",
  "slug": "slider",
  "category": "forms",
  "summary": {
    "en": "A slider for selecting a numeric value within a range.",
    "ru": "Ползунок для выбора числового значения в заданном диапазоне."
  },
  "usage": "import { Field, Slider } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Field label=\"Volume\"><Slider name=\"volume\" min={0} max={100} step={5} defaultValue={50} /></Field>\n  );\n}",
  "api": [
    {
      "name": "Slider",
      "props": [
        {
          "name": "value / defaultValue",
          "type": "string | number",
          "defaultValue": "Native midpoint",
          "description": {
            "en": "Controlled or initial value.",
            "ru": "Управляемое или начальное значение."
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
          "name": "min",
          "type": "number | string",
          "defaultValue": "0",
          "description": {
            "en": "The minimum allowed value.",
            "ru": "Минимально допустимое значение."
          },
          "required": false
        },
        {
          "name": "max",
          "type": "number | string",
          "defaultValue": "100",
          "description": {
            "en": "The maximum allowed value.",
            "ru": "Максимально допустимое значение."
          },
          "required": false
        },
        {
          "name": "step",
          "type": "number | string",
          "defaultValue": "1",
          "description": {
            "en": "The interval between allowed values.",
            "ru": "Шаг изменения значения."
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
      "keys": "← / ↓ · → / ↑",
      "description": {
        "en": "Decreases or increases by one step.",
        "ru": "Уменьшает или увеличивает на один шаг."
      }
    },
    {
      "keys": "Home / End",
      "description": {
        "en": "Moves to the minimum or maximum.",
        "ru": "Выбирает минимум или максимум."
      }
    }
  ],
  "source": "Controls/Slider.tsx"
};
