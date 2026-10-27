import { buttonExampleCode } from '../model/buttonExampleCode';
import { useState } from 'react';
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';
import { Link as RouterLink } from 'react-router';
import { Box, ButtonGroup, ConfirmButton, DropdownMenu, HoldToConfirm, Link, SplitButton, Text, ToggleButton } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationSection } from '@/shared/ui/documentation';
import { ButtonExampleCard, ButtonDemoGroup } from './ButtonExampleCard';
import styles from './ButtonDocs.module.css';

export function ButtonFamilySection() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [saveAction, setSaveAction] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [holds, setHolds] = useState(0);
  return <DocumentationSection id='button-family' title={ru ? 'Составные кнопки' : 'Button components'}>
    <ButtonExampleCard title={ru ? "Группы и дополнительные действия" : "Groups and additional actions"} props={[]} code={buttonExampleCode.groups(ru)}>
      <Box className={styles.familyControls}>
        <ButtonDemoGroup>
          <ButtonGroup aria-label={ru ? 'Форматирование' : 'Formatting'}>
            <ToggleButton size='icon' aria-label={ru ? 'Жирный' : 'Bold'}>
              <IconBold aria-hidden='true' />
            </ToggleButton>
            <ToggleButton size='icon' aria-label={ru ? 'Курсив' : 'Italic'}>
              <IconItalic aria-hidden='true' />
            </ToggleButton>
            <ToggleButton size='icon' aria-label={ru ? 'Подчёркнутый' : 'Underline'}>
              <IconUnderline aria-hidden='true' />
            </ToggleButton>
          </ButtonGroup>
        </ButtonDemoGroup>
        <ButtonDemoGroup>
          <Box className={styles.rows}>
            <Box className={styles.samples}>
              <SplitButton menuLabel={ru ? 'Варианты сохранения' : 'Save options'}
                onClick={() => setSaveAction(ru ? 'Сохранено' : 'Saved')}
                menu={<DropdownMenu.Item onSelect={() => setSaveAction(ru ? 'Выбрано «Сохранить как»' : 'Save as selected')}>{ru ? 'Сохранить как…' : 'Save as…'}</DropdownMenu.Item>}>
                {ru ? 'Сохранить' : 'Save'}
              </SplitButton>
            </Box>
            <Text as='p' role='status' size='sm' tone='secondary' className={styles.status}>{saveAction}</Text>
          </Box>
        </ButtonDemoGroup>
      </Box>
    </ButtonExampleCard>
    <ButtonExampleCard title={ru ? "Подтверждение действия" : "Action confirmation"} props={[]} code={buttonExampleCode.confirmation(ru)}>
      <Box className={styles.rows}>
        <ButtonDemoGroup>
          <Box className={styles.rows}>
            <Box className={styles.samples}>
              <ConfirmButton title={ru ? 'Удалить пример?' : 'Delete example?'}
                description={ru ? 'Данные не удаляются: это демонстрация.' : 'This demonstration does not delete any data.'}
                confirmText={ru ? 'Удалить' : 'Delete'} cancelText={ru ? 'Отмена' : 'Cancel'}
                pendingText={ru ? 'Удаляем…' : 'Deleting…'} errorText={ru ? 'Не удалось выполнить действие.' : 'Could not complete the action.'}
                onConfirm={async () => { await new Promise(resolve => setTimeout(resolve, 500)); setDeleted(true); }}>
                {ru ? 'Удалить пример' : 'Delete example'}
              </ConfirmButton>
            </Box>
            <Text as='p' role='status' size='sm' tone='secondary' className={styles.status}>{deleted ? (ru ? 'Удаление подтверждено' : 'Deletion confirmed') : ''}</Text>
          </Box>
        </ButtonDemoGroup>
        <ButtonDemoGroup>
          <Box className={styles.rows}>
            <Box className={styles.samples}>
              <HoldToConfirm variant='soft' tone='danger' onConfirm={() => setHolds(value => value + 1)}
                holdingText={ru ? 'Продолжайте удерживать…' : 'Keep holding…'} confirmedText={ru ? 'Подтверждено' : 'Confirmed'}
                instructions={ru ? 'Удерживайте кнопку, Enter или Space. Отпустите или нажмите Escape для отмены.' : undefined}>
                {ru ? 'Удерживайте для подтверждения' : 'Hold to confirm'}
              </HoldToConfirm>
            </Box>
            <Text as='p' role='status' size='sm' tone='secondary' className={styles.status}>{ru ? 'Подтверждений' : 'Confirmations'}: {holds}</Text>
          </Box>
        </ButtonDemoGroup>
      </Box>
    </ButtonExampleCard>
    <Box className={styles.propLinks}>{[
      ['toggle-button', 'ToggleButton'], ['button-group', 'ButtonGroup'], ['split-button', 'SplitButton'], ['confirm-button', 'ConfirmButton'], ['hold-to-confirm', 'HoldToConfirm'],
    ].map(([slug, name]) => <Link as={RouterLink} className={styles.propLink} to={`/docs/components/${slug}`} key={slug}>{name} API</Link>)}</Box>
  </DocumentationSection>;
}
