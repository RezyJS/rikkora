import { IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';
import { Box, Button, Drawer, Flex, Text, ScrollArea } from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import { DocsSidebar } from './DocsSidebar';
import styles from './Documentation.module.css';

export function DocsMobileNavigation({
  query,
  setQuery,
  label,
}: {
  query: string;
  setQuery: (query: string) => void;
  label: string;
}) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <Box className={styles.mobileBar}>
      <Drawer.Root
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      >
        <Drawer.Trigger asChild>
          <Button
            variant='outline'
            size='sm'
          >
            <IconMenu2 size={16} stroke={1.7} aria-hidden='true' focusable='false' />
            {ru ? 'Компоненты' : 'Components'}
          </Button>
        </Drawer.Trigger>
        <Drawer.Content
          side='left'
          aria-describedby={undefined}
          className={styles.mobileDrawer}
        >
          <Flex
            align='center'
            justify='between'
          >
            <Drawer.Title>{ru ? 'Документация' : 'Documentation'}</Drawer.Title>
            <Drawer.Close asChild>
              <Button
                variant='ghost'
                size='sm'
              >
                {ru ? 'Закрыть' : 'Close'}
              </Button>
            </Drawer.Close>
          </Flex>
          <ScrollArea
            className={styles.mobileNavigation}
            viewportProps={{ tabIndex: -1, style: { padding: 4 } }}
          >
            <DocsSidebar
              query={query}
              setQuery={setQuery}
              onNavigate={() => setMobileOpen(false)}
            />
          </ScrollArea>
        </Drawer.Content>
      </Drawer.Root>
      <Text
        as='span'
        size='sm'
        tone='secondary'
      >
        {label}
      </Text>
    </Box>
  );
}
