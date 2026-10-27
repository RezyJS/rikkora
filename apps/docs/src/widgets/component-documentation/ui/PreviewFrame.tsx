import { useState, type ReactNode } from 'react';
import { configureExample, type ComponentName, type ExampleConfiguration } from '@/entities/documentation';

export interface DocPreviewProps { configuration?: ExampleConfiguration; ru: boolean }
type Change = (part: string, property: string, value: unknown) => void;

export function PreviewFrame({ name, configuration = {}, children }: { name: ComponentName; configuration?: ExampleConfiguration; children: (settings: ExampleConfiguration, change: Change) => ReactNode }) {
  const [changes, setChanges] = useState<ExampleConfiguration>({});
  const settings = { ...configuration };
  for (const part of Object.keys(changes)) settings[part] = { ...settings[part], ...changes[part] };
  const change: Change = (part, property, value) => setChanges(current => ({ ...current, [part]: { ...current[part], [property]: value } }));
  return configureExample(children(settings, change), name, settings, undefined, change);
}
