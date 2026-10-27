import { buttonExampleCode } from '../model/buttonExampleCode';
import { IconDots } from '@tabler/icons-react';
import { Box, Button } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { ButtonExampleCard } from './ButtonExampleCard';
import styles from './ButtonDocs.module.css';

export function ButtonCompactExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return <ButtonExampleCard title={ru ? 'Компактные кнопки' : 'Compact buttons'} props={['compact']}
    code={buttonExampleCode.compact(ru)}>
    <Box className={styles.samples}>
      <Button size='sm' variant='outline' radius='full'>{ru ? 'Фильтр' : 'Filter'}</Button>
      <Button size='sm' variant='outline' radius='full' compact>{ru ? 'Фильтр' : 'Filter'}</Button>
      <Button size='icon-sm' variant='outline' radius='full' aria-label={ru ? 'Другие действия' : 'More actions'}>
        <IconDots size={18} aria-hidden='true' />
      </Button>
    </Box>
  </ButtonExampleCard>;
}
