import type { ComponentDoc } from '../types';

export const fieldDoc: ComponentDoc = {
  "name": "Field",
  "slug": "field",
  "category": "forms",
  "summary": {
    "en": "Combines a control with its label, description and error message.",
    "ru": "Объединяет поле ввода с подписью, описанием и сообщением об ошибке."
  },
  "usage": "import { Field, Input } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Field label=\"Email\" description=\"Work address\" error=\"Enter a valid email\" required><Input type=\"email\" name=\"email\" /></Field>\n  );\n}",
  "api": [
    {
      "name": "Field",
      "props": [
        {
          "name": "label",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "The visible field label.",
            "ru": "Видимая подпись поля."
          },
          "required": true
        },
        {
          "name": "description",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Additional text below the label or title.",
            "ru": "Дополнительный текст под подписью или заголовком."
          },
          "required": false
        },
        {
          "name": "error",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "The error message displayed below the field.",
            "ru": "Сообщение об ошибке под полем."
          },
          "required": false
        },
        {
          "name": "controlId",
          "type": "string",
          "defaultValue": "Generated id",
          "description": {
            "en": "The control id that connects the field to its label.",
            "ru": "id поля для связи с подписью."
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
      "en": "The control id must match controlId so that the label focuses the correct field.",
      "ru": "id поля должен совпадать с controlId, чтобы подпись была связана с нужным полем."
    }
  ],
  "keyboard": [],
  "source": "Field/Field.tsx"
};
