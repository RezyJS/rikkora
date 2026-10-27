import type { ComponentDoc } from '../types';

export const scrollAreaDoc: ComponentDoc = {
  "name": "ScrollArea",
  "slug": "scroll-area",
  "category": "layout",
  "summary": {
    "en": "A scrollable container with custom scrollbars and native scrolling.",
    "ru": "Контейнер с прокруткой и настраиваемыми полосами прокрутки. Сохраняет нативное управление."
  },
  "usage": "import { ScrollArea, Stack, Text } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <ScrollArea\n      type=\"auto\"\n      aria-label=\"Items\"\n      style={{ height: 200, width: 320, \"--rkr-scrollbar-size\": \"12px\" }}\n    >\n      <Stack gap={3} style={{ padding: \"1rem\" }}>\n        {Array.from({ length: 20 }, (_, index) => (\n          <Text as=\"div\" key={index}>Item {index + 1}</Text>\n        ))}\n      </Stack>\n    </ScrollArea>\n  );\n}",
  "api": [
    {
      "name": "ScrollArea",
      "props": [
        {
          "name": "orientation",
          "type": "'vertical' | 'horizontal' | 'both'",
          "defaultValue": "'vertical'",
          "description": {
            "en": "The horizontal or vertical orientation.",
            "ru": "Горизонтальное или вертикальное расположение."
          },
          "required": false
        },
        {
          "name": "type",
          "type": "'hover' | 'scroll' | 'auto' | 'always'",
          "defaultValue": "'hover'",
          "description": {
            "en": "Controls when scrollbars appear.",
            "ru": "Определяет, когда видны полосы прокрутки."
          },
          "required": false
        },
        {
          "name": "scrollHideDelay",
          "type": "number",
          "defaultValue": "600",
          "description": {
            "en": "Delay before hiding scrollbars, in milliseconds.",
            "ru": "Задержка скрытия полос прокрутки в миллисекундах."
          },
          "required": false
        },
        {
          "name": "dir",
          "type": "'ltr' | 'rtl'",
          "defaultValue": "'ltr'",
          "description": {
            "en": "Text direction and scrollbar placement.",
            "ru": "Направление текста и расположение полос прокрутки."
          },
          "required": false
        },
        {
          "name": "viewportProps",
          "type": "ScrollAreaViewportProps",
          "defaultValue": "{ tabIndex: 0 }",
          "description": {
            "en": "HTML attributes and handlers for the scrollable viewport.",
            "ru": "HTML-атрибуты и обработчики области прокрутки."
          },
          "required": false
        },
        {
          "name": "viewportRef",
          "type": "Ref<HTMLDivElement>",
          "defaultValue": "—",
          "description": {
            "en": "A reference to the scrollable viewport.",
            "ru": "Ссылка на прокручиваемый элемент."
          },
          "required": false
        },
        {
          "name": "aria-label / aria-labelledby",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "An accessible name or the id of its label.",
            "ru": "Доступное имя или id элемента с подписью."
          },
          "required": false
        },
        {
          "name": "style / className",
          "type": "CSSProperties / string",
          "defaultValue": "—",
          "description": {
            "en": "Inline styles or a CSS class.",
            "ru": "Встроенные стили или CSS-класс."
          },
          "required": false
        }
      ]
    },
    {
      "name": "CSS variables",
      "props": [
        {
          "name": "--rkr-scrollbar-size",
          "type": "CSS length",
          "defaultValue": "10px",
          "description": {
            "en": "Scrollbar thickness",
            "ru": "Толщина полосы прокрутки"
          },
          "required": false
        },
        {
          "name": "--rkr-scrollbar-thumb-color",
          "type": "CSS color",
          "defaultValue": "var(--rkr-color-text-tertiary)",
          "description": {
            "en": "Thumb color",
            "ru": "Цвет бегунка"
          },
          "required": false
        },
        {
          "name": "--rkr-scrollbar-thumb-hover-color",
          "type": "CSS color",
          "defaultValue": "var(--rkr-color-text-secondary)",
          "description": {
            "en": "Thumb hover color",
            "ru": "Цвет бегунка при наведении"
          },
          "required": false
        },
        {
          "name": "--rkr-scrollbar-track-color",
          "type": "CSS color",
          "defaultValue": "transparent",
          "description": {
            "en": "Track color",
            "ru": "Цвет дорожки"
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Name the scroll region with aria-label or aria-labelledby.",
      "ru": "Задайте имя области прокрутки через aria-label или aria-labelledby."
    },
    {
      "en": "Use viewportRef for access to scrollTop, scrollLeft and scrollTo.",
      "ru": "Используйте viewportRef для доступа к scrollTop, scrollLeft и scrollTo."
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
      "keys": "Arrow keys / Page Up / Page Down",
      "description": {
        "en": "Scrolls the focused viewport using browser behavior.",
        "ru": "Прокручивает viewport в фокусе по правилам браузера."
      }
    },
    {
      "keys": "Home / End",
      "description": {
        "en": "Moves toward the start or end using native platform behavior.",
        "ru": "Перемещает к началу или концу по правилам платформы."
      }
    }
  ],
  "source": "ScrollArea/ScrollArea.tsx"
};
