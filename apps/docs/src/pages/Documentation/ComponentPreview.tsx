import { IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';
import * as UI from '@rikkora/ui';
import { ComponentExample } from '../../components/Showcase/ComponentExample';
import { additionalExamples } from '../../components/Showcase/componentNames';
import {
  configureExample,
  type ExampleConfiguration,
} from '../../components/Showcase/exampleConfiguration';
import type { ComponentDoc } from './componentDocs';
import styles from './Documentation.module.css';

/** Compact, interactive examples shared by usage and individual property sections. */
export function ComponentPreview({
  doc,
  configuration = {},
  ru,
}: {
  doc: ComponentDoc;
  configuration?: ExampleConfiguration;
  ru: boolean;
}) {
  const [changes, setChanges] = useState<ExampleConfiguration>({});
  const settings = { ...configuration };
  for (const part of Object.keys(changes))
    settings[part] = { ...settings[part], ...changes[part] };
  const change = (part: string, property: string, value: unknown) =>
    setChanges((current) => ({
      ...current,
      [part]: { ...current[part], [property]: value },
    }));
  const content = ru ? 'Содержимое' : 'Content';
  const items = ['A', 'B', 'C'].map((item) => (
    <UI.Box
      key={item}
      className={styles.exampleItem}
    >
      {item}
    </UI.Box>
  ));
  function render() {
    switch (doc.name) {
      case 'ButtonLink':
        return <UI.ButtonLink href='/docs' aria-label={String(settings.ButtonLink?.size ?? '').startsWith('icon') ? (ru ? 'Документация' : 'Docs') : undefined}>
          {String(settings.ButtonLink?.size ?? '').startsWith('icon') ? <IconArrowRight size={20} stroke={1.7} aria-hidden='true' focusable='false' /> : (ru ? 'Документация' : 'Docs')}
        </UI.ButtonLink>;
      case 'Button':
        return (
          <UI.Button>
            {String(settings.Button?.size ?? '').startsWith('icon') ?
              <IconArrowRight size={20} stroke={1.7} aria-hidden='true' focusable='false' />
            : ru ?
              'Сохранить'
            : 'Save changes'}
          </UI.Button>
        );
      case 'Input':
        return (
          <UI.Field label={ru ? 'Имя' : 'Name'}>
            <UI.Input placeholder={ru ? 'Введите имя' : 'Enter your name'} />
          </UI.Field>
        );
      case 'Textarea':
        return (
          <UI.Field label={ru ? 'Сообщение' : 'Message'}>
            <UI.Textarea
              rows={3}
              placeholder={ru ? 'Введите сообщение' : 'Write a message'}
            />
          </UI.Field>
        );
      case 'Checkbox':
        return (
          <UI.Field label={ru ? 'Получать обновления' : 'Receive updates'}>
            <UI.Checkbox />
          </UI.Field>
        );
      case 'Flex':
        return (
          <UI.Flex
            gap={3}
            className={styles.exampleLayout}
          >
            {items}
          </UI.Flex>
        );
      case 'Grid':
        return (
          <UI.Grid
            columns={2}
            gap={3}
            className={styles.exampleLayout}
          >
            {items}
          </UI.Grid>
        );
      case 'Text':
        return <UI.Text>Rikkora UI</UI.Text>;
      case 'Heading':
        return <UI.Heading level={3}>Rikkora UI</UI.Heading>;
      case 'Box':
        return (
          <UI.Box
            padding={4}
            className={styles.exampleItem}
          >
            {content}
          </UI.Box>
        );
      case 'Stack':
        return (
          <UI.Stack
            gap={3}
            className={styles.exampleLayout}
          >
            {items}
          </UI.Stack>
        );
      case 'Separator':
        return (
          <UI.Flex
            align='center'
            gap={3}
            style={{ width: 200, height: 80 }}
          >
            A<UI.Separator />B
          </UI.Flex>
        );
      case 'Badge':
        return <UI.Badge>{ru ? 'Статус' : 'Status'}</UI.Badge>;
      case 'Card':
        return (
          <UI.Card>
            <UI.Stack>
              <UI.Heading
                level={3}
                size='lg'
              >
                Rikkora UI
              </UI.Heading>
              <UI.Text>{content}</UI.Text>
            </UI.Stack>
          </UI.Card>
        );
      case 'Alert':
        return (
          <UI.Alert title={ru ? 'Информация' : 'Information'}>
            {content}
          </UI.Alert>
        );
      case 'Spinner':
        return <UI.Spinner aria-label={ru ? 'Загрузка' : 'Loading'} />;
      case 'Progress':
        return (
          <UI.Progress
            value={50}
            aria-label={ru ? 'Загрузка' : 'Upload'}
            style={{ width: 200 }}
          />
        );
      case 'Skeleton':
        return <UI.Skeleton style={{ width: 120, height: 48 }} />;
      case 'Avatar':
        return <UI.Avatar alt='Rikka Inohana' />;
      case 'Field':
        return (
          <UI.Field label={ru ? 'Имя' : 'Name'}>
            <UI.Input placeholder='Rikka' />
          </UI.Field>
        );
      case 'FormControl':
        return (
          <UI.FormControl>
            <UI.Field label={ru ? 'Имя' : 'Name'}>
              <UI.Input placeholder='Rikka' />
            </UI.Field>
          </UI.FormControl>
        );
      case 'Switch':
        return (
          <UI.Field label={ru ? 'Уведомления' : 'Notifications'}>
            <UI.Switch />
          </UI.Field>
        );
      case 'RadioGroup':
        return (
          <UI.RadioGroup
            aria-label={ru ? 'Тариф' : 'Plan'}
            options={[
              { value: 'basic', label: 'Basic' },
              { value: 'pro', label: 'Pro' },
            ]}
            defaultValue='basic'
          />
        );
      case 'Select':
        return (
          <UI.Field label={ru ? 'Тема' : 'Theme'}>
            <UI.Select defaultValue='dark'>
              <option value='dark'>Dark</option>
              <option value='light'>Light</option>
            </UI.Select>
          </UI.Field>
        );
      case 'Slider':
        return (
          <UI.Field label={ru ? 'Громкость' : 'Volume'}>
            <UI.Slider defaultValue={50} />
          </UI.Field>
        );
      case 'ScrollArea':
        return (
          <UI.ScrollArea
            type='always'
            orientation='both'
            aria-label={ru ? 'Пример прокрутки' : 'Scroll example'}
            style={{
              width: 240,
              height: 140,
              border: '1px solid var(--rkr-color-border-default)',
              borderRadius: 'var(--rkr-radius-md)',
            }}
          >
            <UI.Stack
              gap={3}
              style={{
                width:
                  settings.ScrollArea?.orientation === 'vertical' ?
                    undefined
                  : 400,
                padding: 'var(--rkr-spacing-3)',
              }}
            >
              {Array.from({ length: 12 }, (_, index) => (
                <UI.Text key={index}>
                  {content} {index + 1}
                </UI.Text>
              ))}
            </UI.Stack>
          </UI.ScrollArea>
        );
    }
    return null;
  }
  const additional = additionalExamples.find((name) => name === doc.name);
  const simple = render();
  if (!simple && additional)
    return (
      <ComponentExample
        name={additional}
        configuration={settings}
        onConfigurationChange={change}
      />
    );
  if (doc.name === 'Button' && String(settings.Button?.size ?? '').startsWith('icon'))
    settings.Button = {
      'aria-label': ru ? 'Продолжить' : 'Continue',
      ...settings.Button,
    };
  return configureExample(simple, doc.name, settings, undefined, change);
}
