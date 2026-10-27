import type { ComponentDoc } from '../types';

export const buttonGroupDoc: ComponentDoc = {
  "name": "ButtonGroup",
  "slug": "button-group",
  "category": "forms",
  "summary": {
    "en": "Joins buttons with shared edges. Each button keeps its own action and keyboard behavior.",
    "ru": "Объединяет кнопки общими границами. Каждая кнопка сохраняет собственное действие и управление с клавиатуры."
  },
  "usage": "import { Button, ButtonGroup } from '@rikkora/ui';\n\nexport function Example() {\n  return <ButtonGroup aria-label=\"Actions\"><Button>Save</Button><Button>Cancel</Button></ButtonGroup>;\n}",
  "api": [
    {
      "name": "ButtonGroup",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "defaultValue": "—",
          "description": {
            "en": "Buttons to join in the group.",
            "ru": "Кнопки, которые нужно объединить."
          },
          "required": true
        },
        {
          "name": "orientation",
          "type": "'horizontal' | 'vertical'",
          "defaultValue": "'horizontal'",
          "description": {
            "en": "Direction of the joined buttons.",
            "ru": "Направление расположения кнопок."
          },
          "required": false
        },
        {
          "name": "fullWidth",
          "type": "boolean",
          "defaultValue": "false",
          "description": {
            "en": "Fills the parent width and distributes space between buttons.",
            "ru": "Занимает ширину родителя и распределяет её между кнопками."
          },
          "required": false
        },
        {
          "name": "aria-label",
          "type": "string",
          "defaultValue": "—",
          "description": {
            "en": "Accessible name of the button group.",
            "ru": "Доступное имя группы кнопок."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Tab focuses each button separately. Enter and Space activate the focused button.",
      "ru": "Tab последовательно фокусирует кнопки. Enter и Space активируют кнопку в фокусе."
    }
  ],
  "keyboard": [
    {
      "keys": "Keyboard",
      "description": {
        "en": "Tab focuses each button separately. Enter and Space activate the focused button.",
        "ru": "Tab последовательно фокусирует кнопки. Enter и Space активируют кнопку в фокусе."
      }
    }
  ],
  "source": "Button/ButtonGroup.tsx"
};
