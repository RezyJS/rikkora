import { createRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Accordion,
  Avatar,
  Button,
  Checkbox,
  Dialog,
  Drawer,
  Field,
  FormControl,
  Input,
  Pagination,
  Popover,
  Progress,
  RadioGroup,
  Select,
  Slider,
  Stack,
  Switch,
  Tabs,
  Textarea,
  ToastProvider,
  useToast,
} from '@rikkora/ui';
import '@rikkora/ui/styles.css';
import { ScrollAreaFixture } from './ScrollAreaFixture';
import { CompositionFixture } from './CompositionFixture';
import { CatalogFixture } from './CatalogFixture';
import { PreferencesProvider } from '../preferences/PreferencesProvider';
import { BrowserRouter } from 'react-router';
import { ToastFixture } from './ToastFixture';
import { IconsFixture } from './IconsFixture';

const inputRef = createRef<HTMLInputElement>();
const textareaRef = createRef<HTMLTextAreaElement>();
const checkboxRef = createRef<HTMLInputElement>();
const selectRef = createRef<HTMLSelectElement>();
const sliderRef = createRef<HTMLInputElement>();
const switchRef = createRef<HTMLInputElement>();
const radioRef = createRef<HTMLFieldSetElement>();

function Notifications() {
  const { toast, dismissAll } = useToast();
  return (
    <>
      <Button
        onClick={() => {
          toast({ title: 'First', duration: 1000 });
          toast({ title: 'Second', duration: 1000 });
        }}
      >
        Enqueue
      </Button>
      <Button onClick={dismissAll}>Dismiss all</Button>
    </>
  );
}

