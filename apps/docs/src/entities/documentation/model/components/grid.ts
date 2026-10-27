import type { ComponentDoc } from '../types';

export const gridDoc: ComponentDoc = {
  "name": "Grid",
  "slug": "grid",
  "category": "layout",
  "summary": {
    "en": "Arranges elements in a grid with configurable rows, columns and spacing.",
    "ru": "Располагает элементы в сетке с настройками строк, столбцов и расстояния между ячейками."
  },
  "usage": "import { Grid, Card } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Grid columns={2} gap={4}>\n      <Card>First item</Card>\n      <Card>Second item</Card>\n    </Grid>\n  );\n}",
  "api": [
    {
      "name": "Grid",
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
          "name": "columns / rows",
          "type": "number | string",
          "defaultValue": "CSS default",
          "description": {
            "en": "The number or CSS definition of grid tracks.",
            "ru": "Количество или CSS-описание столбцов и строк."
          },
          "required": false
        },
        {
          "name": "gap / rowGap / columnGap",
          "type": "number | string",
          "defaultValue": "CSS default",
          "description": {
            "en": "The spacing between rows and columns.",
            "ru": "Расстояние между строками и столбцами."
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
          "type": "'start' | 'center' | 'end' | 'stretch'",
          "defaultValue": "CSS default",
          "description": {
            "en": "Aligns items along the main axis.",
            "ru": "Выравнивает элементы по основной оси."
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
  "source": "Grid/Grid.tsx"
};
