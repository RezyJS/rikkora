import { ScrollArea, Table, Badge } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function TablePreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Table' configuration={configuration}>
    {() => ((
      <ScrollArea
        orientation='horizontal'
        style={{ width: '100%' }}
      >
        <Table.Root>
          <Table.Caption>{ru ? 'Компоненты' : 'Components'}</Table.Caption>
          <Table.Head>
            <Table.Row>
              <Table.Header>{ru ? 'Название' : 'Name'}</Table.Header>
              <Table.Header>{ru ? 'Статус' : 'Status'}</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Header scope='row'>Button</Table.Header>
              <Table.Cell>
                <Badge variant='primary'>
                  {ru ? 'Доступен' : 'Available'}
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Header scope='row'>Dialog</Table.Header>
              <Table.Cell>
                <Badge variant='primary'>
                  {ru ? 'Доступен' : 'Available'}
                </Badge>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    ))}
  </PreviewFrame>;
}
