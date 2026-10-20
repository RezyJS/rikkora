import { useState, type ReactNode } from 'react';
import { Button, IconButton, Input, Checkbox, Flex, Grid, Textarea } from '@rikkora/ui';
import type { ButtonSize, ButtonVariant, FlexDirection } from '@rikkora/ui';
import { PreferencesContext, usePreferences, type Theme } from '../../preferences/PreferencesContext';
import { messages, type Language } from '../../localization/messages';
import { PreferencesControls } from '../PreferencesControls/PreferencesControls';
import styles from './Showcase.module.css';

const examples = ['Button', 'IconButton', 'Input', 'Checkbox', 'Flex', 'Grid', 'Textarea'] as const;
type Example = typeof examples[number];
const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'danger'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className={styles.field}><span>{label}</span>{children}</label>;
}

function Toggle({ label, checked, onChange }: {
  label: string; checked: boolean; onChange: (value: boolean) => void;
}) {
  return (
    <label className={styles.toggle}>
      <Checkbox checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

export function Showcase() {
  const site = usePreferences();
  const [localTheme, setLocalTheme] = useState<Theme | null>(null);
  const [localLanguage, setLocalLanguage] = useState<Language | null>(null);
  const theme = localTheme ?? site.theme;
  const language = localLanguage ?? site.language;
  const t = messages[language];
  const [example, setExample] = useState<Example>('Button');
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('md');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState(false);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [direction, setDirection] = useState<FlexDirection>('row');
  const [columns, setColumns] = useState(3);
  const isButton = example === 'Button' || example === 'IconButton';
  const isField = example === 'Input' || example === 'Checkbox' || example === 'Textarea';
  const items = [1, 2, 3, 4].map((number) => (
    <div key={number} className={styles.item}>{t.item} {number}</div>
  ));

  return (
    <section id='components' className={styles.section} aria-labelledby='components-title'>
      <div className={styles.container}>
        <h2 id='components-title' className={styles.title}>{site.t.components}</h2>
        <p className={styles.description}>{site.t.componentsDescription}</p>
        <Grid className={styles.showcase}>
          <Flex as='nav' className={styles.examples} aria-label={site.t.examples}>
            {examples.slice(0, 7).map((name) => (
              <Button key={name} variant={example === name ? 'secondary' : 'ghost'} aria-pressed={example === name}
                aria-controls='component-playground' onClick={() => setExample(name)}>
                {name}
              </Button>
            ))}
            <p className={styles.moreComponents}>{site.t.moreComponents}</p>
          </Flex>
          <PreferencesContext.Provider value={{ theme, language, t, setTheme: setLocalTheme, setLanguage: setLocalLanguage }}>
          <div id='component-playground' className={styles.playground}
            data-rkr-theme={theme === 'dark' ? 'violet-smoke' : 'violet-smoke-light'} lang={language}>
            <Flex className={styles.heading}>
              <h3>{example}</h3><span>{t.playground}</span>
              <div className={styles.preferences}><PreferencesControls /></div>
            </Flex>
            <Grid className={styles.workspace}>
              <Flex className={styles.preview} role='group' aria-label={t.preview}>
                {example === 'Button' && (
                  <Button variant={variant} size={size} disabled={disabled} loading={loading}>{t.buttonLabel}</Button>
                )}
                {example === 'IconButton' && (
                  <IconButton variant={variant} size={size} disabled={disabled} loading={loading}
                    aria-label={t.favorite} title={t.favorite} aria-pressed={favorite} onClick={() => setFavorite(!favorite)}>
                    <svg viewBox='0 0 24 24' fill={favorite ? 'currentColor' : 'none'} stroke='currentColor' strokeWidth='1.7' aria-hidden='true'>
                      <path d='m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z' />
                    </svg>
                  </IconButton>
                )}
                {example === 'Input' && (
                  <label className={styles.inputExample}>
                    <span>{t.inputLabel}</span>
                    <Input name='showcase-name' value={value} onChange={(event) => setValue(event.target.value)}
                      placeholder={t.placeholder} disabled={disabled} required={required} />
                  </label>
                )}
                {example === 'Textarea' && (
                  <label className={styles.textareaExample}>
                    <span>{t.messageLabel}</span>
                    <div className={styles.resizeBounds}>
                    <Textarea name='showcase-message' value={message} onChange={(event) => setMessage(event.target.value)}
                      placeholder={t.messagePlaceholder} disabled={disabled} required={required} />
                    </div>
                  </label>
                )}
                {example === 'Checkbox' && (
                  <label className={styles.toggle}>
                    <Checkbox name='showcase-updates' checked={checked} disabled={disabled} required={required}
                      onChange={(event) => setChecked(event.target.checked)} />
                    <span>{t.checkboxLabel}</span>
                  </label>
                )}
                {example === 'Flex' && (
                  <Flex className={styles.layout} direction={direction} gap={3} wrap>{items}</Flex>
                )}
                {example === 'Grid' && (
                  <Grid className={styles.layout} columns={columns} gap={3}>{items}</Grid>
                )}
              </Flex>
              <fieldset className={styles.properties}>
                <legend>{t.properties}</legend>
                {isButton && <>
                  <Field label={t.variant}>
                    <select value={variant} onChange={(event) => setVariant(event.target.value as ButtonVariant)}>
                      {variants.map((option) => <option key={option} value={option}>{t[option]}</option>)}
                    </select>
                  </Field>
                  <Field label={t.size}>
                    <select value={size} onChange={(event) => setSize(event.target.value as ButtonSize)}>
                      {sizes.map((option) => <option key={option} value={option}>{t[option]}</option>)}
                    </select>
                  </Field>
                  <Toggle label={t.loading} checked={loading} onChange={setLoading} />
                </>}
                {(isButton || isField) && <Toggle label={t.disabled} checked={disabled} onChange={setDisabled} />}
                {isField && <Toggle label={t.required} checked={required} onChange={setRequired} />}
                {example === 'Checkbox' && <Toggle label={t.checked} checked={checked} onChange={setChecked} />}
                {example === 'Flex' && (
                  <Field label={t.direction}>
                    <select value={direction} onChange={(event) => setDirection(event.target.value as FlexDirection)}>
                      <option value='row'>{t.row}</option><option value='column'>{t.column}</option>
                    </select>
                  </Field>
                )}
                {example === 'Grid' && (
                  <Field label={t.columns}>
                    <select value={columns} onChange={(event) => setColumns(Number(event.target.value))}>
                      {[1, 2, 3].map((number) => <option key={number} value={number}>{number}</option>)}
                    </select>
                  </Field>
                )}
              </fieldset>
            </Grid>
          </div>
          </PreferencesContext.Provider>
        </Grid>
      </div>
    </section>
  );
}
