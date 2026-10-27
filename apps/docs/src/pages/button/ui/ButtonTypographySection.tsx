import { buttonExampleCode } from '../model/buttonExampleCode';
import { IconArrowRight, IconDownload, IconPlus } from '@tabler/icons-react';
import { Badge, Box, Button, type ButtonFontWeight, type TextSize } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationSection } from '@/shared/ui/documentation';
import { ButtonExampleCard, ButtonDemoGroup, ButtonSample } from './ButtonExampleCard';
import styles from './ButtonDocs.module.css';
const textSizes: TextSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const weights: ButtonFontWeight[] = ['regular', 'medium', 'semibold', 'bold', 'extrabold'];

export function ButtonTypographySection() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return <DocumentationSection id='typography' title={ru ? 'Текст и содержимое' : 'Text and content'}>
    <ButtonExampleCard title={ru ? "Подпись, начертание и слоты" : "Label, styling and slots"} props={["textSize", "fontWeight", "italic", "underline", "strikethrough", "textTransform", "startContent", "endContent"]} code={buttonExampleCode.typography(ru)} showTitle={false}>
      <Box className={styles.rows}>
        <ButtonDemoGroup>
          <Box className={styles.samples}>{textSizes.map(textSize => <ButtonSample key={textSize} >
            <Button textSize={textSize}>{ru ? 'Текст' : 'Text'}</Button>
          </ButtonSample>)}</Box>
        </ButtonDemoGroup>

        <ButtonDemoGroup>
          <Box className={styles.samples}>{weights.map(fontWeight => <ButtonSample key={fontWeight} >
            <Button fontWeight={fontWeight} variant='soft'>{ru ? 'Текст' : 'Text'}</Button>
          </ButtonSample>)}</Box>
        </ButtonDemoGroup>
        <ButtonDemoGroup>
          <Box className={styles.rows}>
            <Box className={styles.samples}>
              <ButtonSample>
                <Button italic variant='outline'>{ru ? 'Курсив' : 'Italic'}</Button>
              </ButtonSample>
              <ButtonSample>
                <Button underline variant='outline'>{ru ? 'Подчёркнутый' : 'Underline'}</Button>
              </ButtonSample>
              <ButtonSample>
                <Button strikethrough variant='outline'>{ru ? 'Зачёркнутый' : 'Strike'}</Button>
              </ButtonSample>
              <ButtonSample>
                <Button italic underline variant='outline'>{ru ? 'Сочетание' : 'Combined'}</Button>
              </ButtonSample>
            </Box>
            <Box className={styles.samples}>{(['none', 'uppercase', 'lowercase', 'capitalize'] as const).map(textTransform => <ButtonSample key={textTransform} >
              <Button textTransform={textTransform} variant='soft'>{ru ? 'Мой текст' : 'My text'}</Button>
            </ButtonSample>)}</Box>
          </Box>
        </ButtonDemoGroup>
        <ButtonDemoGroup>
          <Box className={styles.samples}>
            <Button startContent={<IconPlus aria-hidden='true' />}>{ru ? 'Создать' : 'Create'}</Button>
            <Button endContent={<IconArrowRight aria-hidden='true' />}>{ru ? 'Продолжить' : 'Continue'}</Button>
            <Button startContent={<IconDownload aria-hidden='true' />} endContent={<Badge>PDF</Badge>}>{ru ? 'Скачать' : 'Download'}</Button>
          </Box>
        </ButtonDemoGroup>
      </Box>
    </ButtonExampleCard>
  </DocumentationSection>;
}
