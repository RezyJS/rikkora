import type { AdditionalExample } from '@/entities/documentation';
import type { ExampleConfiguration } from '@/entities/documentation';
import type { useExampleState } from './useExampleState';

export interface ComponentExampleProps {
  name: AdditionalExample;
  configuration?: ExampleConfiguration;
  text?: string;
  onConfigurationChange?: (
    part: string,
    property: string,
    value: unknown,
  ) => void;
}

export type ExampleRenderContext = ReturnType<typeof useExampleState> & {
  ru: boolean;
  content: string;
  close: string;
  text?: string;
  configuration: ExampleConfiguration;
};
