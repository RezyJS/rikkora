import * as UI from '@rikkora/ui';
import { IconArrowRight } from '@tabler/icons-react';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function ButtonPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='Button' configuration={configuration}>
    {(settings) => ((
      <UI.Button loading={settings.Button?.loadingPlacement !== undefined || settings.Button?.loadingText !== undefined}
        aria-label={String(settings.Button?.size ?? '').startsWith('icon') ? (ru ? 'Продолжить' : 'Continue') : undefined}>
        {String(settings.Button?.size ?? '').startsWith('icon') ?
          <IconArrowRight size={20} stroke={1.7} aria-hidden='true' focusable='false' />
          : ru ?
            'Сохранить'
            : 'Save changes'}
      </UI.Button>
    ))}
  </PreviewFrame>;
}
