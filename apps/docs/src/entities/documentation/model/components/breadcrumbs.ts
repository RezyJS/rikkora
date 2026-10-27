import type { ComponentDoc } from '../types';

export const breadcrumbsDoc: ComponentDoc = {
  "name": "Breadcrumbs",
  "slug": "breadcrumbs",
  "category": "navigation",
  "summary": {
    "en": "Shows the path to the current page and links to parent sections.",
    "ru": "Показывает путь к текущей странице со ссылками на родительские разделы."
  },
  "usage": "import { Breadcrumbs, Link } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Breadcrumbs aria-label=\"Breadcrumb\">\n      <Link href=\"/docs\">Docs</Link>\n      <span>Components</span>\n    </Breadcrumbs>\n  );\n}",
  "api": [
    {
      "name": "Breadcrumbs",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "The content displayed inside the component.",
            "ru": "Содержимое компонента."
          },
          "required": true
        },
        {
          "name": "separator",
          "type": "ReactNode",
          "defaultValue": "'/'",
          "description": {
            "en": "The content between breadcrumb items.",
            "ru": "Разделитель между пунктами навигации."
          },
          "required": false
        },
        {
          "name": "aria-label",
          "type": "string",
          "defaultValue": "'Breadcrumb'",
          "description": {
            "en": "An accessible name for the component.",
            "ru": "Доступное имя компонента."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "The current page uses aria-current=\"page\". Separators are hidden from screen readers.",
      "ru": "Текущая страница отмечена aria-current=\"page\". Разделители скрыты от скринридеров."
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
      "keys": "Enter",
      "description": {
        "en": "Follows the focused link.",
        "ru": "Открывает ссылку в фокусе."
      }
    }
  ],
  "source": "Breadcrumbs/Breadcrumbs.tsx"
};
