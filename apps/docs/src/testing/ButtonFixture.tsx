import { useRef, useState } from 'react';
import { Button, ButtonGroup, ConfirmButton, DropdownMenu, HoldToConfirm, SplitButton, ToggleButton } from '@rikkora/ui';

export function ButtonFixture() {
  const [submits, setSubmits] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [action, setAction] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [holds, setHolds] = useState(0);
  const [holdDisabled, setHoldDisabled] = useState(false);
  const native = useRef<HTMLButtonElement>(null);
  const link = useRef<HTMLAnchorElement>(null);
  return <main>
    <form onSubmit={(event) => { event.preventDefault(); setSubmits(value => value + 1); }}>
      <Button ref={native} type='submit' startContent={<span aria-hidden='true'>+</span>} endContent={<span>PDF</span>}>Submit</Button>
      <Button onClick={() => setClicks(value => value + 1)}>Ordinary</Button>
    </form>
    <p data-testid='submits'>{submits}</p><p data-testid='clicks'>{clicks}</p>
    <Button asChild ref={link} endContent={<span aria-hidden='true'>→</span>} onClick={() => setClicks(value => value + 1)}>
      <a href='#target' onClick={() => setClicks(value => value + 1)}>Child link</a>
    </Button>
    <Button asChild disabled><a href='#disabled' onClick={() => setClicks(value => value + 10)}>Disabled child</a></Button>
    <Button onClick={() => { native.current?.focus(); setAction(link.current?.tagName ?? ''); }}>Check refs</Button>
    <Button loading loadingText='Saving…' loadingPlacement='end'>Save</Button>
    <Button disableAnimation loading loadingText='Static loading'>Save</Button>
    <Button fullWidth compact variant='soft' tone='success'>Full width</Button>
    <ButtonGroup aria-label='Formatting'>
      <ToggleButton pressed={pressed} onPressedChange={setPressed}>Bold</ToggleButton>
      <ToggleButton>Italic</ToggleButton>
    </ButtonGroup>
    <SplitButton menuLabel='Save options' onClick={() => setAction('Saved')}
      menu={<DropdownMenu.Item onSelect={() => setAction('Save as')}>Save as…</DropdownMenu.Item>}>Save file</SplitButton>
    <ConfirmButton title='Confirm deletion?' description='Example only.' confirmText='Delete' cancelText='Cancel'
      onConfirm={async () => { setAttempts(value => value + 1); await new Promise(resolve => setTimeout(resolve, 50)); if (attempts === 0) throw new Error('Example failure'); setAction('Deleted'); }}>
      Confirm retry
    </ConfirmButton>
    <HoldToConfirm holdDuration={200} onConfirm={() => setHolds(value => value + 1)} disabled={holdDisabled} holdingText='Holding…'>Hold action</HoldToConfirm>
    <Button onClick={() => setHoldDisabled(true)}>Disable hold</Button>
    <p role='status'>{action}</p><p data-testid='attempts'>{attempts}</p><p data-testid='holds'>{holds}</p>
    <div id='target'>Target</div>
  </main>;
}
