import { Box, Button, Dialog, Field, Flex, Input, Stack } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import type { ProfileExampleState } from './useProfileExample';

export function ProfileDialogExample({
  profile,
  onSave: notify,
}: {
  profile: ProfileExampleState;
  onSave: () => void;
}) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const {
    name,
    profileOpen,
    setProfileOpen,
    draftName,
    setDraftName,
    setName,
  } = profile;
  return (
    <Dialog.Root
      open={profileOpen}
      onOpenChange={setProfileOpen}
    >
      <Dialog.Trigger asChild>
        <Button
          variant='secondary'
          onClick={() => setDraftName(name)}
        >
          {ru ? 'Открыть диалог' : 'Open dialog'}
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>
          {ru ? 'Редактировать профиль' : 'Edit profile'}
        </Dialog.Title>
        <Dialog.Description>
          {ru ? 'Как к вам обращаться?' : 'What should we call you?'}
        </Dialog.Description>
        <Box
          as='form'
          onSubmit={(event) => {
            event.preventDefault();
            if (!draftName.trim()) return;
            setName(draftName.trim());
            setProfileOpen(false);
            notify();
          }}
        >
          <Stack gap={4}>
            <Field
              label={ru ? 'Имя' : 'Name'}
              required
            >
              <Input
                name='profile-name'
                value={draftName}
                onChange={(event) => setDraftName(event.target.value)}
                required
              />
            </Field>
            <Flex
              justify='end'
              gap={2}
            >
              <Dialog.Close asChild>
                <Button variant='ghost'>{ru ? 'Отмена' : 'Cancel'}</Button>
              </Dialog.Close>
              <Button type='submit'>
                {ru ? 'Сохранить профиль' : 'Save profile'}
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
}
