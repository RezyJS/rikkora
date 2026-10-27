import {
  Text,
  Stack,
  Slider,
  Field,
  Alert,
  ToastProvider,
  Spinner,
  Progress,
  Skeleton,
} from '@rikkora/ui';
import type { AdditionalExample } from '@/entities/documentation';
import type { ExampleRenderContext } from './types';
import { ToastExample } from './ToastExample';

export function renderFeedbackExample(
  name: AdditionalExample,
  context: ExampleRenderContext,
) {
  const { ru, content, text, configuration, volume, setVolume } = context;
  switch (name) {
    case 'Alert':
      return (
        <Stack>
          <Alert title={ru ? 'Информация' : 'Information'}>{content}</Alert>
          <Alert
            variant='danger'
            title={ru ? 'Ошибка' : 'Error'}
          >
            {ru ? 'Проверьте введённые данные.' : 'Check your input.'}
          </Alert>
        </Stack>
      );
    case 'Toast':
      return (
        <ToastProvider
          closeLabel={ru ? 'Закрыть уведомление' : 'Dismiss notification'}
          viewportLabel={ru ? 'Уведомления' : 'Notifications'}
        >
          <ToastExample
            text={text}
            configuration={configuration}
          />
        </ToastProvider>
      );
    case 'Spinner':
      return (
        <Stack
          direction='row'
          align='center'
          role='status'
        >
          <Spinner size='sm' />
          <Spinner />
          <Spinner size='lg' />
          <Text>{ru ? 'Загрузка…' : 'Loading…'}</Text>
        </Stack>
      );
    case 'Progress':
      return (
        <Stack style={{ width: '100%' }}>
          <Field label={`${ru ? 'Загрузка' : 'Upload'}: ${volume}%`}>
            <Slider
              value={volume}
              onChange={(event) => setVolume(event.target.value)}
            />
          </Field>
          <Progress
            value={Number(volume)}
            aria-label={ru ? 'Прогресс загрузки' : 'Upload progress'}
          />
          <Progress aria-label={ru ? 'Ожидание' : 'Waiting'} />
        </Stack>
      );
    case 'Skeleton':
      return (
        <Stack style={{ width: '100%' }}>
          <Skeleton
            shape='circle'
            style={{ width: '3rem' }}
          />
          <Skeleton shape='text' />
          <Skeleton
            shape='text'
            style={{ width: '70%' }}
          />
          <Skeleton
            animated={false}
            style={{ height: '3rem' }}
          />
        </Stack>
      );
  }
}
