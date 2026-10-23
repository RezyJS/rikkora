import { localized, type Localized } from './componentDocs';

interface IntroSection {
  id: string;
  title: Localized;
  body: Localized;
  code?: string;
  links?: { to: string; label: Localized }[];
}
export interface IntroPageData {
  id: 'about' | 'recipes';
  title: Localized;
  lead: Localized;
  sections: IntroSection[];
}

export const introPages: IntroPageData[] = [
  {
    id: 'about',
    title: localized('About us', 'О нас'),
    lead: localized(
      "Rikkora UI is a library of React components for forms, navigation and application layouts.",
      "Rikkora UI — библиотека React-компонентов для форм, навигации и интерфейсов приложений.",
    ),
    sections: [
      {
        id: 'idea',
        title: localized('The idea', 'Идея'),
        body: localized(
          "Components share design tokens and support light and dark themes.",
          "Компоненты используют общие токены оформления и поддерживают светлую и тёмную темы.",
        ),
      },
      {
        id: 'principles',
        title: localized('What matters to us', 'Что для нас важно'),
        body: localized(
          "Simple controls use native HTML elements. Dialogs and menus support keyboard navigation and focus management.",
          "Простые контролы работают на нативных HTML-элементах. Диалоги и меню поддерживают клавиатуру и управление фокусом.",
        ),
        links: [
          {
            to: '/docs#conventions',
            label: localized('API conventions', 'Соглашения API'),
          },
          {
            to: '/docs#themes',
            label: localized('Themes and styling', 'Темы и стилизация'),
          },
        ],
      },
      {
        id: 'participate',
        title: localized('Build with us', 'Можно поучаствовать'),
        body: localized(
          "Source code is available on GitHub. Report a bug or suggest a change in Issues.",
          "Исходники доступны на GitHub. Об ошибках и предложениях можно написать в Issues.",
        ),
        links: [
          {
            to: 'https://github.com/RezyJS/rikkora',
            label: localized('Source on GitHub', 'Исходники на GitHub'),
          },
          {
            to: 'https://github.com/RezyJS/rikkora/issues',
            label: localized(
              'Report an issue or suggest an idea',
              'Сообщить о проблеме или предложить идею',
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'recipes',
    title: localized('Recipes', 'Рецепты'),
    lead: localized(
      "Examples of forms, confirmation dialogs and notifications built with Rikkora components.",
      "Примеры форм, диалогов подтверждения и уведомлений из компонентов Rikkora.",
    ),
    sections: [
      {
        id: 'form',
        title: localized('A form with validation', 'Форма с валидацией'),
        body: localized(
          "Use Field for the label and error message, and Input for email entry. The browser validates the address before submission.",
          "Используйте Field для подписи и сообщения об ошибке, а Input — для ввода email. Браузер проверяет адрес перед отправкой.",
        ),
        code: `import { useState } from 'react';
import { Box, Button, Field, Input, Stack, Text } from '@rikkora/ui';

export function EmailForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Box as="form" onSubmit={(event) => {
      event.preventDefault();
      setSubmitted(true);
    }}>
      <Stack>
        <Field label="Email" description="Use your work address." required>
          <Input name="email" type="email" required
            onChange={() => setSubmitted(false)} />
        </Field>
        <Button type="submit">Continue</Button>
        {submitted && <Text role="status">Email is valid.</Text>}
      </Stack>
    </Box>
  );
}`,
        links: [
          {
            to: '/docs/components/field',
            label: localized('Field API', 'API Field'),
          },
          {
            to: '/docs/components/input',
            label: localized('Input API', 'API Input'),
          },
        ],
      },
      {
        id: 'confirmation',
        title: localized('A confirmation dialog', 'Диалог подтверждения'),
        body: localized(
          "Use Dialog to ask for confirmation before an action. The cancel button closes the window without running the action.",
          "Используйте Dialog для подтверждения действия. Кнопка отмены закрывает окно без выполнения действия.",
        ),
        code: `import { useState } from 'react';
import { Button, Dialog, Flex } from '@rikkora/ui';

export function ConfirmDialog({ onConfirm }: { onConfirm: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild><Button>Publish</Button></Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Publish this draft?</Dialog.Title>
        <Dialog.Description>The draft will become visible to your team.</Dialog.Description>
        <Flex justify="end" gap={2}>
          <Dialog.Close asChild><Button variant="secondary">Cancel</Button></Dialog.Close>
          <Button onClick={() => { onConfirm(); setOpen(false); }}>Confirm</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}`,
        links: [
          {
            to: '/docs/components/dialog',
            label: localized('Dialog API', 'API Dialog'),
          },
        ],
      },
      {
        id: 'notifications',
        title: localized(
          'A notification after saving',
          'Уведомление после сохранения',
        ),
        body: localized(
          "Wrap the component in ToastProvider and call useToast after saving succeeds.",
          "Оберните компонент в ToastProvider и вызовите useToast после успешного сохранения.",
        ),
        code: `import { useState } from 'react';
import { Button, ToastProvider, useToast } from '@rikkora/ui';

function SaveButton({ save }: { save: () => Promise<void> }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  async function handleSave() {
    setLoading(true);
    try {
      await save();
      toast({ title: 'Saved', description: 'Your changes are saved.' });
    } catch {
      toast({ title: 'Could not save', description: 'Please try again.' });
    } finally {
      setLoading(false);
    }
  }
  return <Button loading={loading} onClick={() => { void handleSave(); }}>Save</Button>;
}

export function SaveAction({ save }: { save: () => Promise<void> }) {
  return <ToastProvider><SaveButton save={save} /></ToastProvider>;
}`,
        links: [
          {
            to: '/docs/components/toast',
            label: localized('Toast API', 'API Toast'),
          },
          {
            to: '/docs/components/button',
            label: localized('Button API', 'API Button'),
          },
        ],
      },
    ],
  },
];
