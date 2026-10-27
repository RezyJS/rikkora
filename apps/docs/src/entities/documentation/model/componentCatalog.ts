import type { AdditionalExample } from './componentNames';

type Entry = { en: string; ru: string; code: string };

export const catalog: Record<AdditionalExample, Entry> = {
  ToggleButton: {"en":"A button that switches between pressed and unpressed states. Supports controlled and initial state.","ru":"Кнопка, которая переключает активное состояние. Поддерживает управляемое и начальное значение.","code":"<ToggleButton defaultPressed>Bold</ToggleButton>"},
  ButtonGroup: {"en":"Joins buttons with shared edges. Each button keeps its own action and keyboard behavior.","ru":"Объединяет кнопки общими границами. Каждая кнопка сохраняет собственное действие и управление с клавиатуры.","code":"<ButtonGroup aria-label=\"Actions\"><Button>Save</Button><Button>Cancel</Button></ButtonGroup>"},
  SplitButton: {"en":"Combines a primary action with a separate menu trigger for related actions.","ru":"Объединяет основное действие и отдельную кнопку меню дополнительных действий.","code":"<SplitButton menuLabel=\"More actions\" onClick={() => console.log('Save')}\n    menu={<DropdownMenu.Item onSelect={() => console.log('Save as')}>Save as…</DropdownMenu.Item>}>Save</SplitButton>"},
  ConfirmButton: {"en":"Opens a confirmation dialog. Waits for an asynchronous action and keeps the dialog open when the action fails.","ru":"Открывает диалог подтверждения. Ожидает асинхронное действие и сохраняет диалог открытым при ошибке.","code":"<ConfirmButton title=\"Delete item?\" description=\"This action cannot be undone.\"\n    onConfirm={() => console.log('Confirmed')} confirmText=\"Delete\" cancelText=\"Cancel\">Delete</ConfirmButton>"},
  HoldToConfirm: {"en":"Confirms an action after holding the pointer, Enter or Space for a set duration. Releasing early cancels the action.","ru":"Подтверждает действие после удержания указателя, Enter или Space в течение заданного времени. Раннее отпускание отменяет действие.","code":"<HoldToConfirm onConfirm={() => console.log('Confirmed')} holdingText=\"Keep holding…\"\n    confirmedText=\"Confirmed\">Hold to confirm</HoldToConfirm>"},
  ButtonLink: {
    en: "A navigation link with button styling. Supports URLs, anchors and router links.",
    ru: "Ссылка с оформлением кнопки для перехода по адресу, к разделу страницы или через роутер.",
    code: '<ButtonLink href="/docs" variant="secondary">Documentation</ButtonLink>',
  },
  Breadcrumbs: {
    en: "Shows the path to the current page and links to parent sections.",
    ru: "Показывает путь к текущей странице со ссылками на родительские разделы.",
    code: '<Breadcrumbs aria-label="Breadcrumb">\n  <Link href="/docs">Docs</Link>\n  <span>Components</span>\n</Breadcrumbs>',
  },
  Link: {
    en: "A link to a page, file or section. Supports native anchors and router components.",
    ru: "Ссылка для перехода на страницу, к файлу или разделу. Поддерживает компоненты роутера.",
    code: '<Link href="#setup">Setup</Link>',
  },
  ScrollArea: {
    en: "A scrollable container with custom scrollbars and native scrolling.",
    ru: "Контейнер с прокруткой и настраиваемыми полосами прокрутки. Сохраняет нативное управление.",
    code: '<ScrollArea style={{ height: 200 }} aria-label="Items">\n  <Box padding={4}>Content</Box>\n</ScrollArea>',
  },
  Text: {
    en: "Displays text with configurable size and color.",
    ru: "Выводит текст с настройками размера и цвета.",
    code: '<Text as="p" size="lg" tone="secondary">Rikkora UI</Text>',
  },
  Heading: {
    en: "Displays a heading. Its visual size is independent of the heading level.",
    ru: "Выводит заголовок. Визуальный размер настраивается независимо от уровня заголовка.",
    code: '<Heading level={2} size="3xl">Rikkora UI</Heading>',
  },
  Box: {
    en: "A container with configurable padding and a choice of HTML element.",
    ru: "Контейнер с настройкой внутренних отступов и выбором HTML-элемента.",
    code: '<Box padding={6}>Content</Box>',
  },
  Stack: {
    en: "Arranges elements vertically with spacing between them.",
    ru: "Располагает элементы друг под другом с заданным расстоянием между ними.",
    code: '<Stack gap={3}><Text>First</Text><Text>Second</Text></Stack>',
  },
  Separator: {
    en: "Separates content with a horizontal or vertical line.",
    ru: "Разделяет содержимое горизонтальной или вертикальной линией.",
    code: '<Separator orientation="horizontal" />',
  },
  Badge: {
    en: "A compact label for a status, category or count.",
    ru: "Компактная метка для статуса, категории или количества.",
    code: '<Badge variant="primary">New</Badge>',
  },
  Card: {
    en: "Groups related content in a container with a border or background.",
    ru: "Объединяет связанное содержимое в контейнере с границей или фоном.",
    code: '<Card variant="filled" padding={6}><Text>Content</Text></Card>',
  },
  Switch: {
    en: "A switch for turning a setting on or off.",
    ru: "Переключатель для включения и выключения настройки.",
    code: '<Field label="Notifications"><Switch name="notifications" defaultChecked /></Field>',
  },
  RadioGroup: {
    en: "A group of options with a single selection.",
    ru: "Группа переключателей для выбора одного варианта из нескольких.",
    code: '<Field label="Plan"><RadioGroup name="plan" defaultValue="basic" options={[{ value: "basic", label: "Basic" }, { value: "pro", label: "Pro" }]} /></Field>',
  },
  Select: {
    en: "A dropdown list for selecting one or more options. Uses the native browser control.",
    ru: "Выпадающий список для выбора одного или нескольких вариантов. Использует нативный элемент браузера.",
    code: '<Field label="Theme"><Select name="theme" defaultValue="dark"><option value="dark">Dark</option><option value="light">Light</option></Select></Field>',
  },
  Slider: {
    en: "A slider for selecting a numeric value within a range.",
    ru: "Ползунок для выбора числового значения в заданном диапазоне.",
    code: '<Field label="Volume"><Slider name="volume" min={0} max={100} step={5} defaultValue={50} /></Field>',
  },
  Field: {
    en: "Combines a control with its label, description and error message.",
    ru: "Объединяет поле ввода с подписью, описанием и сообщением об ошибке.",
    code: '<Field label="Email" description="Work address" error="Enter a valid email" required><Input type="email" name="email" /></Field>',
  },
  FormControl: {
    en: "Shares disabled, required and error states across related fields.",
    ru: "Задаёт общее состояние disabled, required и ошибки для группы полей.",
    code: '<FormControl disabled><Field label="Name"><Input /></Field></FormControl>',
  },
  Tabs: {
    en: "Switches between content panels using tabs.",
    ru: "Переключает панели содержимого с помощью вкладок.",
    code: '<Tabs.Root defaultValue="one">\n  <Tabs.List aria-label="Sections"><Tabs.Trigger value="one">Overview</Tabs.Trigger></Tabs.List>\n  <Tabs.Content value="one">Content</Tabs.Content>\n</Tabs.Root>',
  },
  Dialog: {
    en: "A modal window above the page that blocks interaction with the background.",
    ru: "Модальное окно поверх страницы, которое блокирует взаимодействие с фоном.",
    code: '<Dialog.Root>\n  <Dialog.Trigger asChild><Button>Open</Button></Dialog.Trigger>\n  <Dialog.Content><Dialog.Title>Settings</Dialog.Title><Dialog.Description>Update preferences</Dialog.Description><Dialog.Close asChild><Button>Close</Button></Dialog.Close></Dialog.Content>\n</Dialog.Root>',
  },
  Popover: {
    en: "Shows additional content in a panel next to the trigger.",
    ru: "Показывает дополнительное содержимое в панели рядом с элементом открытия.",
    code: '<Popover.Root><Popover.Trigger asChild><Button>Details</Button></Popover.Trigger><Popover.Content aria-label="Details">Content<Popover.Close asChild><Button>Close</Button></Popover.Close></Popover.Content></Popover.Root>',
  },
  Tooltip: {
    en: "Shows a short hint on hover or keyboard focus.",
    ru: "Показывает короткую подсказку при наведении или фокусе с клавиатуры.",
    code: '<Tooltip.Provider delayDuration={300}><Tooltip.Root><Tooltip.Trigger asChild><Button>Help</Button></Tooltip.Trigger><Tooltip.Content>Additional information</Tooltip.Content></Tooltip.Root></Tooltip.Provider>',
  },
  DropdownMenu: {
    en: "A dropdown menu of actions with keyboard navigation.",
    ru: "Выпадающее меню действий с управлением с клавиатуры.",
    code: '<DropdownMenu.Root><DropdownMenu.Trigger asChild><Button>Actions</Button></DropdownMenu.Trigger><DropdownMenu.Content><DropdownMenu.Item onSelect={handleEdit}>Edit</DropdownMenu.Item><DropdownMenu.Item disabled>Delete</DropdownMenu.Item></DropdownMenu.Content></DropdownMenu.Root>',
  },
  Accordion: {
    en: "Displays sections that can be expanded and collapsed.",
    ru: "Показывает разделы, которые можно раскрывать и сворачивать.",
    code: '<Accordion.Root type="single" collapsible><Accordion.Item value="one"><Accordion.Header><Accordion.Trigger>Question</Accordion.Trigger></Accordion.Header><Accordion.Content>Answer</Accordion.Content></Accordion.Item></Accordion.Root>',
  },
  Drawer: {
    en: "A panel that opens from an edge of the screen. Supports the same focus behavior as Dialog.",
    ru: "Панель, которая выдвигается от края экрана. Управляет фокусом так же, как Dialog.",
    code: '<Drawer.Root><Drawer.Trigger asChild><Button>Open</Button></Drawer.Trigger><Drawer.Content side="right"><Drawer.Title>Settings</Drawer.Title><Drawer.Description>Update preferences</Drawer.Description><Drawer.Close asChild><Button>Close</Button></Drawer.Close></Drawer.Content></Drawer.Root>',
  },
  Alert: {
    en: "Displays a message inside the page, with an optional title.",
    ru: "Выводит сообщение внутри страницы с необязательным заголовком.",
    code: '<Alert variant="primary" title="Saved" role="status">Your changes are saved.</Alert>',
  },
  Toast: {
    en: "Shows temporary notifications about actions and their results.",
    ru: "Показывает временные уведомления о действиях и их результатах.",
    code: '// Wrap the application in <ToastProvider>.\nconst { toast } = useToast();\n<Button onClick={() => toast({ title: "Saved", description: "Changes saved" })}>Save</Button>',
  },
  Spinner: {
    en: "An animated indicator for an operation in progress.",
    ru: "Анимированный индикатор выполнения операции.",
    code: '<span role="status"><Spinner /> Loading…</span>',
  },
  Progress: {
    en: "Shows progress toward completion. Supports determinate and indeterminate states.",
    ru: "Показывает ход выполнения задачи. Поддерживает определённый и неопределённый прогресс.",
    code: '<Progress aria-label="Upload" min={0} max={100} value={45} />',
  },
  Skeleton: {
    en: "A placeholder that reserves space for content while it loads.",
    ru: "Заглушка, которая сохраняет место для содержимого во время загрузки.",
    code: '<Skeleton shape="text" style={{ width: "12rem" }} />',
  },
  Avatar: {
    en: "Displays a profile image, with initials or custom content as a fallback.",
    ru: "Показывает изображение профиля, инициалы или заданную замену.",
    code: '<Avatar src="/avatar.jpg" alt="Rikka Inohana" size="lg" />',
  },
  Table: {
    en: "Displays tabular data with headers, rows and a caption.",
    ru: "Выводит табличные данные с заголовками, строками и подписью.",
    code: '<Table.Root><Table.Caption>People</Table.Caption><Table.Head><Table.Row><Table.Header>Name</Table.Header></Table.Row></Table.Head><Table.Body><Table.Row><Table.Cell>Rikka</Table.Cell></Table.Row></Table.Body></Table.Root>',
  },
  Pagination: {
    en: "Provides navigation between pages and highlights the current page.",
    ru: "Позволяет переключать страницы и выделяет текущую.",
    code: '<Pagination page={page} pageCount={12} onPageChange={setPage} />',
  },
};
