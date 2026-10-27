import { Stack, Accordion } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function AccordionPreview({ configuration, ru }: DocPreviewProps) {
  const content = ru ? 'Содержимое' : 'Content';
  return <PreviewFrame name='Accordion' configuration={configuration}>
    {() => ((
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
    ))}
  </PreviewFrame>;
}
