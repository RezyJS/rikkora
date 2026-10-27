import { useState } from 'react';
import {
  Badge,
  Card,
  Flex,
  Heading,
  RadioGroup,
  Separator,
  Stack,
  Text,
} from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function PlanExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [plan, setPlan] = useState('starter');

  return (
    <Card
      variant='filled'
      className={styles.sample}
      padding={5}
    >
      <Stack gap={4}>
        <Heading
          level={3}
          size='lg'
        >
          {ru ? 'Выберите план' : 'Choose a plan'}
        </Heading>
        <RadioGroup
          aria-label={ru ? 'План' : 'Plan'}
          name='plan'
          value={plan}
          onValueChange={setPlan}
          options={[
            { value: 'starter', label: 'Starter' },
            { value: 'pro', label: 'Pro' },
            { value: 'team', label: 'Team', disabled: true },
          ]}
        />
        <Separator />
        <Flex
          justify='between'
          align='center'
          gap={3}
        >
          <Text
            size='sm'
            tone='secondary'
          >
            {ru ? 'Выбрано' : 'Selected'}
          </Text>
          <Badge variant='primary'>
            {plan === 'starter' ? 'Starter' : 'Pro'}
          </Badge>
        </Flex>
      </Stack>
    </Card>
  );
}
