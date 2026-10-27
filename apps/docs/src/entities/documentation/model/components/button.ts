import type { ComponentDoc } from '../types';

export const buttonDoc: ComponentDoc = {
  "name": "Button",
  "slug": "button",
  "category": "forms",
  "summary": {
    "en": "A button for actions and form submission, with content slots, color tones, loading and toggle appearance.",
    "ru": "Кнопка для действий и отправки форм: слоты содержимого, цветовые акценты, загрузка и активное состояние."
  },
  "usage": "import { Button } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Button variant=\"primary\" size=\"md\">Save changes</Button>\n  );\n}",
  "api": [
    {
      "name": "Button",
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
          "name": "pressed",
          "type": "boolean",
          "defaultValue": "—",
          "description": {
            "en": "Sets aria-pressed and the selected appearance. Use ToggleButton to manage toggling.",
            "ru": "Задаёт aria-pressed и активное оформление. Для переключения состояния используйте ToggleButton."
          },
          "required": false
        },
        {
          "name": "asChild",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Applies the button appearance to one child element. For links, ButtonLink also supports router components.",
            "ru": "Применяет оформление кнопки к одному дочернему элементу. Для ссылок ButtonLink также поддерживает компоненты роутера."
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
      "en": "Provide aria-label for icon-only buttons and aria-pressed for toggle buttons.",
      "ru": "Для кнопки без текста задайте aria-label, для переключателя — aria-pressed."
    },
    {
      "en": "Native buttons support Enter and Space. asChild retains the semantics of its child; use a link for navigation and a button for actions.",
      "ru": "Нативные кнопки поддерживают Enter и Space. asChild сохраняет семантику дочернего элемента: ссылка служит для переходов, кнопка — для действий."
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
  "source": "Button/Button.tsx"
};
