import {
  Link,
  Text,
  Heading,
  Box,
  Stack,
  Separator,
  Badge,
  Card,
  Button,
} from '@rikkora/ui';
import styles from '../Showcase.module.css';
import type { AdditionalExample } from '../componentNames';
import type { ExampleRenderContext } from './types';

export function renderFoundationExample(
  name: AdditionalExample,
  context: ExampleRenderContext,
) {
  const { ru, content } = context;
  switch (name) {
    case 'Link':
      return (
        <Link href='#setup'>
          {ru ? 'Перейти к подключению' : 'Go to setup'}
        </Link>
      );
    case 'Text':
      return (
        <Stack>
          <Text size='lg'>Rikkora UI</Text>
          <Text
            as='p'
            tone='secondary'
          >
            {ru ? 'Дополнительный текст' : 'Supporting text'}
          </Text>
          <Text
            as='strong'
            size='sm'
          >
            {ru ? 'Выделенный текст' : 'Emphasized text'}
          </Text>
        </Stack>
      );
    case 'Heading':
      return (
        <Stack>
          <Heading
            level={2}
            size='3xl'
          >
            Rikkora UI
          </Heading>
          <Heading
            level={3}
            size='lg'
          >
            {ru ?
              'Семантика и размер независимы'
            : 'Independent level and size'}
          </Heading>
        </Stack>
      );
    case 'Box':
      return (
        <Box
          padding={6}
          className={styles.item}
        >
          {content}
        </Box>
      );
    case 'Stack':
      return (
        <Stack gap={3}>
          <Badge>{ru ? 'Первый' : 'First'}</Badge>
          <Badge>{ru ? 'Второй' : 'Second'}</Badge>
          <Badge>{ru ? 'Третий' : 'Third'}</Badge>
        </Stack>
      );
    case 'Separator':
      return (
        <Stack style={{ width: '100%' }}>
          <Text>{content}</Text>
          <Separator />
          <Stack
            direction='row'
            gap={4}
          >
            <Text>A</Text>
            <Separator orientation='vertical' />
            <Text>B</Text>
          </Stack>
        </Stack>
      );
    case 'Badge':
      return (
        <Stack
          direction='row'
          wrap
        >
          <Badge>{ru ? 'Черновик' : 'Draft'}</Badge>
          <Badge variant='primary'>{ru ? 'Новый' : 'New'}</Badge>
          <Badge variant='danger'>{ru ? 'Ошибка' : 'Error'}</Badge>
        </Stack>
      );
    case 'Card':
      return (
        <Card variant='filled'>
          <Stack>
            <Heading
              level={3}
              size='lg'
            >
              Rikkora UI
            </Heading>
            <Text tone='secondary'>{content}</Text>
            <Button>{ru ? 'Продолжить' : 'Continue'}</Button>
          </Stack>
        </Card>
      );
  }
}
