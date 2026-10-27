import { IconArrowRight } from '@tabler/icons-react';
import { Breadcrumbs, ButtonLink, Link, Stack, Field, Tabs, Accordion, Input } from '@rikkora/ui';
import type { AdditionalExample } from '@/entities/documentation';
import type { ExampleRenderContext } from './types';

export function renderNavigationExample(
  name: AdditionalExample,
  context: ExampleRenderContext,
) {
  const { ru, content } = context;
  switch (name) {
    case 'ButtonLink':
      return <ButtonLink href='/docs' aria-label={String(context.configuration.ButtonLink?.size ?? '').startsWith('icon') ? (ru ? 'Документация' : 'Docs') : undefined}>
        {String(context.configuration.ButtonLink?.size ?? '').startsWith('icon')
          ? <IconArrowRight size={20} stroke={1.7} aria-hidden='true' focusable='false' />
          : (ru ? 'Документация' : 'Docs')}
      </ButtonLink>;
    case 'Breadcrumbs': return <Breadcrumbs aria-label={ru ? 'Хлебные крошки' : 'Breadcrumb'}>
      <Link href='/docs'>{ru ? 'Документация' : 'Docs'}</Link><span>{ru ? 'Компоненты' : 'Components'}</span>
    </Breadcrumbs>;
    case 'Tabs':
      return (
        <Tabs.Root defaultValue='overview'>
          <Tabs.List aria-label={ru ? 'Разделы' : 'Sections'}>
            <Tabs.Trigger value='overview'>
              {ru ? 'Обзор' : 'Overview'}
            </Tabs.Trigger>
            <Tabs.Trigger value='settings'>
              {ru ? 'Настройки' : 'Settings'}
            </Tabs.Trigger>
            <Tabs.Trigger
              value='disabled'
              disabled
            >
              {ru ? 'Архив' : 'Archive'}
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value='overview'>
            {ru ? 'Содержимое обзора' : 'Overview content'}
          </Tabs.Content>
          <Tabs.Content value='settings'>
            <Field label={ru ? 'Имя' : 'Name'}>
              <Input />
            </Field>
          </Tabs.Content>
        </Tabs.Root>
      );
    case 'Accordion':
      return (
        <Stack>
          <Accordion.Root
            type='single'
            collapsible
            defaultValue='one'
          >
            <Accordion.Item value='one'>
              <Accordion.Header>
                <Accordion.Trigger>
                  {ru ? 'Что внутри?' : 'What is inside?'}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>{content}</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value='two'>
              <Accordion.Header>
                <Accordion.Trigger>
                  {ru ? 'Как управлять?' : 'How to navigate?'}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                {ru ?
                  'Tab, стрелки, Home, End, Enter и Space.'
                  : 'Tab, arrows, Home, End, Enter and Space.'}
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Stack>
      );
  }
}
