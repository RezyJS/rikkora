import { useState } from 'react';
import { Box, Button, Flex, Input, Stack, Text } from '@rikkora/ui';
import { usePreferences } from '../../../preferences/PreferencesContext';
import styles from '../ShowcaseScene.module.css';

export function QuantityExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [quantity, setQuantity] = useState(2);

  return (
    <Box className={styles.sample}>
      <Stack gap={2}>
        <Box
          as='label'
          htmlFor='example-quantity'
        >
          <Text size='sm'>{ru ? 'Количество' : 'Quantity'}</Text>
        </Box>
        <Flex gap={2}>
          <Button
            size='icon'
            variant='secondary'
            aria-label={ru ? 'Уменьшить количество' : 'Decrease quantity'}
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}
          >
            −
          </Button>
          <Input
            id='example-quantity'
            className={styles.quantity}
            type='number'
            min={1}
            max={99}
            value={quantity}
            onChange={(event) =>
              setQuantity(
                Math.min(99, Math.max(1, Number(event.target.value) || 1)),
              )
            }
          />
          <Button
            size='icon'
            variant='secondary'
            aria-label={ru ? 'Увеличить количество' : 'Increase quantity'}
            disabled={quantity >= 99}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}
