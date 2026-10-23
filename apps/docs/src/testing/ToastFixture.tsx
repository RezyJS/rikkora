import { Button, Stack, ToastProvider, useToast } from '@rikkora/ui';

function Controls() {
  const { toast, dismissAll } = useToast();
  return <Stack>
    <Button onClick={() => {
      for (let index = 1; index <= 4; index++) toast({
        title: `Notification ${index}`,
        description: index === 2 ? 'A longer notification that wraps onto several lines and keeps its full content when the stack is expanded.' : undefined,
      });
    }}>Enqueue four</Button>
    <Button onClick={dismissAll}>Dismiss all</Button>
  </Stack>;
}

export function ToastFixture() {
  return <ToastProvider duration={5000}><Controls /></ToastProvider>;
}
