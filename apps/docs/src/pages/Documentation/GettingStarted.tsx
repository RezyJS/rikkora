import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router';
import { Badge, Card, Flex, Grid, Heading, Stack, Text, Link, Box } from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import { CodeBlock } from './CodeBlock';
import { categories, componentDocs } from './componentDocs';
import { componentSlug } from '../../components/Showcase/catalog';
import styles from './Documentation.module.css';

export function GettingStarted() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  useEffect(() => { document.title = ru ? 'Документация — Rikkora UI' : 'Documentation — Rikkora UI'; }, [ru]);
  return <Flex as='article' direction='column' className={styles.article}>
    <Flex as='header' direction='column' className={styles.articleHeader}>
      <Text as='p' size='sm' tone='secondary'>{ru ? 'Начало работы' : 'Getting started'}</Text>
      <Heading level={1} size='4xl' tabIndex={-1} className={styles.pageTitle}>Rikkora UI</Heading>
      <Text as='p' size='lg' tone='secondary' className={styles.lead}>{ru ? 'React-компоненты для форм, композиции, навигации и обратной связи.' : 'React components for forms, layout, navigation and feedback.'}</Text>
      <Badge>{ru ? `${componentDocs.length} компонентов` : `${componentDocs.length} components`}</Badge>
    </Flex>
    <Flex as='section' direction='column' id='setup' className={styles.docSection} aria-labelledby='setup-heading'>
      <Heading id='setup-heading' level={2} size='2xl'>{ru ? 'Подключение' : 'Setup'}</Heading>
      <Text as='p' tone='secondary'>{ru ? 'Подключите стили один раз в корне приложения. Пример предполагает, что пакет уже доступен в проекте; публикация в npm пока не выполнена.' : 'Load styles once at the application root. This example assumes the package is already available in your project; npm publication is not available yet.'}</Text>
      <CodeBlock code={`import { Button, Field, Input } from '@rikkora/ui';\nimport '@rikkora/ui/styles.css';\n\nexport function Example() {\n  return (\n    <div data-rkr-theme="violet-smoke-light">\n      <form>\n        <Field label="Email" required>\n          <Input name="email" type="email" />\n        </Field>\n        <Button type="submit">Save</Button>\n      </form>\n    </div>\n  );\n}`} />
    </Flex>
    <Flex as='section' direction='column' id='themes' className={styles.docSection} aria-labelledby='themes-heading'>
      <Heading id='themes-heading' level={2} size='2xl'>{ru ? 'Темы и стилизация' : 'Themes and styling'}</Heading>
      <Text as='p' tone='secondary'>{ru ? 'Темы задаются атрибутом data-rkr-theme: violet-smoke-light или violet-smoke. Меняйте semantic tokens в CSS. Порталы сохраняют токены своей области. Выбор языка и сохранение темы — задачи приложения.' : 'Set data-rkr-theme to violet-smoke-light or violet-smoke. Override semantic tokens in CSS. Portals preserve their source scope tokens. Language selection and theme persistence belong to the application.'}</Text>
      <CodeBlock label='css' code={`.my-theme {\n  --rkr-color-action-primary: #5b5fd3;\n  --rkr-color-action-primary-hover: #5054c4;\n  --rkr-color-action-on-primary: #ffffff;\n  --rkr-radius-md: 0.5rem;\n}`} />
    </Flex>
    <Flex as='section' direction='column' id='conventions' className={styles.docSection} aria-labelledby='conventions-heading'>
      <Heading id='conventions-heading' level={2} size='2xl'>{ru ? 'Соглашения API' : 'API conventions'}</Heading>
      <Stack gap={3}>
        <Text as='p' tone='secondary'>{ru ? 'Контролы используют value/defaultValue и onChange; Checkbox и Switch — checked/defaultChecked. Поля поддерживают нативные name/value, ref, disabled, required и readOnly там, где они применимы.' : 'Controls use value/defaultValue and onChange; Checkbox and Switch use checked/defaultChecked. Controls retain native name/value, refs, disabled, required and readOnly where applicable.'}</Text>
        <Text as='p' tone='secondary'>{ru ? 'Составные компоненты используют Root, Trigger и Content. Управляйте ими через value/defaultValue + onValueChange или open/defaultOpen + onOpenChange. Не переключайте controlled и uncontrolled во время работы.' : 'Compound components use Root, Trigger and Content. Control them with value/defaultValue + onValueChange or open/defaultOpen + onOpenChange. Do not switch between controlled and uncontrolled modes.'}</Text>
        <Text as='p' tone='secondary'>{ru ? 'Field связывает один контрол с label/hint/error. FormControl передаёт disabled/invalid/required. Явные свойства дочернего контрола имеют приоритет.' : 'Field connects one control to its label/hint/error. FormControl shares disabled/invalid/required. Explicit child props take precedence.'}</Text>
      </Stack>
    </Flex>
    <Flex as='section' direction='column' id='components' className={styles.docSection} aria-labelledby='catalog-heading'>
      <Heading id='catalog-heading' level={2} size='2xl'>{ru ? 'Компоненты' : 'Components'}</Heading>
      <Grid className={styles.categoryGrid}>{categories.map((category) => <Card key={category.id} padding={5}>
        <Stack gap={3}><Heading level={3} size='lg'>{category.title[language]}</Heading>
          {category.names.map((name) => <Link as={RouterLink} className={styles.textLink} key={name} to={`/docs/components/${componentSlug(name)}`}>{name}<Box as='span' aria-hidden='true'>↗</Box></Link>)}
        </Stack>
      </Card>)}</Grid>
    </Flex>
  </Flex>;
}
