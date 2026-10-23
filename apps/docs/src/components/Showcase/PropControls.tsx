import { useState } from 'react';
import { Box, Field, Heading, Input, Select, Stack, Switch, Text, Textarea } from '@rikkora/ui';
import { componentDocs, type ApiProp } from '../../pages/Documentation/componentDocs';
import { individualProps } from '../../pages/Documentation/propExamples';
import type { ComponentName } from './catalog';
import type { ExampleConfiguration } from './exampleConfiguration';

const structured = ['options', 'imageProps', 'viewportProps', 'style'];

function ObjectControl({ label, array, onChange, ru }: {
  label: string; array: boolean; onChange: (value: unknown) => void; ru: boolean;
}) {
  const [source, setSource] = useState('');
  const [error, setError] = useState(false);
  return <Field label={label} error={error ? (ru ? 'Введите корректный JSON нужного типа.' : 'Enter valid JSON of the expected type.') : undefined}>
    <Textarea rows={3} value={source} placeholder={array ? '[{"value":"a","label":"A"}]' : '{}'} onChange={(event) => {
      setSource(event.target.value);
      try {
        const value: unknown = event.target.value.trim() ? JSON.parse(event.target.value) : undefined;
        if (value !== undefined && (!value || typeof value !== 'object' || Array.isArray(value) !== array)) throw new Error('Invalid shape');
        if (array && value !== undefined && !(value as unknown[]).every((item) => item && typeof item === 'object' && typeof (item as Record<string, unknown>).value === 'string' && typeof (item as Record<string, unknown>).label === 'string')) throw new Error('Invalid option');
        setError(false); onChange(value);
      } catch { setError(true); }
    }} />
  </Field>;
}

function editable(property: ApiProp) {
  return !property.name.startsWith('default') && !property.name.startsWith('aria-labelledby')
    && !['children', 'asChild', 'container', 'controlId'].includes(property.name)
    && !property.name.startsWith('on') && !property.type.includes('=>')
    && (property.type === 'boolean' || property.type === 'number' || property.type === 'string'
      || property.type === 'ReactNode' || property.type.includes("'") || property.type === 'number | string'
      || ['value', 'padding', 'level', 'as', 'type', 'className', ...structured].includes(property.name));
}

export function PropControls({ name, configuration, onChange, ru }: {
  name: ComponentName; configuration: ExampleConfiguration; ru: boolean;
  onChange: (part: string, property: string, value: unknown) => void;
}) {
  const doc = componentDocs.find((entry) => entry.name === name)!;
  return <Stack gap={5}>{doc.api.filter((part) => !['CSS variables', 'ToastMessage', 'useToast()'].includes(part.name)).map((part) => {
    const existingControls = ['Button', 'IconButton', 'Input', 'Textarea', 'Checkbox', 'Flex', 'Grid'].includes(name)
      ? ['variant', 'size', 'disabled', 'loading', 'required', 'checked', 'columns', 'direction'] : [];
    const properties = individualProps(part.props).filter((property) => editable(property) && !existingControls.includes(property.name)
      && !(name === 'Link' && property.name === 'as'));
    const target = part.name.split(' / ')[0];
    if (!properties.length) return null;
    return <Stack gap={3} key={part.name}>
      {part.name !== name && <Heading level={4} size='sm'>{part.name}</Heading>}
      {properties.map((property) => {
        const value = configuration[target]?.[property.name];
        const options = property.name === 'as'
          ? name === 'Text' ? ['span', 'p', 'div', 'small', 'strong', 'em'] : ['div', 'section', 'article', 'nav', 'header', 'footer']
          : name === 'Input' && property.name === 'type' ? ['text', 'email', 'password', 'search', 'tel', 'url', 'number']
          : Array.from(property.type.matchAll(/'([^']+)'/g), (match) => match[1]);
        const numbers = property.type.match(/^\d+(?: \| \d+)*$/)?.[0].split(' | ');
        const label = property.name;
        if (structured.includes(label)) return <ObjectControl key={label} label={label} array={label === 'options'} ru={ru}
          onChange={(next) => onChange(target, label, next)} />;
        if (property.type === 'boolean') return <Field label={label} key={label}>
          <Switch checked={value === undefined ? property.defaultValue === 'true' : Boolean(value)}
            onChange={(event) => onChange(target, label, event.target.checked)} />
        </Field>;
        if (options.length || numbers) return <Field label={label} key={label}>
          <Select value={value === undefined ? '' : String(value)} onChange={(event) => onChange(target, label,
            event.target.value === '' ? undefined : numbers ? Number(event.target.value) : event.target.value)}>
            <Box as='option' value=''>{ru ? 'По умолчанию' : 'Default'} ({property.defaultValue})</Box>
            {(numbers ?? options).map((option) => <Box as='option' key={option} value={option}>{option}</Box>)}
          </Select>
        </Field>;
        const numeric = property.type === 'number' || property.type === 'number | string' || (label === 'value' && ['Progress', 'Slider', 'Pagination'].includes(name));
        return <Field label={label} key={label}>
          <Input type={numeric ? 'number' : 'text'} value={value === undefined ? '' : String(value)} placeholder={property.defaultValue}
            onChange={(event) => onChange(target, label, event.target.value === '' ? undefined : numeric ? event.target.valueAsNumber : event.target.value)} />
        </Field>;
      })}
    </Stack>;
  })}<Text as='p' size='xs' tone='secondary'>{ru ? 'События проверяются взаимодействием с примером. Объекты задаются в JSON. Использование ref и функций показано в примерах свойств.' : 'Trigger events by interacting with the example. Enter objects as JSON. Refs and functions are covered in the property examples.'}</Text></Stack>;
}
