import type { ComponentDoc } from '../types';

export const linkDoc: ComponentDoc = {
  "name": "Link",
  "slug": "link",
  "category": "navigation",
  "summary": {
    "en": "A link to a page, file or section. Supports native anchors and router components.",
    "ru": "Ссылка для перехода на страницу, к файлу или разделу. Поддерживает компоненты роутера."
  },
  "usage": "import { Link } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Link href=\"#setup\">Setup</Link>\n  );\n}",
  "api": [
    {
      "name": "Link",
      "props": [
        {
          "name": "href",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "The URL or page anchor to navigate to.",
            "ru": "Адрес страницы, файла или раздела для перехода."
          },
          "required": false
        },
        {
          "name": "as",
          "type": "ElementType",
          "defaultValue": "'a'",
          "description": {
            "en": "The HTML element or component to render.",
            "ru": "HTML-элемент или компонент для отображения."
          },
          "required": false
        },
        {
          "name": "target",
          "type": "'_self' | '_blank'",
          "defaultValue": "'_self'",
          "description": {
            "en": "Where the link destination opens.",
            "ru": "Где открывается ссылка."
          },
          "required": false
        },
        {
          "name": "rel",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "The relationship between this page and the link destination.",
            "ru": "Связь текущей страницы с адресатом ссылки."
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
      "en": "Native HTML semantics",
      "ru": "Нативная HTML-семантика"
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
  "source": "Link/Link.tsx"
};
