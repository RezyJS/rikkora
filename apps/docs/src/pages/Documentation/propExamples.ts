import type { ApiProp, ComponentDoc } from './componentDocs';

export function propAnchor(part: string, property: string) {
  const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `prop-${slug(part)}-${slug(property)}`;
}

export function individualProps(props: ApiProp[]) {
  return props.flatMap((property) => property.name.split(' / ').map((name) => {
    const result = { ...property, name };
    if (property.name === 'style / className') result.type = name === 'style' ? 'CSSProperties' : 'string';
    const descriptions: Record<string, [string, string]> = {
      defaultValue: ['Initial uncontrolled value, read when the component mounts.', 'Начальное неуправляемое значение, применяется при создании компонента.'],
      value: ['Controlled value; update it in the change handler.', 'Управляемое значение; обновляйте его в обработчике изменения.'],
      defaultChecked: ['Initial uncontrolled checked state, read on mount.', 'Начальное неуправляемое состояние выбора, применяется при создании.'],
      checked: ['Controlled checked state; update it in onChange.', 'Управляемое состояние выбора; обновляйте его в onChange.'],
      defaultOpen: ['Initial uncontrolled open state, read on mount.', 'Начальное неуправляемое состояние открытия, применяется при создании.'],
      open: ['Controlled open state; update it in onOpenChange.', 'Управляемое состояние открытия; обновляйте его в onOpenChange.'],
    };
    if (property.name.includes(' / ') && descriptions[name]) {
      const [en, ru] = descriptions[name];
      result.description = { en, ru };
    }
    return result;
  }));
}

const examples: Record<string, string> = {
  disabled: 'true', required: 'true', invalid: 'true', loading: 'true', readOnly: 'true',
  animated: 'false', decorative: 'true', wrap: 'true', multiple: 'true', modal: 'false',
  collapsible: 'true', loop: 'false', avoidCollisions: 'false',
  size: '"lg"', variant: '"outline"', tone: '"secondary"', level: '3',
  padding: '8', gap: '6', rowGap: '3', columnGap: '6', columns: '3', rows: '2',
  direction: '"column"', align: '"end"', justify: '"between"', orientation: '"horizontal"',
  rowsTextarea: '6', min: '10', max: '200', step: '5', value: '50', defaultValue: '"Example"',
  checked: 'true', defaultChecked: 'true', open: 'true', defaultOpen: 'true',
  name: '"email"', type: '"text"', 'aria-label': '"Example"', 'aria-labelledby': '"example-label"',
  label: '"Email"', title: '"Saved"', description: '"Use your work address."', error: '"Check the value."',
  controlId: '"email"', side: '"left"', sideOffset: '16', alignOffset: '8',
  delayDuration: '500', skipDelayDuration: '200', duration: '3000', maxVisible: '2',
  closeLabel: '"Close notification"', viewportLabel: '"Notifications"',
  page: '2', pageCount: '20', siblingCount: '2', previousLabel: '"Back"', nextLabel: '"Next"',
  alt: '"Rikka Inohana"', src: '"/avatar.jpg"', fallback: '"RI"', imageProps: '{ loading: "lazy" }',
  role: '"status"', shape: '"circle"', scope: '"row"', dir: '"rtl"', scrollHideDelay: '1200',
  href: '"#setup"', target: '"_blank"', rel: '"noopener noreferrer"',
  viewportProps: '{ tabIndex: 0, onScroll: (event) => console.log(event.currentTarget.scrollTop) }',
  style: '{ height: 180, width: 320 }', className: '"example"', overlayClassName: '"backdrop"',
  onChange: '(event) => console.log(event.target.value)', onOpenChange: '(open) => console.log(open)',
  onValueChange: '(value) => console.log(value)', onPageChange: '(page) => console.log(page)',
  onSelect: '() => console.log("Selected")', onEscapeKeyDown: '(event) => event.preventDefault()',
  getPageLabel: '(page) => `Go to page ${page}`', onDismiss: '() => console.log("Dismissed")',
  options: '[{ value: "basic", label: "Basic" }, { value: "pro", label: "Pro" }]',
};

export function exampleValue(doc: ComponentDoc, property: ApiProp): string {
  const { name, type } = property;
  const overrides: Record<string, Record<string, string>> = {
    Button: { type: '"submit"' },
    Input: { type: '"email"', value: '"you@example.com"' },
    Textarea: { rows: '6', value: '"First line\\nSecond line"' },
    Text: { as: '"strong"' }, Box: { as: '"section"' }, Flex: { as: '"nav"' }, Grid: { as: '"section"', justify: '"center"' },
    Badge: { variant: '"primary"' }, Card: { variant: '"filled"' }, Alert: { variant: '"danger"' },
    Checkbox: { onChange: '(event) => console.log(event.target.checked)' },
    Switch: { onChange: '(event) => console.log(event.target.checked)' },
    RadioGroup: { value: '"pro"', defaultValue: '"pro"' },
    Select: { value: '"light"', defaultValue: '"light"' },
    Tabs: { value: '"settings"', defaultValue: '"settings"', orientation: '"vertical"' },
    Accordion: { value: '"delivery"', defaultValue: '"delivery"', type: '"single"' },
    Toast: { type: '"foreground"' }, ScrollArea: { type: '"always"' },
  };
  if (overrides[doc.name]?.[name]) return overrides[doc.name][name];
  if (name === 'as') return '"section"';
  if (examples[name]) return examples[name];
  if (type === 'boolean') return property.defaultValue === 'true' ? 'false' : 'true';
  const literal = type.match(/'([^']+)'/);
  if (literal) return JSON.stringify(literal[1]);
  if (type === 'number') return '2';
  return '"Example"';
}