export function Fixture() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('initial');
  const [tab, setTab] = useState('one');
  const [radio, setRadio] = useState('a');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('violet-smoke-light');
  const [avatar, setAvatar] = useState('/not-an-image');
  const [progress, setProgress] = useState<number | undefined>(45);
  return (
    <Stack gap={6}>
      <CompositionFixture />
      <ScrollAreaFixture />
      <form id='native-form'>
        <Field
          label='Text'
          description='Hint'
          error='Invalid text'
          required
          controlId='custom-text'
        >
          <Input
            id='custom-text'
            name='text'
            defaultValue='default'
            aria-describedby='extra-description'
            ref={inputRef}
          />
        </Field>
        <span id='extra-description'>Extra hint</span>
        <Field label='Message'>
          <Textarea
            name='message'
            defaultValue='message'
            ref={textareaRef}
          />
        </Field>
        <Field label='Check'>
          <Checkbox
            name='check'
            value='yes'
            defaultChecked
            ref={checkboxRef}
          />
        </Field>
        <Field label='Switch'>
          <Switch
            name='switch'
            value='on'
            defaultChecked
            ref={switchRef}
          />
        </Field>
        <Field label='Choice'>
          <Select
            name='choice'
            defaultValue='a'
            ref={selectRef}
          >
            <option value='a'>A</option>
            <option value='b'>B</option>
          </Select>
        </Field>
        <Field label='Range'>
          <Slider
            name='range'
            defaultValue={20}
            min={0}
            max={50}
            step={5}
            ref={sliderRef}
          />
        </Field>
        <Field
          label='Radio'
          required
        >
          <RadioGroup
            name='radio'
            defaultValue='a'
            ref={radioRef}
            options={[
              { value: 'a', label: 'A' },
              { value: 'skip', label: 'Skip', disabled: true },
              { value: 'b', label: 'B' },
            ]}
          />
        </Field>
        <Button type='reset'>Reset form</Button>
        <Button
          onClick={() => {
            const refs = [
              inputRef,
              textareaRef,
              checkboxRef,
              switchRef,
              selectRef,
              sliderRef,
              radioRef,
            ];
            document.getElementById('refs-result')!.textContent = refs
              .map((ref) => ref.current?.tagName)
              .join(',');
            inputRef.current?.focus();
          }}
        >
          Check refs
        </Button>
        <output id='refs-result' />
      </form>
      <section aria-label='Controlled controls'>
        <Field label='Controlled text'>
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Field>
        <Field label='Controlled switch'>
          <Switch
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
        </Field>
        <Field label='Controlled radio'>
          <RadioGroup
            value={radio}
            onValueChange={setRadio}
            options={[
              { value: 'a', label: 'A' },
              { value: 'b', label: 'B' },
            ]}
          />
        </Field>
        <output data-testid='controlled-output'>
          {value}:{String(checked)}:{radio}
        </output>
      </section>
      <FormControl
        disabled
        invalid
        required
      >
        <Field label='Inherited'>
          <Input />
        </Field>
        <Field
          label='Override'
          disabled={false}
          invalid={false}
          required={false}
        >
          <Input />
        </Field>
        <Field label='Direct override'>
          <Input
            disabled={false}
            invalid={false}
            required={false}
          />
        </Field>
      </FormControl>
      <Field label='Read only'>
        <Input
          readOnly
          defaultValue='Selectable value'
        />
      </Field>
      <div
        data-rkr-theme={theme}
        lang='ru'
        dir='rtl'
        style={
          {
            '--rkr-color-bg-elevated': 'rgb(11, 22, 33)',
          } as React.CSSProperties
        }
      >
        <Button
          onClick={() =>
            setTheme((current) =>
              current === 'violet-smoke' ? 'violet-smoke-light' : (
                'violet-smoke'
              ),
            )
          }
        >
          Change scoped theme
        </Button>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button>Scoped popover</Button>
          </Popover.Trigger>
          <Popover.Content aria-label='Scoped content'>Scoped</Popover.Content>
        </Popover.Root>
        <Dialog.Root
          open={open}
          onOpenChange={setOpen}
        >
          <Dialog.Trigger asChild>
            <Button>Controlled dialog</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Outer dialog</Dialog.Title>
            <Dialog.Description>Outer description</Dialog.Description>
            <Field label='Outer input'>
              <Input />
            </Field>
            <Drawer.Root>
              <Drawer.Trigger asChild>
                <Button>Nested drawer</Button>
              </Drawer.Trigger>
              <Drawer.Content>
                <Drawer.Title>Inner drawer</Drawer.Title>
                <Drawer.Description>Inner description</Drawer.Description>
                <Field label='Inner input'>
                  <Input />
                </Field>
                <Drawer.Close asChild>
                  <Button>Close inner</Button>
                </Drawer.Close>
              </Drawer.Content>
            </Drawer.Root>
            <Dialog.Close asChild>
              <Button>Close outer</Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <Tabs.Root
        value={tab}
        onValueChange={setTab}
        activationMode='manual'
      >
        <Tabs.List aria-label='Manual tabs'>
          <Tabs.Trigger value='one'>One</Tabs.Trigger>
          <Tabs.Trigger
            value='skip'
            disabled
          >
            Skip
          </Tabs.Trigger>
          <Tabs.Trigger value='two'>Two</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='one'>Panel one</Tabs.Content>
        <Tabs.Content value='two'>Panel two</Tabs.Content>
      </Tabs.Root>
      <Accordion.Root
        type='multiple'
        defaultValue={['one']}
        aria-label='Multiple accordion'
      >
        {['one', 'two'].map((item) => (
          <Accordion.Item
            key={item}
            value={item}
          >
            <Accordion.Header>
              <Accordion.Trigger>{item}</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>{item} content</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <ToastProvider
        maxVisible={1}
        duration={1000}
      >
        <Notifications />
      </ToastProvider>
      <Pagination
        page={page}
        pageCount={1000000}
        onPageChange={setPage}
      />
      <Pagination
        page={0}
        pageCount={0}
        onPageChange={() => {
          throw new Error('Empty pagination must not emit');
        }}
        aria-label='Empty pages'
      />
      <Progress
        aria-label='Offset progress'
        min={10}
        max={50}
        value={progress}
      />
      <Button onClick={() => setProgress(100)}>Clamp progress</Button>
      <Button onClick={() => setProgress(undefined)}>Indeterminate</Button>
      <Avatar
        src={avatar}
        alt='Rikka Inohana'
      />
      <Button
        onClick={() =>
          setAvatar(
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          )
        }
      >
        Load avatar
      </Button>
    </Stack>
  );
}

createRoot(document.getElementById('root')!).render(
  new URLSearchParams(location.search).has('catalog') ?
    <BrowserRouter>
      <PreferencesProvider>
        <CatalogFixture />
      </PreferencesProvider>
    </BrowserRouter>
  : new URLSearchParams(location.search).has('toasts') ? <ToastFixture />
  : new URLSearchParams(location.search).has('icons') ? <IconsFixture />
  : <Fixture />,
);
