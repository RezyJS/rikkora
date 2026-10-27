import type { ComponentDoc } from '../types';

export const paginationDoc: ComponentDoc = {
  "name": "Pagination",
  "slug": "pagination",
  "category": "navigation",
  "summary": {
    "en": "Provides navigation between pages and highlights the current page.",
    "ru": "Позволяет переключать страницы и выделяет текущую."
  },
  "usage": "import { useState } from 'react';\nimport { Pagination } from '@rikkora/ui';\n\nfunction Example() {\n  const [page, setPage] = useState(1);\n  return <Pagination page={page} pageCount={12} onPageChange={setPage} />;\n}",
  "api": [
    {
      "name": "Pagination",
      "props": [
        {
          "name": "page",
          "type": "number",
          "defaultValue": "—",
          "description": {
            "en": "The currently selected page number.",
            "ru": "Номер текущей страницы."
          },
          "required": true
        },
        {
          "name": "pageCount",
          "type": "number",
          "defaultValue": "—",
          "description": {
            "en": "The total number of pages.",
            "ru": "Общее количество страниц."
          },
          "required": true
        },
        {
          "name": "onPageChange",
          "type": "(page: number) => void",
          "defaultValue": "—",
          "description": {
            "en": "Called with the requested page number.",
            "ru": "Получает номер выбранной страницы."
          },
          "required": true
        },
        {
          "name": "siblingCount",
          "type": "number",
          "defaultValue": "1",
          "description": {
            "en": "The number of page links beside the current page.",
            "ru": "Количество ссылок рядом с текущей страницей."
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
          "name": "previousLabel / nextLabel",
          "type": "string",
          "defaultValue": "English labels",
          "description": {
            "en": "Labels for previous and next page controls.",
            "ru": "Подписи переходов на предыдущую и следующую страницу."
          },
          "required": false
        },
        {
          "name": "getPageLabel",
          "type": "(page: number) => string",
          "defaultValue": "`Page ${page}`",
          "description": {
            "en": "Returns an accessible label for a page number.",
            "ru": "Возвращает доступное имя страницы по её номеру."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Current page: aria-current=\"page\"",
      "ru": "Текущая страница: aria-current=\"page\""
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
      "keys": "Enter / Space",
      "description": {
        "en": "Activates the focused button.",
        "ru": "Активирует кнопку в фокусе."
      }
    }
  ],
  "source": "Data/Pagination.tsx"
};
