import {
  componentNames,
  componentSlug,
} from '../../components/Showcase/componentNames';
import type { ComponentDoc } from './component-docs/types';
import { localized } from './component-docs/builders';
import {
  categories,
  summaries,
  sourceFolders,
} from './component-docs/metadata';
import { api } from './component-docs/api';
import { usageFor } from './component-docs/usage';
import {
  nativeLabel,
  notes,
  keyboardFor,
} from './component-docs/accessibility';

export type {
  Localized,
  ApiProp,
  ApiPart,
  KeyboardEntry,
  ComponentDoc,
} from './component-docs/types';
export { localized } from './component-docs/builders';
export { categories } from './component-docs/metadata';

export const componentDocs: ComponentDoc[] = categories.flatMap((category) =>
  category.names.map((component) => ({
    name: component,
    slug: componentSlug(component),
    category: category.id,
    summary: summaries[component],
    usage: usageFor(component),
    api: api[component],
    accessibility:
      notes[component] ??
      ((
        [
          ...[
            'Input',
            'Textarea',
            'Checkbox',
            'Switch',
            'RadioGroup',
            'Select',
            'Slider',
          ],
        ].includes(component)
      ) ?
        [nativeLabel]
      : [
          localized(
            'Native HTML semantics',
            'Нативная HTML-семантика',
          ),
        ]),
    keyboard: keyboardFor(component),
    source:
      Object.entries(sourceFolders).find(([, members]) =>
        members.includes(component),
      )?.[0] ??
      (['Popover', 'Tooltip', 'DropdownMenu'].includes(component) ?
        `Overlays/${component}.tsx`
      : `${component}/${component}.tsx`),
  })),
);

if (componentDocs.length !== componentNames.length)
  throw new Error('Component documentation is incomplete');
