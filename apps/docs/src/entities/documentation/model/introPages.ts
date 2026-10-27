import type { Localized } from './types';

interface IntroSection { id: string; title: Localized; body: Localized; code?: string; links?: { to: string; label: Localized }[] }
export interface IntroPageData { id: 'about' | 'recipes'; title: Localized; lead: Localized; sections: IntroSection[] }

export const aboutIntro: IntroPageData = {
  "id": "about",
  "title": {
    "en": "About us",
    "ru": "О нас"
  },
  "lead": {
    "en": "Rikkora UI is a library of React components for forms, navigation and application layouts.",
    "ru": "Rikkora UI — библиотека React-компонентов для форм, навигации и интерфейсов приложений."
  },
  "sections": [
    {
      "id": "idea",
      "title": {
        "en": "The idea",
        "ru": "Идея"
      },
      "body": {
        "en": "Components share design tokens and support light and dark themes.",
        "ru": "Компоненты используют общие токены оформления и поддерживают светлую и тёмную темы."
      }
    },
    {
      "id": "principles",
      "title": {
        "en": "What matters to us",
        "ru": "Что для нас важно"
      },
      "body": {
        "en": "Simple controls use native HTML elements. Dialogs and menus support keyboard navigation and focus management.",
        "ru": "Простые контролы работают на нативных HTML-элементах. Диалоги и меню поддерживают клавиатуру и управление фокусом."
      },
      "links": [
        {
          "to": "/docs#conventions",
          "label": {
            "en": "API conventions",
            "ru": "Соглашения API"
          }
        },
        {
          "to": "/docs#themes",
          "label": {
            "en": "Themes and styling",
            "ru": "Темы и стилизация"
          }
        }
      ]
    },
    {
      "id": "participate",
      "title": {
        "en": "Build with us",
        "ru": "Можно поучаствовать"
      },
      "body": {
        "en": "Source code is available on GitHub. Report a bug or suggest a change in Issues.",
        "ru": "Исходники доступны на GitHub. Об ошибках и предложениях можно написать в Issues."
      },
      "links": [
        {
          "to": "https://github.com/RezyJS/rikkora",
          "label": {
            "en": "Source on GitHub",
            "ru": "Исходники на GitHub"
          }
        },
        {
          "to": "https://github.com/RezyJS/rikkora/issues",
          "label": {
            "en": "Report an issue or suggest an idea",
            "ru": "Сообщить о проблеме или предложить идею"
          }
        }
      ]
    }
  ]
};

export const recipesIntro: IntroPageData = {
  "id": "recipes",
  "title": {
    "en": "Recipes",
    "ru": "Рецепты"
  },
  "lead": {
    "en": "Examples of forms, confirmation dialogs and notifications built with Rikkora components.",
    "ru": "Примеры форм, диалогов подтверждения и уведомлений из компонентов Rikkora."
  },
  "sections": [
    {
      "id": "form",
      "title": {
        "en": "A form with validation",
        "ru": "Форма с валидацией"
      },
      "body": {
        "en": "Use Field for the label and error message, and Input for email entry. The browser validates the address before submission.",
        "ru": "Используйте Field для подписи и сообщения об ошибке, а Input — для ввода email. Браузер проверяет адрес перед отправкой."
      },
      "code": "import { useState } from 'react';\nimport { Box, Button, Field, Input, Stack, Text } from '@rikkora/ui';\n\nexport function EmailForm() {\n  const [submitted, setSubmitted] = useState(false);\n  return (\n    <Box as=\"form\" onSubmit={(event) => {\n      event.preventDefault();\n      setSubmitted(true);\n    }}>\n      <Stack>\n        <Field label=\"Email\" description=\"Use your work address.\" required>\n          <Input name=\"email\" type=\"email\" required\n            onChange={() => setSubmitted(false)} />\n        </Field>\n        <Button type=\"submit\">Continue</Button>\n        {submitted && <Text role=\"status\">Email is valid.</Text>}\n      </Stack>\n    </Box>\n  );\n}",
      "links": [
        {
          "to": "/docs/components/field",
          "label": {
            "en": "Field API",
            "ru": "API Field"
          }
        },
        {
          "to": "/docs/components/input",
          "label": {
            "en": "Input API",
            "ru": "API Input"
          }
        }
      ]
    },
    {
      "id": "confirmation",
      "title": {
        "en": "A confirmation dialog",
        "ru": "Диалог подтверждения"
      },
      "body": {
        "en": "Use Dialog to ask for confirmation before an action. The cancel button closes the window without running the action.",
        "ru": "Используйте Dialog для подтверждения действия. Кнопка отмены закрывает окно без выполнения действия."
      },
      "code": "import { useState } from 'react';\nimport { Button, Dialog, Flex } from '@rikkora/ui';\n\nexport function ConfirmDialog({ onConfirm }: { onConfirm: () => void }) {\n  const [open, setOpen] = useState(false);\n  return (\n    <Dialog.Root open={open} onOpenChange={setOpen}>\n      <Dialog.Trigger asChild><Button>Publish</Button></Dialog.Trigger>\n      <Dialog.Content>\n        <Dialog.Title>Publish this draft?</Dialog.Title>\n        <Dialog.Description>The draft will become visible to your team.</Dialog.Description>\n        <Flex justify=\"end\" gap={2}>\n          <Dialog.Close asChild><Button variant=\"secondary\">Cancel</Button></Dialog.Close>\n          <Button onClick={() => { onConfirm(); setOpen(false); }}>Confirm</Button>\n        </Flex>\n      </Dialog.Content>\n    </Dialog.Root>\n  );\n}",
      "links": [
        {
          "to": "/docs/components/dialog",
          "label": {
            "en": "Dialog API",
            "ru": "API Dialog"
          }
        }
      ]
    },
    {
      "id": "notifications",
      "title": {
        "en": "A notification after saving",
        "ru": "Уведомление после сохранения"
      },
      "body": {
        "en": "Wrap the component in ToastProvider and call useToast after saving succeeds.",
        "ru": "Оберните компонент в ToastProvider и вызовите useToast после успешного сохранения."
      },
      "code": "import { useState } from 'react';\nimport { Button, ToastProvider, useToast } from '@rikkora/ui';\n\nfunction SaveButton({ save }: { save: () => Promise<void> }) {\n  const { toast } = useToast();\n  const [loading, setLoading] = useState(false);\n  async function handleSave() {\n    setLoading(true);\n    try {\n      await save();\n      toast({ title: 'Saved', description: 'Your changes are saved.' });\n    } catch {\n      toast({ title: 'Could not save', description: 'Please try again.' });\n    } finally {\n      setLoading(false);\n    }\n  }\n  return <Button loading={loading} onClick={() => { void handleSave(); }}>Save</Button>;\n}\n\nexport function SaveAction({ save }: { save: () => Promise<void> }) {\n  return <ToastProvider><SaveButton save={save} /></ToastProvider>;\n}",
      "links": [
        {
          "to": "/docs/components/toast",
          "label": {
            "en": "Toast API",
            "ru": "API Toast"
          }
        },
        {
          "to": "/docs/components/button",
          "label": {
            "en": "Button API",
            "ru": "API Button"
          }
        }
      ]
    }
  ]
};

export const introPages = [aboutIntro, recipesIntro];
