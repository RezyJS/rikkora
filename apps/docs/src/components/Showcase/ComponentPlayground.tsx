import { IconStar } from '@tabler/icons-react';
import { lazy, Suspense, useState } from 'react';
import { Box, Button, Input, Checkbox, Flex, Grid, Heading, Text, Textarea, Field, Select } from '@rikkora/ui';
import type { ButtonSize, ButtonVariant, FlexDirection } from '@rikkora/ui';
import { PreferencesContext, usePreferences, type Theme } from '../../preferences/PreferencesContext';
import { messages, type Language } from '../../localization/messages';
import { PreferencesControls } from '../PreferencesControls/PreferencesControls';
import styles from './Showcase.module.css';
import { additionalExamples, type ComponentName } from "./componentNames";
import { catalog } from "./componentCatalog";
import { ComponentExample } from './ComponentExample';
import { ConfiguredExample } from './ConfiguredExample';
import { CodeViewer } from '../CodeViewer/CodeViewer';
const PropControls = lazy(() => import('./PropControls').then((module) => ({ default: module.PropControls })));
import { usePlaygroundState } from './usePlaygroundState';

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'danger'];
const sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'icon-xs', 'icon-sm', 'icon', 'icon-lg', 'icon-xl'];

function Toggle({ label, checked, onChange }: {
  label: string; checked: boolean; onChange: (value: boolean) => void;
}) {
  return (
    <Flex as='label' className={styles.toggle}>
      <Checkbox checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <Text size='sm'>{label}</Text>
    </Flex>
  );
}

