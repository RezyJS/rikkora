import type { ComponentDoc } from '../types';

export const inputDoc: ComponentDoc = {
  "name": "Input",
  "slug": "input",
  "category": "forms",
  "summary": {
    "en": "A field for entering text, numbers and other form data. Supports standard HTML input types.",
    "ru": "Поле для ввода текста, чисел и других данных в формах. Поддерживает стандартные типы HTML input."
  },
  "usage": "import { Field, Input } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Field label=\"Email\" description=\"Work address\" required>\n      <Input name=\"email\" type=\"email\" placeholder=\"you@example.com\" />\n    </Field>\n  );\n}",
  "api": [
    {
      "name": "Input",
      "props": [
        {
          "name": "variant",
          "type": "'default' | 'hover'",
          "defaultValue": "'default'",
          "description": {
            "en": "default uses a faint tint that strengthens on hover and focus. hover keeps the background transparent.",
            "ru": "default добавляет лёгкий полупрозрачный фон, который усиливается при наведении и фокусе. hover оставляет фон прозрачным."
          },
          "required": false
        },
        {
          "name": "underline",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Shows a bottom border for the hover variant. Has no effect on the default variant.",
            "ru": "Добавляет нижнюю рамку варианту hover. Не влияет на вариант default."
          },
          "required": false
        },
        {
          "name": "type",
          "type": "HTMLInputTypeAttribute",
          "defaultValue": "'text'",
          "description": {
            "en": "Selects the native input type, such as text, email or password.",
            "ru": "Задаёт тип поля, например text, email или password."
          },
          "required": false
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
          "name": "readOnly",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Allows reading and selection without editing.",
            "ru": "Позволяет читать и выделять значение без редактирования."
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
      "keys": "Native editing keys",
      "description": {
        "en": "Moves the caret, selects and edits text.",
        "ru": "Перемещает курсор, выделяет и редактирует текст."
      }
    }
  ],
  "source": "Input/Input.tsx"
};
