import { useState } from 'react';
import {
  Card,
  Box,
  Stack,
  Heading,
  Text,
  Field,
  Input,
  Flex,
  Checkbox,
  Button,
  useToast,
} from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function SignInExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(true);

  return (
    <Card
      variant='filled'
      className={styles.sample}
      padding={5}
    >
      <Box
        as='form'
        onSubmit={(event) => {
          event.preventDefault();
          toast({
            title: ru ? 'Данные готовы' : 'Form ready',
            description: email,
          });
        }}
      >
        <Stack gap={4}>
          <Stack gap={1}>
            <Heading
              level={3}
              size='xl'
            >
              {ru ? 'Войти в аккаунт' : 'Sign in'}
            </Heading>
            <Text
              size='sm'
              tone='secondary'
            >
              {ru ? 'С возвращением.' : 'Welcome back.'}
            </Text>
          </Stack>
          <Field
            label='Email'
            required
          >
            <Input
              name='email'
              type='email'
              placeholder='you@example.com'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Field>
          <Field
            label={ru ? 'Пароль' : 'Password'}
            required
          >
            <Input
              name='password'
              type='password'
              placeholder='••••••••'
              required
              minLength={4}
            />
          </Field>
          <Flex
            as='label'
            align='center'
            gap={2}
          >
            <Checkbox
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <Text size='sm'>{ru ? 'Запомнить меня' : 'Remember me'}</Text>
          </Flex>
          <Button type='submit'>{ru ? 'Продолжить' : 'Continue'}</Button>
        </Stack>
      </Box>
    </Card>
  );
}
