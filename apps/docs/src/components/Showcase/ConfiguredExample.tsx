import type { ReactNode } from 'react';
import type { ComponentName } from "./componentNames";
import { configureExample, type ExampleConfiguration } from './exampleConfiguration';

export function ConfiguredExample({ children, name, configuration, text, onChange }: {
  children: ReactNode; name: ComponentName; configuration: ExampleConfiguration; text?: string;
  onChange: (part: string, property: string, value: unknown) => void;
}) {
  return configureExample(children, name, configuration, text, onChange);
}
