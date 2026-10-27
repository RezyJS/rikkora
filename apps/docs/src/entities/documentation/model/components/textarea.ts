import type { ComponentDoc } from '../types';

export const textareaDoc: ComponentDoc = {
  "name": "Textarea",
  "slug": "textarea",
  "category": "forms",
  "summary": {
    "en": "A field for entering and editing multiline text.",
    "ru": "Поле для ввода и редактирования многострочного текста."
  },
  "usage": "import { Field, Textarea } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Field label=\"Message\">\n      <Textarea name=\"message\" rows={4} placeholder=\"Write a message\" />\n    </Field>\n  );\n}",
  "api": [
    {
      "name": "Textarea",
      "props": [
        {
          "name": "rows",
          "type": "number",
          "defaultValue": "4",
          "description": {
            "en": "The number of visible text rows.",
            "ru": "Количество видимых строк текста."
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
  "source": "Textarea/Textarea.tsx"
};
