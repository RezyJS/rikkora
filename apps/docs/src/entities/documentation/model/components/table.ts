import type { ComponentDoc } from '../types';

export const tableDoc: ComponentDoc = {
  "name": "Table",
  "slug": "table",
  "category": "data",
  "summary": {
    "en": "Displays tabular data with headers, rows and a caption.",
    "ru": "Выводит табличные данные с заголовками, строками и подписью."
  },
  "usage": "import { Table } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Table.Root>\n      <Table.Caption>People</Table.Caption>\n      <Table.Head>\n        <Table.Row><Table.Header>Name</Table.Header></Table.Row>\n      </Table.Head>\n      <Table.Body>\n        <Table.Row><Table.Cell>Rikka</Table.Cell></Table.Row>\n      </Table.Body>\n    </Table.Root>\n  );\n}",
  "api": [
    {
      "name": "Root / Caption / Head / Body / Foot / Row / Cell",
      "props": [
        {
          "name": "Native HTML props",
          "type": "table / caption / thead / tbody / tfoot / tr / td",
          "defaultValue": "—",
          "description": {
            "en": "Standard HTML attributes for the corresponding element.",
            "ru": "Стандартные HTML-атрибуты соответствующего элемента."
          },
          "required": false
        }
      ]
    },
    {
      "name": "Header",
      "props": [
        {
          "name": "scope",
          "type": "'col' | 'row' | 'colgroup' | 'rowgroup'",
          "defaultValue": "'col'",
          "description": {
            "en": "Whether the header describes a row or a column.",
            "ru": "Строка или столбец, к которым относится заголовок."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Use scope=\"row\" for row headers and scope=\"col\" for column headers.",
      "ru": "Для заголовков строк задайте scope=\"row\", для заголовков столбцов — scope=\"col\"."
    }
  ],
  "keyboard": [],
  "source": "Data/Table.tsx"
};
