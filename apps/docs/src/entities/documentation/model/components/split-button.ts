import type { ComponentDoc } from '../types';

export const splitButtonDoc: ComponentDoc = {
  "name": "SplitButton",
  "slug": "split-button",
  "category": "forms",
  "summary": {
    "en": "Combines a primary action with a separate menu trigger for related actions.",
    "ru": "Объединяет основное действие и отдельную кнопку меню дополнительных действий."
  },
  "usage": "import { DropdownMenu, SplitButton } from '@rikkora/ui';\n\nexport function Example() {\n  return <SplitButton menuLabel=\"More actions\" onClick={() => console.log('Save')}\n    menu={<DropdownMenu.Item onSelect={() => console.log('Save as')}>Save as…</DropdownMenu.Item>}>Save</SplitButton>;\n}",
  "api": [
    {
      "name": "SplitButton",
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
          "name": "loading",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Shows a loading indicator and prevents repeated clicks.",
            "ru": "Показывает индикатор загрузки и блокирует повторное нажатие."
          },
          "required": false
        },
        {
          "name": "type",
          "type": "'button' | 'submit' | 'reset'",
          "defaultValue": "'button'",
          "description": {
            "en": "Controls whether the button submits or resets a form.",
            "ru": "Задаёт поведение кнопки в форме: действие, отправка или сброс."
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
          "name": "loadingText",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Replaces the label while loading. Center placement shows only the spinner visually.",
            "ru": "Заменяет подпись во время загрузки. При center визуально остаётся только спиннер."
          },
          "required": false
        },
        {
          "name": "loadingPlacement",
          "type": "'start' | 'end' | 'center'",
          "defaultValue": "'start'",
          "description": {
            "en": "Spinner position while loading. Icon sizes always use center.",
            "ru": "Положение спиннера во время загрузки. Для размеров icon всегда используется center."
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
          "name": "size",
          "type": "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          "defaultValue": "'md'",
          "description": {
            "en": "Button height and padding. Override the label size with textSize.",
            "ru": "Высота и отступы кнопки. Размер подписи переопределяется через textSize."
          },
          "required": false
        },
        {
          "name": "menu",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "DropdownMenu items and other menu content.",
            "ru": "Элементы DropdownMenu и другое содержимое меню."
          },
          "required": true
        },
        {
          "name": "menuLabel",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "Accessible name of the arrow button.",
            "ru": "Доступное имя кнопки со стрелкой."
          },
          "required": true
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
      "en": "Tab reaches each part. Enter activates the action or opens the menu. Arrow keys navigate the menu; Escape closes it.",
      "ru": "Tab фокусирует каждую часть. Enter запускает действие или открывает меню. Стрелки перемещают фокус в меню, Escape закрывает его."
    }
  ],
  "keyboard": [
    {
      "keys": "Keyboard",
      "description": {
        "en": "Tab reaches each part. Enter activates the action or opens the menu. Arrow keys navigate the menu; Escape closes it.",
        "ru": "Tab фокусирует каждую часть. Enter запускает действие или открывает меню. Стрелки перемещают фокус в меню, Escape закрывает его."
      }
    }
  ],
  "source": "Button/SplitButton.tsx"
};
