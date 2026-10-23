import { useState } from 'react';
import {
  Card,
  Box,
  Stack,
  Heading,
  Field,
  Input,
  Select,
  Button,
  useToast,
} from '@rikkora/ui';
import { usePreferences } from '../../../preferences/PreferencesContext';
import styles from '../ShowcaseScene.module.css';

export function InvitationExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { toast } = useToast();
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('editor');

  return (
    <Card
      variant='filled'
      className={styles.sample}
      padding={5}
    >
      <Box
        as='form'
        onSubmit={(event) => {
          event.preventDefault();
          toast({
            title: ru ? 'Приглашение готово' : 'Invitation ready',
            description: inviteEmail,
          });
        }}
      >
        <Stack gap={4}>
          <Heading
            level={3}
            size='lg'
          >
            {ru ? 'Пригласить в команду' : 'Invite a teammate'}
          </Heading>
          <Field
            label={ru ? 'Рабочая почта' : 'Work email'}
            required
          >
            <Input
              type='email'
              placeholder='name@team.com'
              required
              value={inviteEmail}
              onChange={(event) => setInviteEmail(event.target.value)}
            />
          </Field>
          <Field label={ru ? 'Роль' : 'Role'}>
            <Select
              value={inviteRole}
              onChange={(event) => setInviteRole(event.target.value)}
            >
              <Box
                as='option'
                value='editor'
              >
                {ru ? 'Редактор' : 'Editor'}
              </Box>
              <Box
                as='option'
                value='viewer'
              >
                {ru ? 'Наблюдатель' : 'Viewer'}
              </Box>
            </Select>
          </Field>
          <Button type='submit'>
            {ru ? 'Подготовить' : 'Prepare invitation'}
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
