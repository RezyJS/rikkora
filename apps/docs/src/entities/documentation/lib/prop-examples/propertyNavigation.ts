import type { ApiProp } from '../../model/types';

export function propAnchor(part: string, property: string) {
  const slug = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  return `prop-${slug(part)}-${slug(property)}`;
}

export function individualProps(props: ApiProp[]) {
  return props.flatMap((property) =>
    property.name.split(' / ').map((name) => {
      const result = { ...property, name };
      if (property.name === 'style / className')
        result.type = name === 'style' ? 'CSSProperties' : 'string';
      const descriptions: Record<string, [string, string]> = {
        defaultValue: [
          'Initial value',
          'Начальное значение',
        ],
        value: [
          'Controlled value',
          'Управляемое значение',
        ],
        defaultChecked: [
          'Initial checked state',
          'Начальное состояние выбора',
        ],
        checked: [
          'Controlled checked state',
          'Управляемое состояние выбора',
        ],
        defaultOpen: [
          'Initial open state',
          'Начальное состояние открытия',
        ],
        open: [
          'Controlled open state',
          'Управляемое состояние открытия',
        ],
      };
      if (property.name.includes(' / ') && descriptions[name]) {
        const [en, ru] = descriptions[name];
        result.description = { en, ru };
      }
      return result;
    }),
  );
}
