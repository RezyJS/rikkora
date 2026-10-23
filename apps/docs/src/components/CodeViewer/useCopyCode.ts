import { useEffect, useState } from 'react';
import { useToast } from '@rikkora/ui';

export function useCopyCode(code: string, ru: boolean) {
  const { toast } = useToast();
  const [copyResult, setCopyResult] = useState<{
    code: string;
    status: 'copied' | 'failed';
  } | null>(null);
  const status = copyResult?.code === code ? copyResult.status : 'idle';
  const copyLabel =
    status === 'copied' ?
      ru ? 'Скопировано'
      : 'Copied'
    : ru ? 'Копировать код'
    : 'Copy code';
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyResult({ code, status: 'copied' });
      toast({ title: ru ? 'Код скопирован' : 'Code copied' });
    } catch {
      setCopyResult({ code, status: 'failed' });
      toast({
        title: ru ? 'Не удалось скопировать код' : 'Could not copy code',
        description:
          ru ?
            'Буфер обмена недоступен. Выделите код и скопируйте вручную.'
          : 'Clipboard unavailable. Select the code and copy it manually.',
      });
    }
  }

  useEffect(() => {
    if (copyResult?.status !== 'copied') return;
    const timer = window.setTimeout(() => setCopyResult(null), 2000);
    return () => window.clearTimeout(timer);
  }, [copyResult]);

  return { status, copyLabel, copy };
}
