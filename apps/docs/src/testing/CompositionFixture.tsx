import { createRef } from 'react';
import { Box, Button, Link, Text } from '@rikkora/ui';

const anchor = createRef<HTMLAnchorElement>();
const form = createRef<HTMLFormElement>();

export function CompositionFixture() {
  return (
    <Box
      as='section'
      aria-label='Kit composition'
    >
      <Box
        as='form'
        ref={form}
        onSubmit={(event) => {
          event.preventDefault();
          form.current?.setAttribute('data-submitted', 'true');
        }}
      >
        <Button type='submit'>Submit composed form</Button>
      </Box>
      <Link
        href='#composition-target'
        ref={anchor}
      >
        Jump to target
      </Link>
      <Box
        as='section'
        id='composition-target'
      >
        <Text>Target</Text>
      </Box>
      <Button onClick={() => anchor.current?.focus()}>
        Focus composed link
      </Button>
    </Box>
  );
}
