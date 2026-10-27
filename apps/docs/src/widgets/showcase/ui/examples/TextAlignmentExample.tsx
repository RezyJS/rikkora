import { IconAlignLeft, IconAlignCenter, IconAlignRight } from '@tabler/icons-react';
import { useState } from 'react';
import { Box, Button, Flex, Stack, Text } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function TextAlignmentExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [alignment, setAlignment] = useState('left');

  return (
    <Box className={`${styles.sample} ${styles.panel}`}>
      <Stack gap={3}>
        <Text size='sm'>{ru ? 'Выравнивание текста' : 'Text alignment'}</Text>
        <Flex
          gap={2}
          role='group'
          aria-label={ru ? 'Выравнивание текста' : 'Text alignment'}
        >
          {(['left', 'center', 'right'] as const).map((value, index) => {
            const AlignmentIcon = { left: IconAlignLeft, center: IconAlignCenter, right: IconAlignRight }[value];
            return (
              <Button
                size='icon'
                key={value}
                variant={alignment === value ? 'primary' : 'secondary'}
                aria-pressed={alignment === value}
                aria-label={
                  (ru ?
                    ['По левому краю', 'По центру', 'По правому краю']
                    : ['Align left', 'Align center', 'Align right'])[index]
                }
                onClick={() => setAlignment(value)}
              >
                <AlignmentIcon size={20} stroke={1.7} aria-hidden='true' focusable='false' />
              </Button>
            );
          })}
        </Flex>
        <Text
          as='p'
          size='sm'
          tone='secondary'
          style={{ textAlign: alignment as 'left' | 'center' | 'right' }}
        >
          {ru ? 'Всё на своём месте.' : 'Everything in its place.'}
        </Text>
      </Stack>
    </Box>
  );
}
