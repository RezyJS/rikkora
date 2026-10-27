import { useState } from 'react';
import { Box, Field, Select } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function TimezoneExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [timezone, setTimezone] = useState('utc');

  return (
    <Box className={`${styles.sample} ${styles.panel}`}>
      <Field label={ru ? 'Часовой пояс' : 'Timezone'}>
        <Select
          value={timezone}
          onChange={(event) => setTimezone(event.target.value)}
        >
          <Box
            as='option'
            value='utc'
          >
            UTC +0
          </Box>
          <Box
            as='option'
            value='moscow'
          >
            {ru ? 'Москва · UTC +3' : 'Moscow · UTC +3'}
          </Box>
          <Box
            as='option'
            value='tokyo'
          >
            {ru ? 'Токио · UTC +9' : 'Tokyo · UTC +9'}
          </Box>
        </Select>
      </Field>
    </Box>
  );
}
