import type { ComponentDoc } from './types';

export const buttonSubtypeProps = {
  ButtonLink: ['href', 'as', 'target', 'rel'],
  ToggleButton: ['pressed', 'defaultPressed', 'onPressedChange'],
  ButtonGroup: ['children', 'orientation', 'fullWidth', 'aria-label'],
  SplitButton: ['size', 'menu', 'menuLabel'],
  ConfirmButton: ['title', 'description', 'confirmText', 'cancelText', 'pendingText', 'errorText', 'onConfirm', 'onConfirmError'],
  HoldToConfirm: ['holdDuration', 'holdingText', 'confirmedText', 'instructions', 'onConfirm'],
} satisfies Partial<Record<ComponentDoc['name'], readonly string[]>>;

export const buttonSubtypeNames = Object.keys(buttonSubtypeProps) as (keyof typeof buttonSubtypeProps)[];

export function buttonSubtypeDoc(doc: ComponentDoc): ComponentDoc {
  const properties = buttonSubtypeProps[doc.name as keyof typeof buttonSubtypeProps] as readonly string[] | undefined;
  if (!properties) return doc;
  return {
    ...doc,
    api: doc.api.map(part => ({
      ...part,
      props: part.props.filter(property => properties.includes(property.name)),
    })),
  };
}
