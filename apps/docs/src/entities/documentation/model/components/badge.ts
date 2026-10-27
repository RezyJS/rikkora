import type { ComponentDoc } from '../types';

export const badgeDoc: ComponentDoc = {
  "name": "Badge",
  "slug": "badge",
  "category": "foundation",
  "summary": {
    "en": "A compact label for a status, category or count.",
    "ru": "Компактная метка для статуса, категории или количества."
  },
  "usage": "import { Badge } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n    <Badge variant=\"primary\">New</Badge>\n  );\n}",
  "api": [
    {
      "name": "Badge",
      "props": [
        {
          "name": "variant",
          "type": "'neutral' | 'primary' | 'danger'",
          "defaultValue": "'neutral'",
          "description": {
            "en": "Changes the visual appearance of the component.",
            "ru": "Задаёт вариант оформления компонента."
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
  "keyboard": [],
  "source": "Foundation/Badge.tsx"
};
