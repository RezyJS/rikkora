import { buttonExampleCode } from '../model/buttonExampleCode';
import { Box, Button, type ButtonTone, type ButtonVariant } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationSection } from '@/shared/ui/documentation';
import {
  ButtonExampleCard,
  ButtonDemoGroup,
  ButtonSample,
} from './ButtonExampleCard';
import styles from './ButtonDocs.module.css';
const variants: ButtonVariant[] = [
  'primary',
  'secondary',
  'outline',
  'ghost',
  'soft',
  'danger',
];
const tones: ButtonTone[] = ['primary', 'danger', 'success'];

export function ButtonAppearanceSection() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return (
    <DocumentationSection
      id='appearance'
      title={ru ? 'Оформление' : 'Appearance'}
    >
      <Box id='examples' />
      <ButtonExampleCard
        title={ru ? 'Варианты и цветовые акценты' : 'Variants and color tones'}
        props={['variant', 'tone']}
        code={buttonExampleCode.appearance(ru)}
        showTitle={false}
      >
        <Box className={styles.rows}>
          <ButtonDemoGroup>
            <Box className={styles.samples}>
              {variants.map((variant) => (
                <ButtonSample key={variant}>
                  <Button variant={variant}>{ru ? 'Кнопка' : 'Button'}</Button>
                </ButtonSample>
              ))}
            </Box>
          </ButtonDemoGroup>
          <ButtonDemoGroup>
            <Box className={styles.samples}>
              {tones.map((tone, index) => (
                <ButtonSample key={tone}>
                  <Button
                    variant='soft'
                    tone={tone}
                  >
                    {
                      (ru ?
                        ['Создать', 'Удалить', 'Готово']
                      : ['Create', 'Delete', 'Done'])[index]
                    }
                  </Button>
                </ButtonSample>
              ))}
            </Box>
          </ButtonDemoGroup>
        </Box>
      </ButtonExampleCard>
    </DocumentationSection>
  );
}
