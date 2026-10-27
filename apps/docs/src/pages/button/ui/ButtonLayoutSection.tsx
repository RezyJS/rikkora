import { buttonExampleCode } from '../model/buttonExampleCode';
import { ButtonCompactExample } from './ButtonCompactExample';
import { IconPlus } from '@tabler/icons-react';
import { Box, Button, type ButtonSize, type ButtonRadius } from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { DocumentationSection } from '@/shared/ui/documentation';
import { ButtonExampleCard, ButtonDemoGroup, ButtonSample } from './ButtonExampleCard';
import styles from './ButtonDocs.module.css';
const radii: ButtonRadius[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];
const sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const iconSizes: ButtonSize[] = ['icon-xs', 'icon-sm', 'icon', 'icon-lg', 'icon-xl'];

export function ButtonLayoutSection() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return <DocumentationSection id='layout' title={ru ? 'Размеры кнопки' : 'Button sizes'}>
    <ButtonExampleCard title={ru ? "Размеры, скругление и ширина" : "Sizes, radius and width"} props={["size", "radius", "fullWidth", "aria-label"]} code={buttonExampleCode.layout(ru)} showTitle={false}>
      <Box className={styles.rows}>
        <ButtonDemoGroup>
          <Box className={styles.rows}>
            <Box className={styles.samples}>{sizes.map(size => <ButtonSample key={size} >
              <Button size={size}>{ru ? 'Кнопка' : 'Button'}</Button>
            </ButtonSample>)}</Box>
            <Box className={styles.samples}>{iconSizes.map(size => <ButtonSample key={size} >
              <Button size={size} variant='outline' aria-label={`${ru ? 'Создать' : 'Create'} (${size})`}>
                <IconPlus size={18} aria-hidden='true' />
              </Button>
            </ButtonSample>)}</Box>
          </Box>
        </ButtonDemoGroup>

        <ButtonDemoGroup>
          <Box className={styles.samples}>{radii.map(radius => <ButtonSample key={radius} >
            <Button variant='outline' radius={radius}>{ru ? 'Кнопка' : 'Button'}</Button>
          </ButtonSample>)}</Box>
        </ButtonDemoGroup>
        <ButtonDemoGroup>
          <Button fullWidth>{ru ? 'Войти в аккаунт' : 'Sign in'}</Button>
        </ButtonDemoGroup>
      </Box>
    </ButtonExampleCard>
    <ButtonCompactExample />
  </DocumentationSection>;
}
