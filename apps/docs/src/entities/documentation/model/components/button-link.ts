import type { ComponentDoc } from '../types';

export const buttonLinkDoc: ComponentDoc = {
  "name": "ButtonLink",
  "slug": "button-link",
  "category": "navigation",
  "summary": {
    "en": "A navigation link with button styling. Supports URLs, anchors and router links.",
    "ru": "Ссылка с оформлением кнопки для перехода по адресу, к разделу страницы или через роутер."
  },
  "usage": "import { ButtonLink } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <ButtonLink href=\"/docs\" variant=\"secondary\">Documentation</ButtonLink>\n  );\n}",
  "api": [
    {
      "name": "ButtonLink",
      "props": [
        {
          "name": "variant",
          "type": "'primary' | 'secondary' | 'outline' | 'ghost' | 'soft' | 'danger'",
          "defaultValue": "'primary'",
          "description": {
            "en": "Changes the visual appearance of the component.",
            "ru": "Задаёт вариант оформления компонента."
          },
          "required": false
        },
        {
          "name": "size",
          "type": "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg' | 'icon-xl'",
          "defaultValue": "'md'",
          "description": {
            "en": "Button height and padding. Override the label size with textSize.",
            "ru": "Высота и отступы кнопки. Размер подписи переопределяется через textSize."
          },
          "required": false
        },
        {
          "name": "radius",
          "type": "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",
          "defaultValue": "'sm'",
          "description": {
            "en": "Corner radius",
            "ru": "Параметр скругления"
          },
          "required": false
        },
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
          "name": "aria-label",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "An accessible name for the component.",
            "ru": "Доступное имя компонента."
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
        },
        {
          "name": "tone",
          "type": "'primary' | 'danger' | 'success'",
          "defaultValue": "'primary'",
          "description": {
            "en": "Accent color for primary, outline, ghost and soft variants. The danger variant remains red.",
            "ru": "Цвет акцента для primary, outline, ghost и soft. Вариант danger всегда красный."
          },
          "required": false
        },
        {
          "name": "startContent",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Content before the label: an icon, text or another element.",
            "ru": "Содержимое перед подписью: иконка, текст или другой элемент."
          },
          "required": false
        },
        {
          "name": "endContent",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Content after the label, such as an arrow or a badge.",
            "ru": "Содержимое после подписи, например стрелка или бейдж."
          },
          "required": false
        },
        {
          "name": "fullWidth",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Fills the available width of the parent.",
            "ru": "Занимает доступную ширину родителя."
          },
          "required": false
        },
        {
          "name": "compact",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Reduces horizontal padding without changing the height. Icon sizes retain square dimensions.",
            "ru": "Уменьшает горизонтальные отступы без изменения высоты. Размеры icon остаются квадратными."
          },
          "required": false
        },
        {
          "name": "disableAnimation",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Disables transitions, press scaling, spinner rotation and ripple for this button.",
            "ru": "Отключает переходы, уменьшение при нажатии, вращение спиннера и волну у этой кнопки."
          },
          "required": false
        },
        {
          "name": "ripple",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Adds a press ripple. Disabled by disableAnimation and reduced-motion preferences.",
            "ru": "Добавляет волну при нажатии. Отключается через disableAnimation и системную настройку уменьшения движения."
          },
          "required": false
        },
        {
          "name": "textSize",
          "type": "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          "defaultValue": "—",
          "description": {
            "en": "Label size. Falls back to size when omitted.",
            "ru": "Размер подписи. По умолчанию зависит от size."
          },
          "required": false
        },
        {
          "name": "fontWeight",
          "type": "'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold'",
          "defaultValue": "'medium'",
          "description": {
            "en": "Label font weight.",
            "ru": "Насыщенность шрифта подписи."
          },
          "required": false
        },
        {
          "name": "italic",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Italicizes the label.",
            "ru": "Курсивное начертание подписи."
          },
          "required": false
        },
        {
          "name": "underline",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Underlines the label.",
            "ru": "Подчёркивание подписи."
          },
          "required": false
        },
        {
          "name": "strikethrough",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Adds a line through the label. Can be combined with underline.",
            "ru": "Зачёркивание подписи. Можно сочетать с underline."
          },
          "required": false
        },
        {
          "name": "textTransform",
          "type": "'none' | 'uppercase' | 'lowercase' | 'capitalize'",
          "defaultValue": "'none'",
          "description": {
            "en": "Changes the displayed letter case.",
            "ru": "Регистр отображаемого текста."
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
  "source": "Button/ButtonLink.tsx"
};
