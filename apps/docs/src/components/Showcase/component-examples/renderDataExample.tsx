import {
  Text,
  Stack,
  Badge,
  Avatar,
  Table,
  Pagination,
  ScrollArea,
} from '@rikkora/ui';
import type { AdditionalExample } from '../componentNames';
import type { ExampleRenderContext } from './types';

export function renderDataExample(
  name: AdditionalExample,
  context: ExampleRenderContext,
) {
  const { ru, page, setPage } = context;
  switch (name) {
    case 'Avatar':
      return (
        <Stack
          direction='row'
          align='center'
        >
          <Avatar
            alt='Rikka Inohana'
            size='sm'
          />
          <Avatar alt='Rikka Inohana' />
          <Avatar
            src='/missing-avatar.png'
            alt='Rikka Inohana'
            size='lg'
          />
          <Avatar
            alt={ru ? 'Пользователь' : 'User'}
            fallback='?'
          />
        </Stack>
      );
    case 'Table':
      return (
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
      );
    case 'Pagination':
      return (
        <Stack>
          <Text>
            {ru ? 'Страница' : 'Page'} {page}
          </Text>
          <Pagination
            page={page}
            pageCount={12}
            onPageChange={setPage}
            previousLabel={ru ? 'Предыдущая страница' : 'Previous page'}
            nextLabel={ru ? 'Следующая страница' : 'Next page'}
            getPageLabel={(number) => `${ru ? 'Страница' : 'Page'} ${number}`}
            aria-label={ru ? 'Страницы' : 'Pagination'}
          />
        </Stack>
      );
  }
}
