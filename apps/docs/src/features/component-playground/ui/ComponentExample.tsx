import { usePreferences } from '@/shared/model/preferences';
import { configureExample } from '@/entities/documentation';
import type { ComponentExampleProps } from './component-examples/types';
import { useExampleState } from './component-examples/useExampleState';
import { renderFoundationExample } from './component-examples/renderFoundationExample';
import { renderControlsExample } from './component-examples/renderControlsExample';
import { renderOverlaysExample } from './component-examples/renderOverlaysExample';
import { renderNavigationExample } from './component-examples/renderNavigationExample';
import { renderFeedbackExample } from './component-examples/renderFeedbackExample';
import { renderDataExample } from './component-examples/renderDataExample';
import { renderScrollAreaExample } from './component-examples/renderScrollAreaExample';
import { renderButtonExample } from './component-examples/renderButtonExample';

export function ComponentExample({ name, configuration = {}, text, onConfigurationChange }: ComponentExampleProps) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const state = useExampleState();
  const context = { ...state, ru, content: ru ? 'Содержимое' : 'Content', close: ru ? 'Закрыть' : 'Close', text, configuration };
  const example =
    renderButtonExample(name, context) ??
    renderFoundationExample(name, context) ??
    renderControlsExample(name, context) ??
    renderOverlaysExample(name, context) ??
    renderNavigationExample(name, context) ??
    renderFeedbackExample(name, context) ??
    renderDataExample(name, context) ??
    renderScrollAreaExample(name, context);
  return configureExample(example, name, configuration, text, onConfigurationChange);
}
