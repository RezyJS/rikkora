import { Tabs, Field, Input } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function TabsPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Tabs' configuration={configuration}>
    {() => ((
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
    ))}
  </PreviewFrame>;
}
