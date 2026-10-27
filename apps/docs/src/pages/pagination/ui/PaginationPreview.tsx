import { useState } from 'react';
import { Stack, Text, Pagination } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function PaginationPreview({ configuration, ru }: DocPreviewProps) {
  const [page, setPage] = useState(1);
  return <PreviewFrame name='Pagination' configuration={configuration}>
    {() => ((
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
    ))}
  </PreviewFrame>;
}
