import type { ApiProp, ComponentDoc } from '../model/types';
import { exampleValue } from './prop-examples/exampleValues';
import { setAttribute } from './prop-examples/jsxAttributes';
import type { PreviewValue } from './prop-examples/previewValues';

export {
  propAnchor,
  individualProps,
} from './prop-examples/propertyNavigation';
export { exampleValue } from './prop-examples/exampleValues';
export { previewValues } from './prop-examples/previewValues';
export type { PreviewValue } from './prop-examples/previewValues';

export function propExample(
  doc: ComponentDoc,
  part: string,
  property: ApiProp,
  expression?: string,
): string {
  if (part === 'CSS variables')
    return `.example {\n  ${property.name}: ${property.type === 'CSS length' ? '14px' : '#7c5cff'};\n}`;
  if (property.name === 'children' || property.name === 'Native HTML props')
    return doc.usage;
  if (property.name === 'asChild') {
    const tag = `${doc.name}.${part.split(' / ')[0]}`;
    if (part.includes('Title'))
      return doc.usage
        .replace(
          `<${tag}>Settings</${tag}>`,
          `<${tag} asChild><Heading level={2}>Settings</Heading></${tag}>`,
        )
        .replace(`import { ${doc.name}`, `import { Heading, ${doc.name}`);
    return doc.usage;
  }
  if (doc.name === 'Link' && property.name === 'as')
    return `import { Link as RouterLink } from 'react-router';\nimport { Link } from '@rikkora/ui';\n\nexport function Example() {\n  return <Link as={RouterLink} to="/docs">Documentation</Link>;\n}`;
  if (part === 'useToast()') {
    const action =
      property.name === 'toast' ? 'toast({ title: "Saved" })'
        : property.name === 'dismiss' ? 'dismiss(id)'
          : 'dismissAll()';
    return `import { Button, ToastProvider, useToast } from '@rikkora/ui';\n\nfunction Actions() {\n  const { toast, dismiss, dismissAll } = useToast();\n  const id = 1; // Id returned by toast(message).\n  return <Button onClick={() => ${action}}>Run action</Button>;\n}\n\nexport function Example() {\n  return <ToastProvider><Actions /></ToastProvider>;\n}`;
  }
  let code = doc.usage;
  let tag =
    part === doc.name ? doc.name : `${doc.name}.${part.split(' / ')[0]}`;
  if (doc.name === 'Toast')
    tag = part === 'ToastProvider' ? 'ToastProvider' : 'Button';
  if (part === 'ToastMessage') {
    const field = `${property.name}: ${expression ?? exampleValue(doc, property)},`;
    const existing = new RegExp(`${property.name}: '[^']*',`);
    return existing.test(code) ?
      code.replace(existing, field)
      : code.replace("title: 'Saved',", `title: 'Saved',\n      ${field}`);
  }
  if (property.name === 'viewportRef') {
    code = `import { useRef } from 'react';\n${code}`.replace(
      'export function Example() {',
      'export function Example() {\n  const viewport = useRef<HTMLDivElement>(null);',
    );
    return setAttribute(code, tag, 'viewportRef', 'viewport');
  }
  if (property.name === 'container') {
    code = `import { useState } from 'react';\n${code}`.replace(
      'export function Example() {',
      'export function Example() {\n  const [container] = useState<HTMLElement | null>(() => document.body);',
    );
    return setAttribute(code, tag, 'container', 'container');
  }
  const value = expression ?? exampleValue(doc, property);
  code = setAttribute(code, tag, property.name, value);
  if (doc.name === 'Button' && ['loadingText', 'loadingPlacement'].includes(property.name))
    code = setAttribute(code, tag, 'loading', 'true');
  if (doc.name === 'Input' && property.name === 'underline')
    code = setAttribute(code, tag, 'variant', '"hover"');
  if (property.name === 'controlId')
    code = setAttribute(code, 'Input', 'id', value);
  return code;
}

export function previewCode(
  doc: ComponentDoc,
  part: string,
  property: ApiProp,
  values: PreviewValue[],
): string {
  if (!values.length) return propExample(doc, part, property);
  const imports = new Set<string>();
  const examples = values.map((value, index) => {
    let code = propExample(doc, part, property, JSON.stringify(value));
    if (['Button', 'ButtonLink'].includes(doc.name) && property.name === 'size' && String(value).startsWith('icon')) {
      code = code.replace(
        new RegExp(`(<${doc.name}[^>]*>)[\\s\\S]*?(<\\/${doc.name}>)`),
        '$1<IconArrowRight size={20} aria-hidden="true" />$2',
      );
      imports.add("import { IconArrowRight } from '@tabler/icons-react';");
      code = setAttribute(code, doc.name, 'aria-label', '"Continue"');
    }
    code = code.replace(/^import .*;\n?/gm, (line) => {
      imports.add(line.trim());
      return '';
    });
    const functions = [...code.matchAll(/function (\w+)\(/g)].map(
      (match) => match[1],
    );
    for (const name of functions)
      code = code.replace(
        new RegExp('\\b' + name + '\\b', 'g'),
        name + (index + 1),
      );
    return code.trim();
  });
  return (
    [...imports].join('\n') +
    '\n\n' +
    examples.join('\n\n') +
    '\n\nexport function Example() {\n  return (\n    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}>\n' +
    values
      .map((_, index) => '      <Example' + (index + 1) + ' />')
      .join('\n') +
    '\n    </div>\n  );\n}'
  );
}
