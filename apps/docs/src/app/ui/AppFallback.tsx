import { Flex, Spinner, Text } from '@rikkora/ui';
import { SiteHeader } from '@/widgets/site-header';
import { usePreferences } from '@/shared/model/preferences';

export function AppFallback() {
  const { language } = usePreferences();
  return <>
    <SiteHeader />
    <Flex as='main' align='center' justify='center' gap={3} style={{ padding: 'var(--rkr-spacing-12)' }}>
      <Spinner />
      <Text role='status'>
        {language === 'ru' ? 'Загрузка документации…' : 'Loading documentation…'}
      </Text>
    </Flex>
  </>;
}
