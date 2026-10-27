import * as UI from '@rikkora/ui';
import { IconArrowRight } from '@tabler/icons-react';
import { PreviewFrame, type DocPreviewProps } from '@/widgets/component-documentation';

export function ButtonLinkPreview({ configuration, ru }: DocPreviewProps) {
  return <PreviewFrame name='ButtonLink' configuration={configuration}>
    {(settings) => (<UI.ButtonLink href='/docs' aria-label={String(settings.ButtonLink?.size ?? '').startsWith('icon') ? (ru ? 'Документация' : 'Docs') : undefined}>
      {String(settings.ButtonLink?.size ?? '').startsWith('icon') ? <IconArrowRight size={20} stroke={1.7} aria-hidden='true' focusable='false' /> : (ru ? 'Документация' : 'Docs')}
    </UI.ButtonLink>)}
  </PreviewFrame>;
}
