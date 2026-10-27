import {
  Box,
  Flex,
  Stack,
  Switch,
  RadioGroup,
  Select,
  Slider,
  Field,
  FormControl,
  Button,
  Input,
  Checkbox,
  Textarea,
} from '@rikkora/ui';
import type { AdditionalExample } from '@/entities/documentation';
import type { ExampleRenderContext } from './types';

export function renderControlsExample(
  name: AdditionalExample,
  context: ExampleRenderContext,
) {
  const { ru, volume, setVolume, invalid, setInvalid, disabled, setDisabled } =
    context;
  switch (name) {
    case 'Switch':
      return (
        <Box as='form'>
          <Field label={ru ? 'Уведомления' : 'Notifications'}>
            <Switch
              name='notifications'
              defaultChecked
            />
          </Field>
        </Box>
      );
    case 'RadioGroup':
      return (
        <Box as='form'>
          <Field
            label={ru ? 'Тариф' : 'Plan'}
            required
          >
            <RadioGroup
              name='plan'
              defaultValue='basic'
              options={[
                { value: 'basic', label: 'Basic' },
                { value: 'pro', label: 'Pro' },
                { value: 'team', label: 'Team', disabled: true },
              ]}
            />
          </Field>
          <Button
            type='reset'
            variant='ghost'
          >
            {ru ? 'Сбросить' : 'Reset'}
          </Button>
        </Box>
      );
    case 'Select':
      return (
        <Field label={ru ? 'Тема' : 'Theme'}>
          <Select
            name='theme'
            defaultValue='dark'
          >
            <Box
              as='option'
              value='dark'
            >
              {ru ? 'Тёмная' : 'Dark'}
            </Box>
            <Box
              as='option'
              value='light'
            >
              {ru ? 'Светлая' : 'Light'}
            </Box>
            <Box
              as='option'
              disabled
            >
              {ru ? 'Недоступно' : 'Unavailable'}
            </Box>
          </Select>
        </Field>
      );
    case 'Slider':
      return (
        <Field label={`${ru ? 'Громкость' : 'Volume'}: ${volume}`}>
          <Slider
            name='volume'
            value={volume}
            onChange={(event) => setVolume(event.target.value)}
            step={5}
          />
        </Field>
      );
    case 'Field':
      return (
        <Stack>
          <Field
            label='Email'
            description={ru ? 'Рабочий адрес' : 'Work address'}
            error={
              invalid ?
                ru ?
                  'Введите корректный email'
                  : 'Enter a valid email'
                : undefined
            }
            required
          >
            <Input
              name='email'
              type='email'
              placeholder='you@example.com'
            />
          </Field>
          <Button
            variant='outline'
            onClick={() => setInvalid(!invalid)}
          >
            {ru ? 'Переключить ошибку' : 'Toggle error'}
          </Button>
        </Stack>
      );
    case 'FormControl':
      return (
        <Stack>
          <FormControl disabled={disabled}>
            <Field label={ru ? 'Имя' : 'Name'}>
              <Input name='name' />
            </Field>
            <Field label={ru ? 'Сообщение' : 'Message'}>
              <Textarea
                name='message'
                rows={2}
              />
            </Field>
          </FormControl>
          <Flex
            as='label'
            align='center'
            gap={2}
          >
            <Checkbox
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />{' '}
            {ru ? 'Заблокировать поля' : 'Disable fields'}
          </Flex>
        </Stack>
      );
  }
}
