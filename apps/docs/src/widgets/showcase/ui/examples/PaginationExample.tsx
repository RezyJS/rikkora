import { useState } from 'react';
import { Box, Pagination, Stack, Text } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function PaginationExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [page, setPage] = useState(1);

  return (
    <Box className={styles.sample}>
      <Stack gap={3}>
        <Pagination
          page={page}
          pageCount={5}
          siblingCount={0}
          onPageChange={setPage}
          previousLabel={ru ? 'Предыдущая страница' : 'Previous page'}
          nextLabel={ru ? 'Следующая страница' : 'Next page'}
          getPageLabel={(number) => `${ru ? 'Страница' : 'Page'} ${number}`}
        />
        <Text
          size='sm'
          tone='secondary'
        >
          {ru ? 'Страница' : 'Page'} {page} / 5
        </Text>
      </Stack>
    </Box>
  );
}
