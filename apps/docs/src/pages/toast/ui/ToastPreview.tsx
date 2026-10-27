import { ToastProvider } from '@rikkora/ui';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';
import { ToastExample } from './ToastExample';

export function ToastPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Toast' configuration={configuration}>
    {(settings) => ((
      <ToastProvider
        closeLabel={ru ? 'Закрыть уведомление' : 'Dismiss notification'}
        viewportLabel={ru ? 'Уведомления' : 'Notifications'}
      >
        <ToastExample
          configuration={settings}
        />
      </ToastProvider>
    ))}
  </PreviewFrame>;
}
