import type { ComponentDoc } from '../types';

export const formControlDoc: ComponentDoc = {
  "name": "FormControl",
  "slug": "form-control",
  "category": "forms",
  "summary": {
    "en": "Shares disabled, required and error states across related fields.",
    "ru": "Задаёт общее состояние disabled, required и ошибки для группы полей."
  },
  "usage": "import { FormControl, Field, Input, Textarea } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <FormControl disabled>\n      <Field label=\"Name\"><Input name=\"name\" /></Field>\n      <Field label=\"Message\"><Textarea name=\"message\" /></Field>\n    </FormControl>\n  );\n}",
  "api": [
    {
      "name": "FormControl",
      "props": [
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
          "name": "children",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "The content displayed inside the component.",
            "ru": "Содержимое компонента."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Props set on a field override the state inherited from FormControl.",
      "ru": "Свойства самого поля имеют приоритет над состоянием FormControl."
    }
  ],
  "keyboard": [],
  "source": "Field/FormControl.tsx"
};
