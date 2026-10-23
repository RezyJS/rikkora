import { type ExampleConfiguration } from '../exampleConfiguration';
import { Stack, useToast, Button } from '@rikkora/ui';
import { usePreferences } from '../../../preferences/PreferencesContext';

export function ToastExample({
  text,
  configuration = {},
}: {
  text?: string;
  configuration?: ExampleConfiguration;
}) {
  const { toast, dismissAll } = useToast();
  const { language } = usePreferences();
  const ru = language === 'ru';
  return (
    <Stack>
      <Button
        onClick={() =>
          toast({
            title: text ?? (ru ? 'Сохранено' : 'Saved'),
            description:
              ru ? 'Изменения сохранены.' : 'Your changes are saved.',
            ...configuration.ToastMessage,
          })
        }
      >
        {ru ? 'Показать уведомление' : 'Show notification'}
      </Button>
      <Button
        variant='ghost'
        onClick={dismissAll}
      >
        {ru ? 'Закрыть все' : 'Dismiss all'}
      </Button>
    </Stack>
  );
}
