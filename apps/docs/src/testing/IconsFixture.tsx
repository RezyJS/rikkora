import { useLayoutEffect, useRef, useState } from 'react';
import { Button, Checkbox, Dialog, Field, Select, Stack } from '@rikkora/ui';

export function IconsFixture() {
  const mixedRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState('');
  useLayoutEffect(() => {
    mixedRef.current!.indeterminate = true;
  }, []);
  return (
    <Stack style={{ padding: 24, maxWidth: 400 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const values: Record<string, FormDataEntryValue> = {};
          new FormData(event.currentTarget).forEach((value, name) => {
            values[name] = value;
          });
          setSubmitted(JSON.stringify(values));
        }}
      >
        <Stack>
          <Field label='Native checkbox'>
            <Checkbox
              name='checked'
              value='yes'
              defaultChecked
              ref={checkboxRef}
            />
          </Field>
          <Field label='Mixed checkbox'>
            <Checkbox ref={mixedRef} />
          </Field>
          <Field label='Controlled checkbox'>
            <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
          </Field>
          <Field label='Native select'>
            <Select
              name='choice'
              defaultValue='a'
              ref={selectRef}
            >
              <option value='a'>Alpha</option>
              <option value='b'>Beta</option>
            </Select>
          </Field>
          <Field label='List selection'>
            <Select size={3}>
              <option>Alpha</option>
              <option>Beta</option>
              <option>Gamma</option>
            </Select>
          </Field>
          <Field label='Multiple selection'>
            <Select
              multiple
              defaultValue={['Alpha']}
            >
              <option>Alpha</option>
              <option>Beta</option>
            </Select>
          </Field>
          <fieldset disabled>
            <Field label='Disabled checkbox'>
              <Checkbox defaultChecked />
            </Field>
            <Field label='Disabled select'>
              <Select>
                <option>Alpha</option>
              </Select>
            </Field>
          </fieldset>
          <Button type='submit'>Submit</Button>
          <Button type='reset'>Reset</Button>
          <Button
            onClick={() => {
              checkboxRef.current!.focus();
              checkboxRef.current!.dataset.refChecked = 'true';
              selectRef.current!.dataset.refChecked = 'true';
            }}
          >
            Check refs
          </Button>
        </Stack>
      </form>
      <output>{submitted}</output>
      <Button aria-label='Custom button'>
        <svg
          data-testid='custom-button-svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          aria-hidden='true'
        >
          <circle
            cx='8'
            cy='8'
            r='4'
          />
        </svg>
        <span>Custom child</span>
      </Button>
      <Button
        size='icon'
        aria-label='Custom icon button'
      >
        <svg
          data-testid='custom-icon-svg'
          viewBox='0 0 16 16'
          aria-hidden='true'
        >
          <path d='M2 8h12' />
        </svg>
      </Button>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Icon close dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Default icon</Dialog.Title>
          <Dialog.Description>
            Close uses Tabler without changing custom children.
          </Dialog.Description>
          <Dialog.Close aria-label='Dismiss icon dialog' />
          <Dialog.Close asChild>
            <Button>Custom close child</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </Stack>
  );
}
