export const additionalExamples = [
  'Link',
  'ButtonLink',
  'ToggleButton',
  'ButtonGroup',
  'SplitButton',
  'ConfirmButton',
  'HoldToConfirm',
  'Breadcrumbs',
  'Text',
  'Heading',
  'Box',
  'Stack',
  'Separator',
  'Badge',
  'Card',
  'ScrollArea',
  'Switch',
  'RadioGroup',
  'Select',
  'Slider',
  'Field',
  'FormControl',
  'Tabs',
  'Dialog',
  'Popover',
  'Tooltip',
  'DropdownMenu',
  'Accordion',
  'Drawer',
  'Alert',
  'Toast',
  'Spinner',
  'Progress',
  'Skeleton',
  'Avatar',
  'Table',
  'Pagination',
] as const;

export type AdditionalExample = (typeof additionalExamples)[number];

export const componentNames = [
  'Button',
  'Input',
  'Checkbox',
  'Flex',
  'Grid',
  'Textarea',
  ...additionalExamples,
] as const;

export type ComponentName = (typeof componentNames)[number];

export function componentSlug(name: ComponentName) {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
