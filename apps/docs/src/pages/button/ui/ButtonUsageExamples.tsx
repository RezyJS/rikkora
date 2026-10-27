import { Flex, Heading } from '@rikkora/ui';
import { buttonDoc } from '@/entities/documentation';
import { usePreferences } from '@/shared/model/preferences';
import { documentationStyles as articleStyles } from '@/shared/ui/documentation';
import { ComponentPlaygroundDialog } from '@/widgets/component-documentation';
import { buttonExampleCode } from '../model/buttonExampleCode';
import { ButtonExampleCard } from './ButtonExampleCard';
import { ButtonPreview } from './ButtonPreview';
import styles from './ButtonDocs.module.css';

export function ButtonUsageExamples() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  return <Flex as='section' id='usage' direction='column' className={articleStyles.docSection} aria-labelledby='usage-heading'>
    <Flex className={styles.sectionHeading}>
      <Heading id='usage-heading' level={2} size='2xl'>{ru ? 'Использование' : 'Usage'}</Heading>
      <ComponentPlaygroundDialog doc={buttonDoc} ru={ru} />
    </Flex>
    <ButtonExampleCard title={ru ? 'Обычная кнопка' : 'Basic button'}
      code={buttonExampleCode.basic(ru)} showTitle={false}>
      <ButtonPreview ru={ru} />
    </ButtonExampleCard>
  </Flex>;
}
