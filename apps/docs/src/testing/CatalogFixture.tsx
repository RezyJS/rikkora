import { useState } from 'react';
import { Box, Button, Flex, Heading } from '@rikkora/ui';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';
import { ComponentPlayground } from '../components/Showcase/ComponentPlayground';
import {
  componentNames,
  type ComponentName,
} from '../components/Showcase/componentNames';
import { usePreferences } from '../preferences/PreferencesContext';
import '../index.css';

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
        />
      </Box>
    </>
  );
}
