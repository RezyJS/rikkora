import { IconArrowUpRight } from '@tabler/icons-react';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  Badge,
  Card,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Link,
} from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import { CodeBlock } from '@/shared/ui/documentation';
import { categories, componentDocs } from '@/entities/documentation';
import { componentSlug } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function GettingStarted() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  useEffect(() => {
    document.title =
      ru ? 'Документация — Rikkora UI' : 'Documentation — Rikkora UI';
  }, [ru]);
  return (
    <Flex
      as='article'
      direction='column'
      className={styles.article}
    >
      <Flex
        as='header'
        direction='column'
        className={styles.articleHeader}
      >
        <Text
          as='p'
          size='sm'
          tone='secondary'
        >
          {ru ? 'Начало работы' : 'Getting started'}
        </Text>
        <Heading
          level={1}
          size='4xl'
          tabIndex={-1}
          className={styles.pageTitle}
        >
          Rikkora UI
        </Heading>
        <Text
          as='p'
          size='lg'
          tone='secondary'
          className={styles.lead}
        >
          {ru ?
            'React-компоненты для форм, композиции, навигации и обратной связи.'
            : 'React components for forms, layout, navigation and feedback.'}
        </Text>
        <Badge>
          {ru ?
            `${componentDocs.length} компонентов`
            : `${componentDocs.length} components`}
        </Badge>
      </Flex>
      <Flex
        as='section'
        direction='column'
        id='setup'
        className={styles.docSection}
        aria-labelledby='setup-heading'
      >
        <Heading
          id='setup-heading'
          level={2}
          size='2xl'
        >
          {ru ? 'Подключение' : 'Setup'}
        </Heading>
        <Text
          as='p'
          tone='secondary'
        >
          {ru ?
            "Подключите стили один раз в корне приложения."
            : "Import the styles once at the application root."
          }
        </Text>
        <CodeBlock
          code={`import { Button, Field, Input } from '@rikkora/ui';\nimport '@rikkora/ui/styles.css';\n\nexport function Example() {\n  return (\n    <div data-rkr-theme="violet-smoke-light">\n      <form>\n        <Field label="Email" required>\n          <Input name="email" type="email" />\n        </Field>\n        <Button type="submit">Save</Button>\n      </form>\n    </div>\n  );\n}`}
        />
      </Flex>
      <Flex
        as='section'
        direction='column'
        id='themes'
        className={styles.docSection}
        aria-labelledby='themes-heading'
      >
        <Heading
          id='themes-heading'
          level={2}
          size='2xl'
        >
          {ru ? 'Темы и стилизация' : 'Themes and styling'}
        </Heading>
        <Text
          as='p'
          tone='secondary'
        >
          {ru ?
            "Задайте data-rkr-theme=\"violet-smoke-light\" для светлой темы или \"violet-smoke\" для тёмной. Цвета и отступы настраиваются через CSS-переменные."
            : "Set data-rkr-theme=\"violet-smoke-light\" for the light theme or \"violet-smoke\" for the dark theme. Customize colors and spacing with CSS variables."
          }
        </Text>
        <CodeBlock
          label='css'
          code={`.my-theme {\n  --rkr-color-action-primary: #5b5fd3;\n  --rkr-color-action-primary-hover: #5054c4;\n  --rkr-color-action-on-primary: #ffffff;\n  --rkr-radius-md: 0.5rem;\n}`}
        />
      </Flex>
      <Flex
        as='section'
        direction='column'
        id='conventions'
        className={styles.docSection}
        aria-labelledby='conventions-heading'
      >
        <Heading
          id='conventions-heading'
          level={2}
          size='2xl'
        >
          {ru ? 'Соглашения API' : 'API conventions'}
        </Heading>
        <Stack gap={3}>
          <Text
            as='p'
            tone='secondary'
          >
            {ru ?
              "Используйте value и onChange для управления значением поля. Для Checkbox и Switch задавайте checked, а для начального состояния — defaultChecked."
              : "Use value and onChange to control a field value. Checkbox and Switch use checked, or defaultChecked for their initial state."
            }
          </Text>
          <Text
            as='p'
            tone='secondary'
          >
            {ru ?
              "Составные компоненты собираются из Root, Trigger и Content. Открытием можно управлять через open и onOpenChange."
              : "Compose components using Root, Trigger and Content. Control the open state with open and onOpenChange."
            }
          </Text>
          <Text
            as='p'
            tone='secondary'
          >
            {ru ?
              "Field связывает поле с подписью, подсказкой и ошибкой. FormControl задаёт общее состояние disabled, invalid и required для группы полей."
              : "Field connects a control to its label, description and error. FormControl shares disabled, invalid and required states across a group of fields."
            }
          </Text>
        </Stack>
      </Flex>
      <Flex
        as='section'
        direction='column'
        id='components'
        className={styles.docSection}
        aria-labelledby='catalog-heading'
      >
        <Heading
          id='catalog-heading'
          level={2}
          size='2xl'
        >
          {ru ? 'Компоненты' : 'Components'}
        </Heading>
        <Grid className={styles.categoryGrid}>
          {categories.map((category) => (
            <Card
              key={category.id}
              padding={5}
            >
              <Stack gap={3}>
                <Heading
                  level={3}
                  size='lg'
                >
                  {category.title[language]}
                </Heading>
                {category.names.map((name) => (
                  <Link
                    as={RouterLink}
                    className={styles.textLink}
                    key={name}
                    to={`/docs/components/${componentSlug(name)}`}
                  >
                    {name}
                    <IconArrowUpRight size={16} aria-hidden='true' focusable='false' />
                  </Link>
                ))}
              </Stack>
            </Card>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
