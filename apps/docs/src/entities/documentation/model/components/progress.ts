import type { ComponentDoc } from '../types';

export const progressDoc: ComponentDoc = {
  "name": "Progress",
  "slug": "progress",
  "category": "feedback",
  "summary": {
    "en": "Shows progress toward completion. Supports determinate and indeterminate states.",
    "ru": "Показывает ход выполнения задачи. Поддерживает определённый и неопределённый прогресс."
  },
  "usage": "import { Progress } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Progress aria-label=\"Upload\" min={0} max={100} value={45} />\n  );\n}",
  "api": [
    {
      "name": "Progress",
      "props": [
        {
          "name": "value",
          "type": "number",
          "defaultValue": "Indeterminate",
          "description": {
            "en": "Value",
            "ru": "Значение"
          },
          "required": false
        },
        {
          "name": "min",
          "type": "number",
          "defaultValue": "0",
          "description": {
            "en": "The minimum allowed value.",
            "ru": "Минимально допустимое значение."
          },
          "required": false
        },
        {
          "name": "max",
          "type": "number",
          "defaultValue": "100",
          "description": {
            "en": "The maximum allowed value.",
            "ru": "Максимально допустимое значение."
          },
          "required": false
        },
        {
          "name": "aria-label",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "An accessible name for the component.",
            "ru": "Доступное имя компонента."
          },
          "required": true
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Provide aria-label or aria-labelledby",
      "ru": "Задайте aria-label или aria-labelledby"
    }
  ],
  "keyboard": [],
  "source": "Feedback/Progress.tsx"
};
