import { IconStar } from '@tabler/icons-react';
import { useState } from 'react';
import { Box, Button, Flex, Tooltip, useToast } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function ActionButtonsExample({
  onSave: notify,
}: {
  onSave: () => void;
}) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { toast } = useToast();
  const [favorite, setFavorite] = useState(false);

  return (
    <Box className={styles.sample}>
      <Flex
        gap={2}
        wrap
        align='center'
      >
        <Button onClick={notify}>{ru ? 'Сохранить' : 'Save'}</Button>
        <Button
          variant='secondary'
          onClick={() => toast({ title: ru ? 'Отменено' : 'Cancelled' })}
        >
          {ru ? 'Отмена' : 'Cancel'}
        </Button>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button
                size='icon'
                variant='secondary'
                aria-label={ru ? 'Избранное' : 'Favorite'}
                aria-pressed={favorite}
                onClick={() => setFavorite(!favorite)}
              >
                <IconStar size={20} fill={favorite ? 'currentColor' : 'none'} stroke={1.7} aria-hidden='true' focusable='false' />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {ru ? 'Добавить в избранное' : 'Add to favorites'}
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </Flex>
    </Box>
  );
}
