import type { ComponentDoc } from '../types';

export const flexDoc: ComponentDoc = {
  "name": "Flex",
  "slug": "flex",
  "category": "layout",
  "summary": {
    "en": "Arranges elements in a row or column with alignment, spacing and wrapping.",
    "ru": "Располагает элементы в строку или столбец с настройками выравнивания, отступов и переноса."
  },
  "usage": "import { Flex, Button } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Flex gap={3} align=\"center\" wrap>\n      <Button>Save</Button>\n      <Button variant=\"outline\">Cancel</Button>\n    </Flex>\n  );\n}",
  "api": [
    {
      "name": "Flex",
      "props": [
        {
          "name": "as",
          "type": "HTML element name",
          "defaultValue": "'div'",
          "description": {
            "en": "The HTML element or component to render.",
            "ru": "HTML-элемент или компонент для отображения."
          },
          "required": false
        },
        {
          "name": "direction",
          "type": "'row' | 'column' | 'row-reverse' | 'column-reverse'",
          "defaultValue": "CSS default",
          "description": {
            "en": "The axis and order of items.",
            "ru": "Направление и порядок элементов."
          },
          "required": false
        },
        {
          "name": "align",
          "type": "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
          "defaultValue": "CSS default",
          "description": {
            "en": "Aligns content within its container or relative to its trigger.",
            "ru": "Выравнивает содержимое в контейнере или относительно элемента открытия."
          },
          "required": false
        },
        {
          "name": "justify",
          "type": "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
          "defaultValue": "CSS default",
          "description": {
            "en": "Aligns items along the main axis.",
            "ru": "Выравнивает элементы по основной оси."
          },
          "required": false
        },
        {
          "name": "gap",
          "type": "number | string",
          "defaultValue": "CSS default",
          "description": {
            "en": "The spacing between items.",
            "ru": "Расстояние между элементами."
          },
          "required": false
        },
        {
          "name": "wrap",
          "type": "boolean",
          "defaultValue": "CSS default",
          "description": {
            "en": "Allows items to wrap onto another line.",
            "ru": "Разрешает перенос элементов на новую строку."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Native HTML semantics",
      "ru": "Нативная HTML-семантика"
    }
  ],
  "keyboard": [],
  "source": "Flex/Flex.tsx"
};
