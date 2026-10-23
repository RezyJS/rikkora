import { useState } from 'react';
import type { ButtonSize, ButtonVariant, FlexDirection } from '@rikkora/ui';
import type { ExampleConfiguration } from './exampleConfiguration';

export function usePlaygroundState() {
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('md');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState(false);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [direction, setDirection] = useState<FlexDirection>('row');
  const [columns, setColumns] = useState(3);
  const [text, setText] = useState<string | undefined>();
  const [revision, setRevision] = useState(0);
  const [configuration, setConfiguration] = useState<ExampleConfiguration>({});
  function configure(part: string, property: string, value: unknown) {
    setConfiguration((current) => {
      const settings = { ...current[part] };
      if (value === undefined) delete settings[property];
      else settings[property] = value;
      return {
    ...current, [part]: settings,
  };
    });
  }
  function reset() {
    setConfiguration({}); setText(undefined); setRevision((value) => value + 1);
    setVariant('primary'); setSize('md'); setDisabled(false); setLoading(false); setRequired(false);
    setValue(''); setMessage(''); setChecked(false); setFavorite(false); setDirection('row'); setColumns(3);
  }
  return {
    variant, setVariant,
    size, setSize,
    disabled, setDisabled,
    loading, setLoading,
    required, setRequired,
    value, setValue,
    message, setMessage,
    checked, setChecked,
    favorite, setFavorite,
    direction, setDirection,
    columns, setColumns,
    text, setText,
    revision, configuration,
    configure, reset,
  };
}
