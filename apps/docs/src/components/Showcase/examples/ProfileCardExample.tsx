import {
  Avatar,
  Box,
  Button,
  Card,
  DropdownMenu,
  Flex,
  Heading,
  Separator,
  Stack,
  Text,
} from '@rikkora/ui';
import { usePreferences } from '../../../preferences/PreferencesContext';
import styles from '../ShowcaseScene.module.css';
import type { ProfileExampleState } from './useProfileExample';

export function ProfileCardExample({
  profile,
  onSave: notify,
}: {
  profile: ProfileExampleState;
  onSave: () => void;
}) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { name, setDraftName, setProfileOpen } = profile;
  return (
    <Card
      variant='filled'
      className={styles.sample}
      padding={5}
    >
      <Stack gap={4}>
        <Flex
          align='center'
          gap={3}
        >
          <Avatar alt={name} />
          <Stack gap={1}>
            <Heading
              level={3}
              size='lg'
            >
              {name}
            </Heading>
            <Text
              size='sm'
              tone='secondary'
            >
              {ru ? 'Дизайнер интерфейсов' : 'Interface designer'}
            </Text>
          </Stack>
        </Flex>
        <Separator />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant='secondary'>
              {ru ? 'Действия с профилем' : 'Profile actions'}{' '}
              <Box
                as='span'
                aria-hidden='true'
              >
                ⌄
              </Box>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>{name}</DropdownMenu.Label>
            <DropdownMenu.Item
              onSelect={() => {
                setDraftName(name);
                setProfileOpen(true);
              }}
            >
              {ru ? 'Редактировать профиль' : 'Edit profile'}
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={notify}>
              {ru ? 'Сохранить изменения' : 'Save changes'}
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item disabled>
              {ru ? 'Удалить аккаунт' : 'Delete account'}
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Stack>
    </Card>
  );
}