/** Replace one JSX attribute while preserving nested expressions and the complete usage example. */
function setAttribute(source: string, tag: string, name: string, expression: string) {
  const start = source.indexOf(`<${tag}`);
  if (start < 0) return source;
  let index = start + tag.length + 1;
  const insert = index;
  while (index < source.length) {
    while (/\s/.test(source[index] ?? '')) index++;
    if (source[index] === '>' || source.slice(index, index + 2) === '/>') break;
    const attrStart = index;
    while (/[\w:-]/.test(source[index] ?? '')) index++;
    if (index === attrStart) break;
    const attribute = source.slice(attrStart, index);
    while (/\s/.test(source[index] ?? '')) index++;
    if (source[index] === '=') {
      index++;
      while (/\s/.test(source[index] ?? '')) index++;
      const quote = source[index];
      if (quote === '"' || quote === "'") {
        index++;
        while (index < source.length && source[index] !== quote) { if (source[index] === '\\') index++; index++; }
        index++;
      } else if (quote === '{') {
        let depth = 1; index++;
        let string = '';
        while (index < source.length && depth) {
          const char = source[index++];
          if (string) { if (char === '\\') index++; else if (char === string) string = ''; }
          else if (char === '"' || char === "'" || char === '`') string = char;
          else if (char === '{') depth++;
          else if (char === '}') depth--;
        }
      }
    }
    if (attribute === name) return `${source.slice(0, attrStart)}${name}={${expression}}${source.slice(index)}`;
  }
  return `${source.slice(0, insert)} ${name}={${expression}}${source.slice(insert)}`;
}

export function propExample(doc: ComponentDoc, part: string, property: ApiProp): string {
  if (part === 'CSS variables') return `.example {\n  ${property.name}: ${property.type === 'CSS length' ? '14px' : '#7c5cff'};\n}`;
  if (property.name === 'children' || property.name === 'Native HTML props') return doc.usage;
  if (property.name === 'asChild') {
    const tag = `${doc.name}.${part.split(' / ')[0]}`;
    if (part.includes('Title')) return doc.usage.replace(`<${tag}>Settings</${tag}>`, `<${tag} asChild><Heading level={2}>Settings</Heading></${tag}>`).replace(`import { ${doc.name}`, `import { Heading, ${doc.name}`);
    return doc.usage;
  }
  if (doc.name === 'Link' && property.name === 'as') return `import { Link as RouterLink } from 'react-router';\nimport { Link } from '@rikkora/ui';\n\nexport function Example() {\n  return <Link as={RouterLink} to="/docs">Documentation</Link>;\n}`;
  if (part === 'useToast()') {
    const action = property.name === 'toast' ? 'toast({ title: "Saved" })' : property.name === 'dismiss' ? 'dismiss(id)' : 'dismissAll()';
    return `import { Button, ToastProvider, useToast } from '@rikkora/ui';\n\nfunction Actions() {\n  const { toast, dismiss, dismissAll } = useToast();\n  const id = 1; // Id returned by toast(message).\n  return <Button onClick={() => ${action}}>Run action</Button>;\n}\n\nexport function Example() {\n  return <ToastProvider><Actions /></ToastProvider>;\n}`;
  }
  let code = doc.usage;
  let tag = part === doc.name ? doc.name : `${doc.name}.${part.split(' / ')[0]}`;
  if (doc.name === 'Toast') tag = part === 'ToastProvider' ? 'ToastProvider' : 'Button';
  if (part === 'ToastMessage') {
    const field = `${property.name}: ${exampleValue(doc, property)},`;
    const existing = new RegExp(`${property.name}: '[^']*',`);
    return existing.test(code) ? code.replace(existing, field) : code.replace("title: 'Saved',", `title: 'Saved',\n      ${field}`);
  }
  if (property.name === 'viewportRef') {
    code = `import { useRef } from 'react';\n${code}`.replace('export function Example() {', 'export function Example() {\n  const viewport = useRef<HTMLDivElement>(null);');
    return setAttribute(code, tag, 'viewportRef', 'viewport');
  }
  if (property.name === 'container') {
    code = `import { useState } from 'react';\n${code}`.replace('export function Example() {', 'export function Example() {\n  const [container] = useState<HTMLElement | null>(() => document.body);');
    return setAttribute(code, tag, 'container', 'container');
  }
  const value = exampleValue(doc, property);
  code = setAttribute(code, tag, property.name, value);
  if (property.name === 'controlId') code = setAttribute(code, 'Input', 'id', value);
  return code;
}
