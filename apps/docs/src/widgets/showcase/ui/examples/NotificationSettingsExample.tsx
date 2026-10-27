import { useState } from 'react';
import { Box, Stack, Flex, Text, Switch, Field, Slider } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function NotificationSettingsExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [volume, setVolume] = useState('60');

  return (
    <Box className={`${styles.sample} ${styles.panel}`}>
      <Stack gap={4}>
        <Flex
          as='label'
          align='center'
          justify='between'
          gap={3}
        >
          <Text size='sm'>
            {ru ? 'Уведомления на почту' : 'Email notifications'}
          </Text>
          <Switch
            checked={notifications}
            onChange={(event) => setNotifications(event.target.checked)}
          />
        </Flex>
        <Flex
          as='label'
          align='center'
          justify='between'
          gap={3}
        >
          <Text size='sm'>
            {ru ? 'Звук уведомлений' : 'Notification sounds'}
          </Text>
          <Switch
            checked={sound}
            onChange={(event) => setSound(event.target.checked)}
          />
        </Flex>
        <Field label={`${ru ? 'Громкость' : 'Volume'} · ${volume}%`}>
          <Slider
            disabled={!sound}
            value={volume}
            onChange={(event) => setVolume(event.target.value)}
          />
        </Field>
      </Stack>
    </Box>
  );
}
