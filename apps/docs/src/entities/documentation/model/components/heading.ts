import type { ComponentDoc } from '../types';

export const headingDoc: ComponentDoc = {
  "name": "Heading",
  "slug": "heading",
  "category": "foundation",
  "summary": {
    "en": "Displays a heading. Its visual size is independent of the heading level.",
    "ru": "Выводит заголовок. Визуальный размер настраивается независимо от уровня заголовка."
  },
  "usage": "import { Heading } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Heading level={2} size=\"3xl\">Rikkora UI</Heading>\n  );\n}",
  "api": [
    {
      "name": "Heading",
      "props": [
        {
          "name": "level",
          "type": "1 | 2 | 3 | 4 | 5 | 6",
          "defaultValue": "2",
          "description": {
            "en": "The heading level, from h1 to h6.",
            "ru": "Уровень заголовка от h1 до h6."
          },
          "required": false
        },
        {
          "name": "size",
          "type": "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
          "defaultValue": "'2xl'",
          "description": {
            "en": "Controls the component size.",
            "ru": "Задаёт размер компонента."
          },
          "required": false
        }
      ]
    }
  ],
  "accessibility": [
    {
      "en": "Keep heading levels in order",
      "ru": "Соблюдайте порядок уровней заголовков"
    }
  ],
  "keyboard": [],
  "source": "Foundation/Heading.tsx"
};
