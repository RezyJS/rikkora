import type { ComponentDoc } from '../types';

export const confirmButtonDoc: ComponentDoc = {
  "name": "ConfirmButton",
  "slug": "confirm-button",
  "category": "forms",
  "summary": {
    "en": "Opens a confirmation dialog. Waits for an asynchronous action and keeps the dialog open when the action fails.",
    "ru": "Открывает диалог подтверждения. Ожидает асинхронное действие и сохраняет диалог открытым при ошибке."
  },
  "usage": "import { ConfirmButton } from '@rikkora/ui';\n\nexport function Example() {\n  return <ConfirmButton title=\"Delete item?\" description=\"This action cannot be undone.\"\n    onConfirm={() => console.log('Confirmed')} confirmText=\"Delete\" cancelText=\"Cancel\">Delete</ConfirmButton>;\n}",
  "api": [
    {
      "name": "ConfirmButton",
      "props": [
        {
          "name": "variant",
          "type": "'primary' | 'secondary' | 'outline' | 'ghost' | 'soft' | 'danger'",
          "defaultValue": "'danger'",
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
          "name": "tone",
          "type": "'primary' | 'danger' | 'success'",
          "defaultValue": "'danger'",
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
          "name": "title",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Title of the confirmation dialog.",
            "ru": "Заголовок диалога подтверждения."
          },
          "required": true
        },
        {
          "name": "description",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Explains the action and its consequences.",
            "ru": "Объясняет действие и его последствия."
          },
          "required": false
        },
        {
          "name": "confirmText",
          "type": "ReactNode",
          "defaultValue": "'Confirm'",
          "description": {
            "en": "Label of the confirmation action.",
            "ru": "Подпись действия подтверждения."
          },
          "required": false
        },
        {
          "name": "cancelText",
          "type": "ReactNode",
          "defaultValue": "'Cancel'",
          "description": {
            "en": "Label of the cancel action, focused when the dialog opens.",
            "ru": "Подпись отмены. Эта кнопка получает фокус при открытии."
          },
          "required": false
        },
        {
          "name": "pendingText",
          "type": "ReactNode",
          "defaultValue": "'Confirming…'",
          "description": {
            "en": "Confirmation label while the action is pending.",
            "ru": "Подпись подтверждения во время выполнения действия."
          },
          "required": false
        },
        {
          "name": "errorText",
          "type": "ReactNode",
          "defaultValue": "'Could not complete the action. Try again.'",
          "description": {
            "en": "Fallback error text when onConfirmError is omitted.",
            "ru": "Текст ошибки, если onConfirmError не задан."
          },
          "required": false
        },
        {
          "name": "onConfirm",
          "type": "() => void | Promise<void>",
          "defaultValue": "—",
          "description": {
            "en": "Runs after confirmation. Resolving closes the dialog; rejecting keeps it open.",
            "ru": "Выполняется после подтверждения. Успех закрывает диалог, ошибка оставляет его открытым."
          },
          "required": true
        },
        {
          "name": "onConfirmError",
          "type": "(error: unknown) => void",
          "defaultValue": "—",
          "description": {
            "en": "Handles the error instead of the built-in error message.",
            "ru": "Обрабатывает ошибку вместо встроенного сообщения."
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
      "en": "Opening focuses Cancel. Tab stays in the dialog. Escape cancels while no action is pending.",
      "ru": "При открытии фокус получает отмена. Tab остаётся внутри диалога. Escape отменяет подтверждение, если действие ещё не выполняется."
    }
  ],
  "keyboard": [
    {
      "keys": "Keyboard",
      "description": {
        "en": "Opening focuses Cancel. Tab stays in the dialog. Escape cancels while no action is pending.",
        "ru": "При открытии фокус получает отмена. Tab остаётся внутри диалога. Escape отменяет подтверждение, если действие ещё не выполняется."
      }
    }
  ],
  "source": "Button/ConfirmButton.tsx"
};
