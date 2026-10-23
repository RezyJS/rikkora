import type { ApiProp, ComponentDoc } from '../component-docs/types';
import { exampleValue } from './exampleValues';

export type PreviewValue = string | number | boolean;

export function previewValues(
  doc: ComponentDoc,
  part: string,
  property: ApiProp,
): PreviewValue[] {
  const nonvisual = [
    'open', 'defaultOpen', 'as', 'asChild', 'container', 'controlId', 'name',
    'href', 'rel', 'target', 'required', 'readOnly', 'decorative', 'level',
    'modal', 'loop', 'collapsible', 'activationMode', 'avoidCollisions',
    'duration', 'maxVisible', 'delayDuration', 'skipDelayDuration',
    'scrollHideDelay', 'min', 'max', 'step', 'forceMount', 'role', 'scope', 'src',
  ];
  if (
    part === 'CSS variables' || (doc.name === 'Toast' && part !== 'ToastMessage') ||
    property.name.startsWith('on') ||
    property.name.startsWith('aria-') || nonvisual.includes(property.name) ||
    property.type.includes('=>') || /Ref|Props|HTML props/.test(property.type) ||
    (property.name === 'type' && !['Input', 'ScrollArea'].includes(doc.name))
  ) return [];
  if (doc.name === 'Breadcrumbs' && property.name === 'separator') return ['/', '›', '·'];
  if (doc.name === 'Avatar' && property.name === 'alt') return ['Rikka Inohana', 'Alex Smith'];
  if (doc.name === 'Avatar' && property.name === 'fallback') return ['RI', 'RK'];
  if (doc.name === 'Input' && property.name === 'type')
    return [
      'text',
      'email',
      'password',
      'number',
      'search',
      'tel',
      'url',
      'date',
      'time',
      'color',
      'file',
    ];
  if (property.type === 'boolean') return [false, true];
  const literals = property.type.split(' | ');
  if (literals.every((value) => /^'[^']*'$|^-?\d+(?:\.\d+)?$/.test(value))) {
    return literals.map((value) =>
      value.startsWith("'") ? value.slice(1, -1) : Number(value),
    );
  }
  const samples: Record<string, PreviewValue[]> = {
    gap: [0, 2, 4, 8],
    rowGap: [0, 2, 4, 8],
    columnGap: [0, 2, 4, 8],
    columns: [1, 2, 3],
    rows: [1, 2, 3],
    width: [240, 320, 400],
    min: [0, 25],
    max: [50, 100],
    step: [1, 10],
    page: [1, 2, 3],
    pageCount: [1, 5, 12],
    siblingCount: [0, 1, 2],
  };
  if (samples[property.name]) return samples[property.name];
  if (
    [
      'value',
      'defaultValue',
      'description',
      'error',
      'label',
      'title',
      'fallback',
      'alt',
      'src',
      'duration',
      'maxVisible',
      'sideOffset',
      'alignOffset',
      'delayDuration',
      'skipDelayDuration',
      'scrollHideDelay',
    ].includes(property.name)
  ) {
    if (property.name === 'value' && ['Progress', 'Slider'].includes(doc.name))
      return [0, 50, 100];
    if (
      ['value', 'defaultValue'].includes(property.name) &&
      doc.name === 'Accordion'
    )
      return ['one', 'two'];
    try {
      const value: unknown = JSON.parse(exampleValue(doc, property));
      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
      )
        return [value];
    } catch {
      /* Code-only expressions do not become runtime props. */
    }
  }
  return [];
}
