import { Text, Box, Stack, Select, Field, ScrollArea } from '@rikkora/ui';
import styles from '../Showcase.module.css';
import type { AdditionalExample } from '../componentNames';
import type { ExampleRenderContext } from './types';

export function renderScrollAreaExample(
  name: AdditionalExample,
  context: ExampleRenderContext,
) {
  const {
    ru,
    scrollOrientation,
    setScrollOrientation,
    scrollType,
    setScrollType,
  } = context;
  switch (name) {
    case 'ScrollArea':
      return (
        <Stack
          gap={3}
          style={{ width: '100%' }}
        >
          <Stack
            direction='row'
            gap={3}
          >
            <Field label={ru ? 'Направление' : 'Orientation'}>
              <Select
                value={scrollOrientation}
                onChange={(event) =>
                  setScrollOrientation(
                    event.target.value as typeof scrollOrientation,
                  )
                }
              >
                <Box
                  as='option'
                  value='vertical'
                >
                  {ru ? 'Вертикально' : 'Vertical'}
                </Box>
                <Box
                  as='option'
                  value='horizontal'
                >
                  {ru ? 'Горизонтально' : 'Horizontal'}
                </Box>
                <Box
                  as='option'
                  value='both'
                >
                  {ru ? 'Оба' : 'Both'}
                </Box>
              </Select>
            </Field>
            <Field label={ru ? 'Полосы' : 'Scrollbars'}>
              <Select
                value={scrollType}
                onChange={(event) =>
                  setScrollType(event.target.value as typeof scrollType)
                }
              >
                <Box
                  as='option'
                  value='always'
                >
                  {ru ? 'Всегда' : 'Always'}
                </Box>
                <Box
                  as='option'
                  value='hover'
                >
                  {ru ? 'При наведении' : 'On hover'}
                </Box>
                <Box
                  as='option'
                  value='scroll'
                >
                  {ru ? 'При прокрутке' : 'On scroll'}
                </Box>
                <Box
                  as='option'
                  value='auto'
                >
                  {ru ? 'При переполнении' : 'On overflow'}
                </Box>
              </Select>
            </Field>
          </Stack>
          <ScrollArea
            key={scrollOrientation}
            orientation={scrollOrientation}
            type={scrollType}
            aria-label={ru ? 'Пример прокрутки' : 'Scroll example'}
            style={{
              height: 160,
              border: '1px solid var(--rkr-color-border-default)',
              borderRadius: 'var(--rkr-radius-md)',
            }}
          >
            <Stack
              gap={0}
              style={{
                padding: 'var(--rkr-spacing-3)',
                width: scrollOrientation === 'vertical' ? undefined : 640,
              }}
            >
              {Array.from(
                { length: scrollOrientation === 'horizontal' ? 3 : 16 },
                (_, index) => (
                  <Text
                    as='div'
                    key={index}
                    className={styles.scrollItem}
                  >
                    {String(index + 1).padStart(2, '0')}{' '}
                    <Box as='span'>
                      {ru ?
                        'Содержимое прокручиваемой области'
                      : 'Content inside the scroll area'}
                    </Box>
                  </Text>
                ),
              )}
            </Stack>
          </ScrollArea>
        </Stack>
      );
  }
}