export function ComponentPlayground({ name: example, showSummary = true }: { name: ComponentName; showSummary?: boolean }) {
  const site = usePreferences();
  const [localTheme, setLocalTheme] = useState<Theme | null>(null);
  const [localLanguage, setLocalLanguage] = useState<Language | null>(null);
  const theme = localTheme ?? site.theme;
  const language = localLanguage ?? site.language;
  const t = messages[language];
  const {
    variant, setVariant,
    size, setSize,
    disabled, setDisabled,
    loading, setLoading,
    required, setRequired,
    value, setValue,
    message, setMessage,
    checked, setChecked,
    favorite, setFavorite,
    direction, setDirection,
    columns, setColumns,
    text, setText,
    revision, configuration,
    configure, reset,
  } = usePlaygroundState();
  const isButton = example === 'Button';
  const isField = example === 'Input' || example === 'Checkbox' || example === 'Textarea';
  const additionalExample = additionalExamples.find((name) => name === example);
  const items = [1, 2, 3, 4].map((number) => (
    <Box padding={4} key={number} className={styles.item}>{text ?? t.item} {number}</Box>
  ));

  return (
    <PreferencesContext.Provider value={{ theme, language, t, setTheme: setLocalTheme, setLanguage: setLocalLanguage }}>
      <Box id='component-playground' className={styles.playground}
        data-rkr-theme={theme === 'dark' ? 'violet-smoke' : 'violet-smoke-light'} lang={language}>
        <Flex className={styles.heading}>
          <Heading level={3} size='lg'>{example}</Heading><Text size='sm' tone='secondary'>{t.playground}</Text>
          <Box className={styles.preferences}><PreferencesControls /></Box>
        </Flex>
        <Grid className={styles.workspace} data-has-controls='true'>
          <Flex className={styles.preview} role='group' aria-label={t.preview}>
            <ConfiguredExample name={example} configuration={configuration} text={text} onChange={configure}>
            {additionalExample && <ComponentExample key={`${additionalExample}-${revision}`} name={additionalExample} configuration={configuration} text={text} onConfigurationChange={configure} />}
            {example === 'Button' && (
              <Button variant={variant} size={size} disabled={disabled} loading={loading}
                aria-label={size.startsWith('icon') ? t.favorite : undefined}
                aria-pressed={size.startsWith('icon') ? favorite : undefined}
                onClick={size.startsWith('icon') ? () => setFavorite(!favorite) : undefined}>
                {size.startsWith('icon') ? (
                  <IconStar size={20} fill={favorite ? 'currentColor' : 'none'} stroke={1.7} aria-hidden='true' focusable='false' />
                ) : (text ?? t.buttonLabel)}
              </Button>
            )}
            {example === 'Input' && (
              <Field label={t.inputLabel} className={styles.inputExample}>
                <Input name='showcase-name' value={value} onChange={(event) => setValue(event.target.value)}
                  placeholder={text ?? t.placeholder} disabled={disabled} required={required} />
              </Field>
            )}
            {example === 'Textarea' && (
              <Field label={t.messageLabel} className={styles.textareaExample}>
                <Box className={styles.resizeBounds}>
                <Textarea name='showcase-message' value={message} onChange={(event) => setMessage(event.target.value)}
                  placeholder={text ?? t.messagePlaceholder} disabled={disabled} required={required} />
                </Box>
              </Field>
            )}
            {example === 'Checkbox' && (
              <Flex as='label' className={styles.toggle}>
                <Checkbox name='showcase-updates' checked={checked} disabled={disabled} required={required}
                  onChange={(event) => setChecked(event.target.checked)} />
                <Text size='sm'>{text ?? t.checkboxLabel}</Text>
              </Flex>
            )}
            {example === 'Flex' && (
              <Flex className={styles.layout} direction={direction} gap={3} wrap>{items}</Flex>
            )}
            {example === 'Grid' && (
              <Grid className={styles.layout} columns={columns} gap={3}>{items}</Grid>
            )}
            </ConfiguredExample>
          </Flex>
          <Box as='fieldset' className={styles.properties}>
            <Box as='legend'>{t.properties}</Box>
            <Field label={language === 'ru' ? 'Текст' : 'Text'}>
              <Input value={text ?? ''} placeholder={language === 'ru' ? 'Текст примера' : 'Example text'} onChange={(event) => setText(event.target.value)} />
            </Field>
            {additionalExample && showSummary && <>
              <Text as='p' size='sm' tone='secondary' className={styles.apiDescription}>{catalog[additionalExample][language]}</Text>
              <CodeViewer code={catalog[additionalExample].code} compact />
            </>}
            {isButton && <>
              <Field label={t.variant}>
                <Select value={variant} onChange={(event) => setVariant(event.target.value as ButtonVariant)}>
                  {variants.map((option) => <Box as='option' key={option} value={option}>{t[option]}</Box>)}
                </Select>
              </Field>
              <Field label={t.size}>
                <Select value={size} onChange={(event) => setSize(event.target.value as ButtonSize)}>
                  {sizes.map((option) => <Box as='option' key={option} value={option}>{option === 'sm' || option === 'md' || option === 'lg' ? t[option] : option}</Box>)}
                </Select>
              </Field>
              <Toggle label={t.loading} checked={loading} onChange={setLoading} />
            </>}
            {(isButton || isField) && <Toggle label={t.disabled} checked={disabled} onChange={setDisabled} />}
            {isField && <Toggle label={t.required} checked={required} onChange={setRequired} />}
            {example === 'Checkbox' && <Toggle label={t.checked} checked={checked} onChange={setChecked} />}
            {example === 'Flex' && (
              <Field label={t.direction}>
                <Select value={direction} onChange={(event) => setDirection(event.target.value as FlexDirection)}>
                  <Box as='option' value='row'>{t.row}</Box><Box as='option' value='column'>{t.column}</Box>
                </Select>
              </Field>
            )}
            {example === 'Grid' && (
              <Field label={t.columns}>
                <Select value={columns} onChange={(event) => setColumns(Number(event.target.value))}>
                  {[1, 2, 3].map((number) => <Box as='option' key={number} value={number}>{number}</Box>)}
                </Select>
              </Field>
            )}
            <Suspense fallback={null}><PropControls key={revision} name={example} configuration={configuration} onChange={configure} ru={language === 'ru'} /></Suspense>
            <Button variant='outline' size='sm' onClick={reset}>{language === 'ru' ? 'Сбросить настройки' : 'Reset settings'}</Button>
          </Box>
        </Grid>
      </Box>
    </PreferencesContext.Provider>
  );
}
