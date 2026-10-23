import { useRef, useState } from 'react';
import { Button, ScrollArea, Stack, Text } from '@rikkora/ui';

export function ScrollAreaFixture() {
  const viewport = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  const [items, setItems] = useState(1);
  const [refs, setRefs] = useState('');
  return <Stack gap={4}>
    <ScrollArea ref={root} viewportRef={viewport} type='always' aria-label='Vertical area' data-testid='vertical-area'
      style={{ height: 180, width: 240 }} viewportProps={{ onScroll: (event) => setTop(event.currentTarget.scrollTop) }}>
      <Stack gap={2} style={{ padding: 12 }}>{Array.from({ length: 30 }, (_, index) => <Button key={index} variant='outline'>Item {index + 1}</Button>)}</Stack>
    </ScrollArea>
    <output data-testid='scroll-top'>{Math.round(top)}</output>
    <output data-testid='scroll-refs'>{refs}</output>
    <Button onClick={() => { viewport.current?.scrollTo({ top: 300 }); setRefs(`${root.current?.hasAttribute('data-rkr-scroll-area')}:${viewport.current?.hasAttribute('data-radix-scroll-area-viewport')}`); }}>Scroll via ref</Button>
    <ScrollArea type='always' orientation='both' aria-label='Both axes' data-testid='both-area' style={{ height: 160, width: 240 }}>
      <div style={{ width: 720, height: 600, padding: 20, background: 'var(--rkr-color-bg-elevated)' }}>Wide and tall content</div>
    </ScrollArea>
    <ScrollArea type='always' orientation='horizontal' dir='rtl' aria-label='RTL area' data-testid='rtl-area' style={{ height: 80, width: 240 }}>
      <div style={{ width: 720, height: 40, padding: 12 }}>RTL content</div>
    </ScrollArea>
    <ScrollArea type='hover' scrollHideDelay={100} aria-label='Hover area' data-testid='hover-area' style={{ height: 90, width: 240 }}>
      <div style={{ height: 500 }}>Hover content</div>
    </ScrollArea>
    <ScrollArea type='auto' aria-label='Resized area' data-testid='resized-area' style={{ maxHeight: 120, width: 240 }}>
      <Stack gap={0}>{Array.from({ length: items }, (_, index) => <Text as='div' style={{ height: 32 }} key={index}>Row {index + 1}</Text>)}</Stack>
    </ScrollArea>
    <Button onClick={() => setItems((count) => count === 1 ? 20 : 1)}>Toggle overflow</Button>
  </Stack>;
}
