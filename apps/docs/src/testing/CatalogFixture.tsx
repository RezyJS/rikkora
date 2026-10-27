import { PreferencesControls } from '@/features/preferences-controls';
import { useState } from 'react';
import { Box, Button, Flex, Heading } from '@rikkora/ui';
import { SiteHeader } from '@/widgets/site-header';
import { ComponentPlayground } from '@/features/component-playground';
import {
  componentNames,
  type ComponentName,
} from '@/entities/documentation';
import { usePreferences } from '@/shared/model/preferences';
import '../app/styles/index.css';

export function CatalogFixture() {
  const { t } = usePreferences();
  const [name, setName] = useState<ComponentName>('Button');
  return (
    <>
      <SiteHeader />
      <Box padding={4}>
        <Heading>{t.components}</Heading>
        <Flex
          as='nav'
          wrap
          gap={2}
          aria-label={t.examples}
        >
          {componentNames.map((component) => (
            <Button
              key={component}
              onClick={() => setName(component)}
            >
              {component}
            </Button>
          ))}
        </Flex>
        <ComponentPlayground
          key={name}
          name={name}
          preferencesControls={<PreferencesControls />}
        />
      </Box>
    </>
  );
}
