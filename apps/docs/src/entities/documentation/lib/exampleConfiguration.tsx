import { Children, cloneElement, isValidElement, type ReactNode } from 'react';
import * as UI from '@rikkora/ui';
import type { ComponentName } from "../model/componentNames";

export type ExampleConfiguration = Record<string, Record<string, unknown>>;

/** Applies settings to actual kit elements, including compound component parts. */
export function configureExample(
  tree: ReactNode, name: ComponentName, configuration: ExampleConfiguration, text?: string,
  onChange?: (part: string, property: string, value: unknown) => void,
) {
  const component = UI[name as keyof typeof UI];
  const targets = new Map<unknown, string>();
  if (typeof component === 'function' || (component && typeof component === 'object' && '$$typeof' in component)) targets.set(component, name);
  if (component && typeof component === 'object') {
    for (const [part, value] of Object.entries(component)) if (/^[A-Z]/.test(part)) targets.set(value, part);
  }
  if (name === 'Toast') targets.set(UI.ToastProvider, 'ToastProvider');
  let textChanged = false;
  function visit(node: ReactNode): ReactNode {
    if (!isValidElement<Record<string, unknown>>(node)) return node;
    const part = targets.get(node.type);
    const settings = part ? configuration[part] ?? {} : {};
    const props: Record<string, unknown> = { ...settings };
    if (part === name && ['Checkbox', 'Switch'].includes(name)) {
      props.checked = settings.checked ?? settings.defaultChecked ?? node.props.checked ?? node.props.defaultChecked ?? false;
      props.defaultChecked = undefined;
      if (!node.props.onChange || 'checked' in settings) props.onChange = (event: { target: { checked: boolean } }) => onChange?.(part, 'checked', event.target.checked);
    }
    if ('value' in settings) props.defaultValue = undefined;
    if (part === 'ToggleButton' && 'pressed' in settings) props.onPressedChange = (pressed: boolean) => onChange?.(part, 'pressed', pressed);
    // Preserve a controlled component's interaction when its value is edited in the panel.
    if (part && ('value' in settings || 'checked' in settings || 'open' in settings)) {
      for (const [property, event] of [['value', 'onValueChange'], ['checked', 'onCheckedChange'], ['open', 'onOpenChange']]) {
        if (property in settings && (property === 'open' || event in node.props || part === 'Root')) props[event] = (value: unknown) => onChange?.(part, property, value);
      }
      if ('onChange' in node.props || ['Input', 'Textarea', 'Checkbox', 'Switch', 'Select', 'Slider'].includes(name)) props.onChange = (event: { target: { value: string; checked: boolean } }) => {
        const property = 'checked' in settings ? 'checked' : 'value';
        onChange?.(part, property, event.target[property]);
      };
    }
    if (part && 'page' in settings) props.onPageChange = (page: number) => onChange?.(part, 'page', page);
    if (name === 'Accordion' && part === 'Root' && settings.type === 'multiple') {
      for (const property of ['value', 'defaultValue']) {
        const value = props[property] ?? node.props[property];
        if (typeof value === 'string') props[property] = [value];
      }
    }
    if (name === 'Select' && part === 'Select' && (settings.multiple ?? node.props.multiple)) {
      for (const property of ['value', 'defaultValue']) {
        const value = props[property] ?? node.props[property];
        if (typeof value === 'string') props[property] = [value];
      }
    }
    if (node.props.children !== undefined) {
      props.children = Children.map(node.props.children as ReactNode, (child) => {
        if (text !== undefined && !textChanged && typeof child === 'string' && child.trim()) {
          textChanged = true;
          return text;
        }
        return visit(child);
      });
      if (isValidElement(node.props.children)) props.children = (props.children as ReactNode[])[0];
    }
    if (text !== undefined && !textChanged && part) {
      for (const property of ['label', 'title', 'alt']) {
        if (typeof node.props[property] === 'string') {
          props[property] = text;
          textChanged = true;
          break;
        }
      }
    }
    return cloneElement(node, props);
  }
  return Array.isArray(tree) ? Children.map(tree, visit) : visit(tree);
}
