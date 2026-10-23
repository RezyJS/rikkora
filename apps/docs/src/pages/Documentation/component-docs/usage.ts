import { type ComponentName } from '../../../components/Showcase/componentNames';
import { catalog } from '../../../components/Showcase/componentCatalog';

const basicUsage: Partial<Record<ComponentName, string>> = {
  Button: '<Button variant="primary" size="md">Save changes</Button>',
  Input:
    '<Field label="Email" description="Work address" required>\n  <Input name="email" type="email" placeholder="you@example.com" />\n</Field>',
  Checkbox:
    '<Field label="Receive updates">\n  <Checkbox name="updates" defaultChecked />\n</Field>',
  Textarea:
    '<Field label="Message">\n  <Textarea name="message" rows={4} placeholder="Write a message" />\n</Field>',
  Flex: '<Flex gap={3} align="center" wrap>\n  <Button>Save</Button>\n  <Button variant="outline">Cancel</Button>\n</Flex>',
  Grid: '<Grid columns={2} gap={4}>\n  <Card>First item</Card>\n  <Card>Second item</Card>\n</Grid>',
};

const overrides: Partial<Record<ComponentName, string>> = {
  ScrollArea:
    '<ScrollArea\n  type="auto"\n  aria-label="Items"\n  style={{ height: 200, width: 320, "--rkr-scrollbar-size": "12px" }}\n>\n  <Stack gap={3} style={{ padding: "1rem" }}>\n    {Array.from({ length: 20 }, (_, index) => (\n      <Text as="div" key={index}>Item {index + 1}</Text>\n    ))}\n  </Stack>\n</ScrollArea>',
  Dialog:
    '<Dialog.Root>\n  <Dialog.Trigger asChild>\n    <Button>Open settings</Button>\n  </Dialog.Trigger>\n  <Dialog.Content>\n    <Dialog.Title>Settings</Dialog.Title>\n    <Dialog.Description>Update your preferences.</Dialog.Description>\n    <Dialog.Close asChild>\n      <Button>Close</Button>\n    </Dialog.Close>\n  </Dialog.Content>\n</Dialog.Root>',
  Drawer:
    '<Drawer.Root>\n  <Drawer.Trigger asChild>\n    <Button>Open settings</Button>\n  </Drawer.Trigger>\n  <Drawer.Content side="right">\n    <Drawer.Title>Settings</Drawer.Title>\n    <Drawer.Description>Update your preferences.</Drawer.Description>\n    <Drawer.Close asChild>\n      <Button>Close</Button>\n    </Drawer.Close>\n  </Drawer.Content>\n</Drawer.Root>',
  Tabs: '<Tabs.Root defaultValue="overview">\n  <Tabs.List aria-label="Sections">\n    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>\n    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>\n  </Tabs.List>\n  <Tabs.Content value="overview">Overview content</Tabs.Content>\n  <Tabs.Content value="settings">Settings content</Tabs.Content>\n</Tabs.Root>',
  Accordion:
    '<Accordion.Root type="single" collapsible defaultValue="one">\n  <Accordion.Item value="one">\n    <Accordion.Header>\n      <Accordion.Trigger>When will my order arrive?</Accordion.Trigger>\n    </Accordion.Header>\n    <Accordion.Content>Within 3–5 business days.</Accordion.Content>\n  </Accordion.Item>\n  <Accordion.Item value="two">\n    <Accordion.Header><Accordion.Trigger>How can I track my order?</Accordion.Trigger></Accordion.Header>\n    <Accordion.Content>Use the tracking link in your email.</Accordion.Content>\n  </Accordion.Item>\n</Accordion.Root>',
  DropdownMenu:
    '<DropdownMenu.Root>\n  <DropdownMenu.Trigger asChild>\n    <Button>Actions</Button>\n  </DropdownMenu.Trigger>\n  <DropdownMenu.Content>\n    <DropdownMenu.Item onSelect={() => console.log("Edit")}>\n      Edit\n    </DropdownMenu.Item>\n    <DropdownMenu.Item disabled>Delete</DropdownMenu.Item>\n  </DropdownMenu.Content>\n</DropdownMenu.Root>',
  Tooltip:
    '<Tooltip.Provider delayDuration={300}>\n  <Tooltip.Root>\n    <Tooltip.Trigger asChild>\n      <Button variant="outline">Help</Button>\n    </Tooltip.Trigger>\n    <Tooltip.Content>Additional information</Tooltip.Content>\n  </Tooltip.Root>\n</Tooltip.Provider>',
  Popover:
    '<Popover.Root>\n  <Popover.Trigger asChild>\n    <Button>Details</Button>\n  </Popover.Trigger>\n  <Popover.Content aria-label="Details">\n    <Text>Additional information</Text>\n    <Popover.Close asChild>\n      <Button>Close</Button>\n    </Popover.Close>\n  </Popover.Content>\n</Popover.Root>',
  Table:
    '<Table.Root>\n  <Table.Caption>People</Table.Caption>\n  <Table.Head>\n    <Table.Row><Table.Header>Name</Table.Header></Table.Row>\n  </Table.Head>\n  <Table.Body>\n    <Table.Row><Table.Cell>Rikka</Table.Cell></Table.Row>\n  </Table.Body>\n</Table.Root>',
  FormControl:
    '<FormControl disabled>\n  <Field label="Name"><Input name="name" /></Field>\n  <Field label="Message"><Textarea name="message" /></Field>\n</FormControl>',
  RadioGroup:
    '<Field label="Plan">\n  <RadioGroup\n    name="plan"\n    defaultValue="basic"\n    options={[\n      { value: "basic", label: "Basic" },\n      { value: "pro", label: "Pro" },\n    ]}\n  />\n</Field>',
  Select:
    '<Field label="Theme">\n  <Select name="theme" defaultValue="dark">\n    <option value="dark">Dark</option>\n    <option value="light">Light</option>\n  </Select>\n</Field>',
};

export function usageFor(component: ComponentName): string {
  if (component === 'Pagination')
    return `import { useState } from 'react';\nimport { Pagination } from '@rikkora/ui';\n\nfunction Example() {\n  const [page, setPage] = useState(1);\n  return <Pagination page={page} pageCount={12} onPageChange={setPage} />;\n}`;
  if (component === 'Toast')
    return `import { Button, ToastProvider, useToast } from '@rikkora/ui';\n\nfunction SaveButton() {\n  const { toast } = useToast();\n  return (\n    <Button onClick={() => toast({\n      title: 'Saved',\n      description: 'Your changes are saved.',\n    })}>\n      Save\n    </Button>\n  );\n}\n\nfunction Example() {\n  return (\n    <ToastProvider maxVisible={3}>\n      <SaveButton />\n    </ToastProvider>\n  );\n}`;
  const body =
    overrides[component] ??
    basicUsage[component] ??
    (component in catalog ?
      catalog[component as keyof typeof catalog].code
    : '');
  const imports = [
    ...new Set(
      Array.from(body.matchAll(/<([A-Z][A-Za-z]*)/g), (match) => match[1]),
    ),
  ];
  return `import { ${imports.join(', ')} } from '@rikkora/ui';\n\nfunction Example() {\n  return (\n${body
    .split('\n')
    .map((line) => `    ${line}`)
    .join('\n')}\n  );\n}`;
}
