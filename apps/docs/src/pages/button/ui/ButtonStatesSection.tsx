import { buttonExampleCode } from '../model/buttonExampleCode';
import { useEffect, useRef, useState } from 'react';
import { IconCheck, IconDeviceFloppy, IconStar } from '@tabler/icons-react';
import { Box, Button } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationSection } from '@/shared/ui/documentation';
import { ButtonExampleCard, ButtonDemoGroup, ButtonSample } from './ButtonExampleCard';
import styles from './ButtonDocs.module.css';

export function ButtonStatesSection() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [pressed, setPressed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return <DocumentationSection id='behavior' title={ru ? 'Состояния и поведение' : 'States and behavior'}>
    <ButtonExampleCard title={ru ? "Доступность и выбор" : "Availability and selection"} props={["disabled", "pressed"]} code={buttonExampleCode.selection(ru)}>
      <ButtonDemoGroup>
        <Box className={styles.samples}>
          <ButtonSample>
            <Button disabled>{ru ? 'Недоступно' : 'Unavailable'}</Button>
          </ButtonSample>
          <ButtonSample>
            <Button variant='soft' pressed={pressed} onClick={() => setPressed(!pressed)}
              startContent={<IconStar fill={pressed ? 'currentColor' : 'none'} aria-hidden='true' />}>{ru ? 'Избранное' : 'Favorite'}</Button>
          </ButtonSample>
        </Box>
      </ButtonDemoGroup>
    </ButtonExampleCard>
    <ButtonExampleCard title={ru ? "Загрузка" : "Loading"} props={["loading", "loadingText", "loadingPlacement"]} code={buttonExampleCode.loading(ru)}>
      <ButtonDemoGroup>
        <Box className={styles.rows}>
          <Box className={styles.samples}>{(['start', 'end', 'center'] as const).map(loadingPlacement => <ButtonSample key={loadingPlacement} >
            <Button loading loadingPlacement={loadingPlacement} loadingText={ru ? 'Загрузка' : 'Loading'}>{ru ? 'Сохранить' : 'Save'}</Button>
          </ButtonSample>)}</Box>
          <Box className={styles.samples}>
            <Button loading={saving} loadingText={ru ? 'Сохраняем…' : 'Saving…'} tone={saved ? 'success' : 'primary'}
              startContent={saved ? <IconCheck aria-hidden='true' /> : <IconDeviceFloppy aria-hidden='true' />}
              onClick={() => { setSaving(true); setSaved(false); timer.current = setTimeout(() => { setSaving(false); setSaved(true); }, 900); }}>
              {saved ? (ru ? 'Сохранено' : 'Saved') : (ru ? 'Попробовать сохранение' : 'Try saving')}
            </Button>
          </Box>
        </Box>
      </ButtonDemoGroup>
    </ButtonExampleCard>
    <ButtonExampleCard title={ru ? "Анимации" : "Motion"} props={["ripple", "disableAnimation"]} code={buttonExampleCode.motion(ru)}>
      <ButtonDemoGroup>
        <Box className={styles.samples}>
          <ButtonSample>
            <Button>{ru ? 'Наведи и нажми' : 'Hover and press'}</Button>
          </ButtonSample>
          <ButtonSample>
            <Button ripple>{ru ? 'Волна' : 'Ripple'}</Button>
          </ButtonSample>
          <ButtonSample>
            <Button variant='outline' disableAnimation>{ru ? 'Без анимации' : 'No animation'}</Button>
          </ButtonSample>
        </Box>
      </ButtonDemoGroup>
    </ButtonExampleCard>
  </DocumentationSection>;
}
