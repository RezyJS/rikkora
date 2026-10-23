import { catalog, componentNames, componentSlug, type ComponentName } from '../../components/Showcase/catalog';
import type { Language } from '../../localization/messages';

export type Localized = Record<Language, string>;
export const localized = (en: string, ru: string): Localized => ({ en, ru });
export interface ApiProp {
  name: string;
  type: string;
  defaultValue: string;
  description: Localized;
  required?: boolean;
}
export interface ApiPart { name: string; props: ApiProp[] }
export interface KeyboardEntry { keys: string; description: Localized }
export interface ComponentDoc {
  name: ComponentName;
  slug: string;
  category: string;
  summary: Localized;
  usage: string;
  api: ApiPart[];
  accessibility: Localized[];
  keyboard: KeyboardEntry[];
  source: string;
}
const prop = (name: string, type: string, defaultValue: string, en: string, ru: string, required = false): ApiProp => ({ name, type, defaultValue, description: localized(en, ru), required });
const key = (keys: string, en: string, ru: string): KeyboardEntry => ({ keys, description: localized(en, ru) });
const disabled = prop('disabled', 'boolean', 'false', 'Prevents interaction and form submission.', 'Отключает взаимодействие и отправку значения формы.');
const required = prop('required', 'boolean', 'false', 'Marks the control as required.', 'Делает поле обязательным.');
const invalid = prop('invalid', 'boolean', 'false', 'Sets aria-invalid and error styling.', 'Задаёт aria-invalid и оформление ошибки.');
const name = prop('name', 'string', '—', 'Name used when submitting the form.', 'Имя поля при отправке формы.');
const size = prop('size', "'sm' | 'md' | 'lg'", "'md'", 'Controls the visual size.', 'Определяет визуальный размер.');
const variant = prop('variant', "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", "'primary'", 'Controls the visual variant.', 'Определяет визуальный вариант.');
const tone = prop('variant', "'neutral' | 'primary' | 'danger'", "'neutral'", 'Controls the semantic appearance.', 'Определяет смысловой вариант оформления.');
const asChild = prop('asChild', 'boolean', 'false', 'Composes behavior onto one child element.', 'Передаёт поведение одному дочернему элементу.');
const openProps = [
  prop('open / defaultOpen', 'boolean', 'false', 'Controlled or initial open state.', 'Управляемое или начальное состояние открытия.'),
  prop('onOpenChange', '(open: boolean) => void', '—', 'Called when the open state changes.', 'Вызывается при изменении состояния открытия.'),
];
const positionProps = [
  prop('side', "'top' | 'right' | 'bottom' | 'left'", "'bottom'", 'Preferred placement; collisions can adjust it.', 'Предпочтительная сторона; меняется при нехватке места.'),
  prop('align', "'start' | 'center' | 'end'", "'center'", 'Alignment relative to the anchor.', 'Выравнивание относительно якоря.'),
  prop('sideOffset', 'number', '8', 'Distance from the anchor in pixels.', 'Расстояние от якоря в пикселях.'),
  prop('avoidCollisions', 'boolean', 'true', 'Keeps content within the viewport.', 'Удерживает содержимое в границах экрана.'),
  prop('container', 'HTMLElement | null', 'document.body', 'Portal destination; scoped tokens are retained.', 'Контейнер портала; токены исходной области сохраняются.'),
];
const padding = prop('padding', '0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12', '0', 'Spacing token, not a pixel value.', 'Токен отступа, а не число пикселей.');
const checkedProps = [
  prop('checked / defaultChecked', 'boolean', 'false', 'Controlled or initial checked state.', 'Управляемое или начальное состояние выбора.'),
  prop('onChange', 'ChangeEventHandler<HTMLInputElement>', '—', 'Read event.target.checked.', 'Новое состояние находится в event.target.checked.'),
  name, disabled, required, invalid,
];
const textProps = [
  prop('value / defaultValue', 'string | number | readonly string[]', '—', 'Controlled or initial native value.', 'Управляемое или начальное нативное значение.'),
  prop('onChange', 'ChangeEventHandler', '—', 'Native change event; read event.target.value.', 'Нативное событие; значение находится в event.target.value.'),
  name, disabled, required, invalid,
  prop('readOnly', 'boolean', 'false', 'Keeps the value readable and selectable.', 'Сохраняет доступность значения для чтения и выделения.'),
];
const nativeLabel = localized('Use Field or an accessible label. Native form submission and reset are preserved. Explicit control props override FormControl state.', 'Используйте Field или доступную подпись. Нативные отправка и reset формы сохраняются. Явные свойства контрола приоритетнее состояния FormControl.');
const tabKey = key('Tab / Shift + Tab', 'Moves focus to the next or previous control.', 'Переводит фокус на следующий или предыдущий контрол.');
const activateKey = key('Enter / Space', 'Activates the focused button.', 'Активирует кнопку в фокусе.');
const modalNotes = [localized('Include Title and Description. If no description is needed, set aria-describedby={undefined} on Content. Provide a visible, labelled close action.', 'Добавьте Title и Description. Если описание не нужно, задайте aria-describedby={undefined} на Content. Предусмотрите видимую подписанную кнопку закрытия.'), localized('Modal content traps focus, hides background content from assistive technology, locks page scrolling, and restores focus to Trigger on close.', 'Модальное окно удерживает фокус, скрывает фон от вспомогательных технологий, блокирует прокрутку страницы и возвращает фокус в Trigger при закрытии.')];
const modalApi: ApiPart[] = [
  { name: 'Root', props: [...openProps, prop('modal', 'boolean', 'true', 'Enables focus trapping and background interaction blocking.', 'Включает удержание фокуса и блокировку взаимодействия с фоном.')] },
  { name: 'Trigger / Close', props: [asChild, disabled] },
  { name: 'Content', props: [prop('container', 'HTMLElement | null', 'document.body', 'Portal destination.', 'Контейнер портала.'), prop('overlayClassName', 'string', '—', 'Styles the backdrop separately.', 'Отдельный класс для подложки.'), prop('onEscapeKeyDown', '(event: KeyboardEvent) => void', '—', 'Call preventDefault to prevent dismissal.', 'preventDefault предотвращает закрытие.')] },
  { name: 'Title / Description', props: [asChild] },
];

export const categories = [
  { id: 'foundation', title: localized('Foundation', 'Основа'), names: ['Text', 'Heading', 'Separator', 'Badge', 'Card'] },
  { id: 'layout', title: localized('Layout', 'Композиция'), names: ['Box', 'Flex', 'Grid', 'Stack', 'ScrollArea'] },
  { id: 'forms', title: localized('Forms', 'Формы'), names: ['Button', 'IconButton', 'Input', 'Textarea', 'Checkbox', 'Switch', 'RadioGroup', 'Select', 'Slider', 'Field', 'FormControl'] },
  { id: 'navigation', title: localized('Navigation', 'Навигация'), names: ['Link', 'Tabs', 'Accordion', 'Pagination'] },
  { id: 'overlays', title: localized('Overlays', 'Оверлеи'), names: ['Dialog', 'Drawer', 'Popover', 'Tooltip', 'DropdownMenu'] },
  { id: 'feedback', title: localized('Feedback', 'Обратная связь'), names: ['Alert', 'Toast', 'Spinner', 'Progress', 'Skeleton'] },
  { id: 'data', title: localized('Data display', 'Данные'), names: ['Avatar', 'Table'] },
] satisfies { id: string; title: Localized; names: ComponentName[] }[];

const api: Record<ComponentName, ApiPart[]> = {
  Link: [{ name: 'Link', props: [
    prop('href', 'string', '—', 'Destination URL or page anchor.', 'Адрес перехода или якорь страницы.'),
    prop('as', 'ElementType', "'a'", 'Use a router component; its props and ref remain available.', 'Компонент роутера; его свойства и ref сохраняются.'),
    prop('target', "'_self' | '_blank'", "'_self'", 'Where to open the destination.', 'Где открыть ссылку.'),
    prop('rel', 'string', '—', 'Relationship to the destination. Use noopener noreferrer for external links.', 'Связь с адресатом. Для внешних ссылок используйте noopener noreferrer.'),
    prop('children', 'ReactNode', '—', 'Visible and accessible link content.', 'Видимое и доступное содержимое ссылки.'),
  ] }],
  ScrollArea: [
    { name: 'ScrollArea', props: [
      prop('orientation', "'vertical' | 'horizontal' | 'both'", "'vertical'", 'Enabled scroll axes.', 'Доступные направления прокрутки.'),
      prop('type', "'hover' | 'scroll' | 'auto' | 'always'", "'hover'", 'When custom scrollbars are shown.', 'Когда показываются кастомные полосы.'),
      prop('scrollHideDelay', 'number', '600', 'Hide delay in milliseconds for hover and scroll modes.', 'Задержка скрытия в миллисекундах для режимов hover и scroll.'),
      prop('dir', "'ltr' | 'rtl'", "'ltr'", 'Direction for scrollbar positioning and horizontal scrolling.', 'Направление для расположения полос и горизонтальной прокрутки.'),
      prop('viewportProps', 'ScrollAreaViewportProps', '{ tabIndex: 0 }', 'Native viewport props, including onScroll, className, style and ARIA.', 'Нативные свойства viewport: onScroll, className, style и ARIA.'),
      prop('viewportRef', 'Ref<HTMLDivElement>', '—', 'Access scrollTop, scrollLeft and scrollTo. The main ref points to Root.', 'Доступ к scrollTop, scrollLeft и scrollTo. Основной ref указывает на Root.'),
      prop('aria-label / aria-labelledby', 'string', '—', 'Names the focusable viewport region.', 'Задаёт доступное имя области viewport.'),
      prop('style / className', 'CSSProperties / string', '—', 'Constrain height or maxHeight for vertical scrolling; constrain width for horizontal scrolling.', 'Ограничьте height или maxHeight для вертикальной прокрутки; ширину — для горизонтальной.'),
    ] },
    { name: 'CSS variables', props: [
      prop('--rkr-scrollbar-size', 'CSS length', '10px', 'Overlay track thickness.', 'Толщина полосы поверх содержимого.'),
      prop('--rkr-scrollbar-thumb-color', 'CSS color', 'var(--rkr-color-text-tertiary)', 'Thumb color.', 'Цвет бегунка.'),
      prop('--rkr-scrollbar-thumb-hover-color', 'CSS color', 'var(--rkr-color-text-secondary)', 'Thumb hover and active color.', 'Цвет бегунка при наведении и перетаскивании.'),
      prop('--rkr-scrollbar-track-color', 'CSS color', 'transparent', 'Track background.', 'Фон полосы.'),
    ] },
  ],
  Button: [{ name: 'Button', props: [variant, size, disabled, prop('loading', 'boolean', 'false', 'Shows a spinner, sets aria-busy and prevents activation.', 'Показывает индикатор, задаёт aria-busy и блокирует нажатие.'), prop('type', "'button' | 'submit' | 'reset'", "'button'", 'Native button behavior in a form.', 'Нативное поведение кнопки в форме.')] }],
  IconButton: [{ name: 'IconButton', props: [variant, size, prop('aria-label', 'string', '—', 'Accessible name for the icon action.', 'Доступное имя действия с иконкой.', true), disabled, prop('loading', 'boolean', 'false', 'Shows a spinner and disables activation.', 'Показывает индикатор и блокирует нажатие.')] }],
  Input: [{ name: 'Input', props: [prop('type', 'HTMLInputTypeAttribute', "'text'", 'Native input type.', 'Нативный тип поля.'), ...textProps] }],
  Textarea: [{ name: 'Textarea', props: [prop('rows', 'number', '4', 'Initial visible row count.', 'Начальное число видимых строк.'), ...textProps] }],
  Checkbox: [{ name: 'Checkbox', props: checkedProps }],
  Switch: [{ name: 'Switch', props: checkedProps }],
  RadioGroup: [{ name: 'RadioGroup', props: [
    prop('options', 'readonly RadioOption[]', '—', 'Items with value, label and optional disabled.', 'Элементы с value, label и необязательным disabled.', true),
    prop('value / defaultValue', 'string', '—', 'Controlled or initially selected option.', 'Управляемый или изначально выбранный вариант.'),
    prop('onValueChange', '(value: string) => void', '—', 'Called with the selected option value.', 'Получает значение выбранного варианта.'),
    prop('orientation', "'horizontal' | 'vertical'", "'vertical'", 'Visual arrangement of the options.', 'Расположение вариантов.'), name, disabled, required, invalid,
  ] }],
  Select: [{ name: 'Select', props: [
    prop('children', 'option | optgroup elements', '—', 'Native options and option groups.', 'Нативные варианты и группы вариантов.', true),
    ...textProps.filter((item) => item.name !== 'readOnly'),
    prop('multiple', 'boolean', 'false', 'Enables native multiple selection.', 'Включает нативный множественный выбор.'),
  ] }],
  Slider: [{ name: 'Slider', props: [
    prop('value / defaultValue', 'string | number', 'Native midpoint', 'Controlled or initial range value.', 'Управляемое или начальное значение диапазона.'),
    prop('onChange', 'ChangeEventHandler<HTMLInputElement>', '—', 'Read the new value from event.target.valueAsNumber.', 'Число находится в event.target.valueAsNumber.'),
    prop('min', 'number | string', '0', 'Lower bound.', 'Нижняя граница.'), prop('max', 'number | string', '100', 'Upper bound.', 'Верхняя граница.'),
    prop('step', 'number | string', '1', 'Increment between values.', 'Шаг изменения значения.'), name, disabled, invalid,
  ] }],
  Field: [{ name: 'Field', props: [
    prop('label', 'ReactNode', '—', 'Visible accessible label.', 'Видимая доступная подпись.', true),
    prop('description', 'ReactNode', '—', 'Hint connected with aria-describedby.', 'Подсказка, связанная через aria-describedby.'),
    prop('error', 'ReactNode', '—', 'Error text; implies invalid unless explicitly overridden.', 'Текст ошибки; включает invalid, если он явно не переопределён.'),
    prop('controlId', 'string', 'Generated id', 'Match this with an explicit child id. One control per Field.', 'Совпадает с явным id дочернего поля. Один контрол на Field.'),
    disabled, required, invalid,
  ] }],
  FormControl: [{ name: 'FormControl', props: [disabled, required, invalid, prop('children', 'ReactNode', '—', 'Fields and controls that inherit state. No wrapper element is rendered.', 'Поля и контролы, наследующие состояние. DOM-обёртка не создаётся.')] }],
  Text: [{ name: 'Text', props: [
    prop('as', "'span' | 'p' | 'div' | 'small' | 'strong' | 'em'", "'span'", 'Semantic HTML element.', 'Семантический HTML-элемент.'),
    prop('size', "'xs' | 'sm' | 'md' | 'lg' | 'xl'", "'md'", 'Typography size token.', 'Токен размера текста.'),
    prop('tone', "'primary' | 'secondary' | 'tertiary'", "'primary'", 'Text color token.', 'Токен цвета текста.'),
  ] }],
  Heading: [{ name: 'Heading', props: [prop('level', '1 | 2 | 3 | 4 | 5 | 6', '2', 'Semantic heading level.', 'Семантический уровень заголовка.'), prop('size', "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'", "'2xl'", 'Visual size independent of heading level.', 'Визуальный размер независимо от уровня заголовка.')] }],
  Box: [{ name: 'Box', props: [prop('as', 'HTML element name', "'div'", 'Selects a semantic HTML tag with its native props and ref.', 'Задаёт семантический HTML-тег с его нативными свойствами и ref.'), { ...padding, defaultValue: 'CSS default' }] }],
  Flex: [{ name: 'Flex', props: [
    prop('as', 'HTML element name', "'div'", 'Changes the element while preserving native props.', 'Меняет элемент с сохранением нативных свойств.'),
    prop('direction', "'row' | 'column' | 'row-reverse' | 'column-reverse'", 'CSS default', 'Main axis direction.', 'Направление основной оси.'),
    prop('align', "'start' | 'center' | 'end' | 'stretch' | 'baseline'", 'CSS default', 'Cross-axis alignment.', 'Выравнивание по поперечной оси.'),
    prop('justify', "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'", 'CSS default', 'Main-axis distribution.', 'Распределение по основной оси.'),
    prop('gap', 'number | string', 'CSS default', 'Numbers use spacing tokens; strings use CSS lengths.', 'Числа используют токены отступов, строки — CSS-значения.'),
    prop('wrap', 'boolean', 'CSS default', 'Allows items to wrap onto new lines.', 'Разрешает перенос на новую строку.'),
  ] }],
  Grid: [{ name: 'Grid', props: [
    prop('as', 'HTML element name', "'div'", 'Semantic grid container.', 'Семантический контейнер сетки.'),
    prop('columns / rows', 'number | string', 'CSS default', 'Track count or a CSS track definition.', 'Число треков или CSS-описание сетки.'),
    prop('gap / rowGap / columnGap', 'number | string', 'CSS default', 'Spacing tokens or CSS lengths.', 'Токены отступов или CSS-значения.'),
    prop('align', "'start' | 'center' | 'end' | 'stretch' | 'baseline'", 'CSS default', 'Aligns items in their cells.', 'Выравнивает элементы внутри ячеек.'),
    prop('justify', "'start' | 'center' | 'end' | 'stretch'", 'CSS default', 'Inline-axis alignment.', 'Выравнивание по строчной оси.'),
  ] }],
  Stack: [{ name: 'Stack', props: [prop('direction', "'row' | 'column' | 'row-reverse' | 'column-reverse'", "'column'", 'Flex direction; vertical by default.', 'Направление Flex; по умолчанию вертикальное.'), prop('gap', 'number | string', '4', 'Spacing token or CSS length.', 'Токен отступа или CSS-значение.'), prop('align / justify / wrap', 'Flex layout props', 'CSS default', 'Uses the same layout behavior as Flex.', 'Использует поведение композиции Flex.')] }],
  Separator: [{ name: 'Separator', props: [prop('orientation', "'horizontal' | 'vertical'", "'horizontal'", 'Line direction and ARIA orientation.', 'Направление линии и ARIA-ориентация.'), prop('decorative', 'boolean', 'false', 'Removes separator semantics when purely decorative.', 'Отключает семантику для декоративной линии.')] }],
  Badge: [{ name: 'Badge', props: [tone] }],
  Card: [{ name: 'Card', props: [prop('variant', "'outline' | 'filled'", "'outline'", 'Bordered or surface appearance.', 'Оформление с границей или фоном.'), { ...padding, defaultValue: '6' }] }],
  Tabs: [
    { name: 'Root', props: [prop('value / defaultValue', 'string', '—', 'Controlled or initial selected tab.', 'Управляемая или начальная вкладка.'), prop('onValueChange', '(value: string) => void', '—', 'Called when selection changes.', 'Вызывается при смене вкладки.'), prop('orientation', "'horizontal' | 'vertical'", "'horizontal'", 'Determines arrow-key navigation.', 'Определяет навигацию стрелками.'), prop('activationMode', "'automatic' | 'manual'", "'automatic'", 'Select on focus or on explicit activation.', 'Выбор при фокусе или при явной активации.')] },
    { name: 'List', props: [prop('aria-label', 'string', '—', 'Accessible name for the set of tabs.', 'Доступная подпись группы вкладок.', true), prop('loop', 'boolean', 'true', 'Wraps focus at the edges.', 'Переносит фокус с края на противоположный.')] },
    { name: 'Trigger / Content', props: [prop('value', 'string', '—', 'Matching value connects a tab with its panel.', 'Совпадающее значение связывает вкладку с панелью.', true)] },
  ],
  Accordion: [
    { name: 'Root', props: [prop('type', "'single' | 'multiple'", '—', 'One or several items can be expanded.', 'Можно раскрыть один или несколько пунктов.', true), prop('value / defaultValue', 'string | string[]', '—', 'Use a string for single, an array for multiple.', 'Строка для single, массив для multiple.'), prop('onValueChange', '(value: string | string[]) => void', '—', 'Callback type follows the Root type.', 'Тип callback зависит от type корневого элемента.'), prop('collapsible', 'boolean', 'false', 'Allows all items to close in single mode.', 'Разрешает закрыть все пункты в режиме single.'), disabled] },
    { name: 'Item', props: [prop('value', 'string', '—', 'Unique item value.', 'Уникальное значение пункта.', true), disabled] },
    { name: 'Header / Trigger / Content', props: [asChild] },
  ],
  Dialog: modalApi,
  Drawer: modalApi.map((part) => part.name === 'Content' ? { ...part, props: [prop('side', "'left' | 'right' | 'top' | 'bottom'", "'right'", 'Panel edge of the viewport.', 'Сторона экрана для панели.'), ...part.props] } : part),
  Popover: [{ name: 'Root', props: [...openProps, prop('modal', 'boolean', 'false', 'Optionally blocks outside interaction.', 'При необходимости блокирует взаимодействие с фоном.')] }, { name: 'Trigger / Anchor / Close', props: [asChild] }, { name: 'Content', props: positionProps }],
  Tooltip: [{ name: 'Provider', props: [prop('delayDuration', 'number', '700', 'Hover delay in milliseconds.', 'Задержка при наведении в миллисекундах.'), prop('skipDelayDuration', 'number', '300', 'Grace period before the next tooltip is delayed.', 'Период, в течение которого следующая подсказка открывается без задержки.')] }, { name: 'Root', props: openProps }, { name: 'Trigger', props: [asChild] }, { name: 'Content', props: positionProps.map((item) => item.name === 'side' ? { ...item, defaultValue: "'top'" } : item) }],
  DropdownMenu: [{ name: 'Root', props: openProps }, { name: 'Trigger', props: [asChild, disabled] }, { name: 'Content', props: positionProps }, { name: 'Item', props: [disabled, prop('onSelect', '(event: Event) => void', '—', 'Handles selection. preventDefault keeps the menu open.', 'Обрабатывает выбор. preventDefault оставляет меню открытым.')] }, { name: 'Label / Separator', props: [asChild] }],
  Alert: [{ name: 'Alert', props: [tone, prop('title', 'ReactNode', '—', 'Optional visible heading.', 'Необязательный видимый заголовок.'), prop('role', "'status' | 'alert'", 'None', 'Opt into live announcements for dynamic messages.', 'Включает live-объявления для динамических сообщений.')] }],
  Toast: [
    { name: 'ToastProvider', props: [prop('maxVisible', 'number', '3', 'Maximum visible messages; others wait in FIFO order.', 'Максимум видимых сообщений; остальные ждут в очереди FIFO.'), prop('duration', 'number', '5000', 'Default visible duration in milliseconds.', 'Длительность показа по умолчанию в миллисекундах.'), prop('closeLabel', 'string', "'Dismiss notification'", 'Localized close button label.', 'Локализованная подпись кнопки закрытия.'), prop('viewportLabel', 'string', "'Notifications'", 'Localized notification region label.', 'Локализованная подпись области уведомлений.')] },
    { name: 'useToast()', props: [prop('toast', '(message: ToastMessage) => number', '—', 'Enqueues a message and returns its id.', 'Добавляет сообщение в очередь и возвращает его id.'), prop('dismiss', '(id: number) => void', '—', 'Removes a visible or queued message.', 'Удаляет видимое сообщение или сообщение из очереди.'), prop('dismissAll', '() => void', '—', 'Clears the entire queue.', 'Очищает всю очередь.')] },
    { name: 'ToastMessage', props: [prop('title', 'ReactNode', '—', 'Notification heading.', 'Заголовок уведомления.', true), prop('description', 'ReactNode', '—', 'Additional message content.', 'Дополнительное содержимое.'), prop('duration', 'number', 'Provider duration', 'Overrides this message duration.', 'Переопределяет длительность этого сообщения.'), prop('type', "'foreground' | 'background'", "'background'", 'Announcement priority for queued messages.', 'Приоритет объявления сообщений очереди.')] },
  ],
  Spinner: [{ name: 'Spinner', props: [size] }],
  Progress: [{ name: 'Progress', props: [prop('value', 'number', 'Indeterminate', 'Omit while progress cannot be measured.', 'Не задавайте, если прогресс нельзя измерить.'), prop('min', 'number', '0', 'Lower progress bound.', 'Нижняя граница прогресса.'), prop('max', 'number', '100', 'Upper bound; out-of-range values are clamped.', 'Верхняя граница; значения ограничиваются диапазоном.'), prop('aria-label', 'string', '—', 'Accessible name, unless aria-labelledby is provided.', 'Доступная подпись, если не задан aria-labelledby.', true)] }],
  Skeleton: [{ name: 'Skeleton', props: [prop('shape', "'rectangle' | 'circle' | 'text'", "'rectangle'", 'Placeholder shape.', 'Форма заглушки.'), prop('animated', 'boolean', 'true', 'Animation also respects reduced motion preferences.', 'Анимация учитывает настройку уменьшения движения.')] }],
  Avatar: [{ name: 'Avatar', props: [prop('alt', 'string', '—', 'Accessible image name and source for initials.', 'Доступное имя изображения и источник инициалов.', true), prop('src', 'string', '—', 'Image URL; errors show the fallback.', 'Адрес изображения; при ошибке показывается замена.'), prop('fallback', 'ReactNode', 'Initials', 'Content displayed without an image.', 'Содержимое при отсутствии изображения.'), size, prop('imageProps', 'img attributes except src/alt/children', '—', 'Native image props, including loading and onError.', 'Нативные свойства изображения, включая loading и onError.')] }],
  Table: [{ name: 'Root / Caption / Head / Body / Foot / Row / Cell', props: [prop('Native HTML props', 'table / caption / thead / tbody / tfoot / tr / td', '—', 'Semantic native table elements with forwarded refs.', 'Семантические нативные элементы таблицы с ref.')] }, { name: 'Header', props: [prop('scope', "'col' | 'row' | 'colgroup' | 'rowgroup'", "'col'", 'Defines which cells this header describes.', 'Определяет ячейки, к которым относится заголовок.')] }],
  Pagination: [{ name: 'Pagination', props: [prop('page', 'number', '—', 'Controlled current page, starting at 1.', 'Управляемая текущая страница, начиная с 1.', true), prop('pageCount', 'number', '—', 'Total number of pages; 0 disables navigation.', 'Число страниц; 0 отключает навигацию.', true), prop('onPageChange', '(page: number) => void', '—', 'Receives the requested page.', 'Получает запрошенный номер страницы.', true), prop('siblingCount', 'number', '1', 'Pages around the current page, clamped to 0–5.', 'Страницы рядом с текущей; ограничивается диапазоном 0–5.'), disabled, prop('previousLabel / nextLabel', 'string', 'English labels', 'Localized accessible previous/next labels.', 'Локализованные подписи переходов назад/вперёд.'), prop('getPageLabel', '(page: number) => string', '`Page ${page}`', 'Localized accessible page name.', 'Локализованное доступное имя страницы.')] }],
};

const basicUsage: Partial<Record<ComponentName, string>> = {
  Button: '<Button variant="primary" size="md">Save changes</Button>',
  IconButton: '<IconButton aria-label="Favorite" variant="outline">\n  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">\n    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" fill="none" stroke="currentColor" />\n  </svg>\n</IconButton>',
  Input: '<Field label="Email" description="Work address" required>\n  <Input name="email" type="email" placeholder="you@example.com" />\n</Field>',
  Checkbox: '<Field label="Receive updates">\n  <Checkbox name="updates" defaultChecked />\n</Field>',
  Textarea: '<Field label="Message">\n  <Textarea name="message" rows={4} placeholder="Write a message" />\n</Field>',
  Flex: '<Flex gap={3} align="center" wrap>\n  <Button>Save</Button>\n  <Button variant="outline">Cancel</Button>\n</Flex>',
  Grid: '<Grid columns={2} gap={4}>\n  <Card>First item</Card>\n  <Card>Second item</Card>\n</Grid>',
};
const overrides: Partial<Record<ComponentName, string>> = {
  ScrollArea: '<ScrollArea\n  type="auto"\n  aria-label="Items"\n  style={{ height: 200, width: 320, "--rkr-scrollbar-size": "12px" }}\n>\n  <Stack gap={3} style={{ padding: "1rem" }}>\n    {Array.from({ length: 20 }, (_, index) => (\n      <Text as="div" key={index}>Item {index + 1}</Text>\n    ))}\n  </Stack>\n</ScrollArea>',
  Dialog: '<Dialog.Root>\n  <Dialog.Trigger asChild>\n    <Button>Open settings</Button>\n  </Dialog.Trigger>\n  <Dialog.Content>\n    <Dialog.Title>Settings</Dialog.Title>\n    <Dialog.Description>Update your preferences.</Dialog.Description>\n    <Dialog.Close asChild>\n      <Button>Close</Button>\n    </Dialog.Close>\n  </Dialog.Content>\n</Dialog.Root>',
  Drawer: '<Drawer.Root>\n  <Drawer.Trigger asChild>\n    <Button>Open settings</Button>\n  </Drawer.Trigger>\n  <Drawer.Content side="right">\n    <Drawer.Title>Settings</Drawer.Title>\n    <Drawer.Description>Update your preferences.</Drawer.Description>\n    <Drawer.Close asChild>\n      <Button>Close</Button>\n    </Drawer.Close>\n  </Drawer.Content>\n</Drawer.Root>',
  Tabs: '<Tabs.Root defaultValue="overview">\n  <Tabs.List aria-label="Sections">\n    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>\n    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>\n  </Tabs.List>\n  <Tabs.Content value="overview">Overview content</Tabs.Content>\n  <Tabs.Content value="settings">Settings content</Tabs.Content>\n</Tabs.Root>',
  Accordion: '<Accordion.Root type="single" collapsible>\n  <Accordion.Item value="delivery">\n    <Accordion.Header>\n      <Accordion.Trigger>When will my order arrive?</Accordion.Trigger>\n    </Accordion.Header>\n    <Accordion.Content>Within 3–5 business days.</Accordion.Content>\n  </Accordion.Item>\n</Accordion.Root>',
  DropdownMenu: '<DropdownMenu.Root>\n  <DropdownMenu.Trigger asChild>\n    <Button>Actions</Button>\n  </DropdownMenu.Trigger>\n  <DropdownMenu.Content>\n    <DropdownMenu.Item onSelect={() => console.log("Edit")}>\n      Edit\n    </DropdownMenu.Item>\n    <DropdownMenu.Item disabled>Delete</DropdownMenu.Item>\n  </DropdownMenu.Content>\n</DropdownMenu.Root>',
  Tooltip: '<Tooltip.Provider delayDuration={300}>\n  <Tooltip.Root>\n    <Tooltip.Trigger asChild>\n      <Button variant="outline">Help</Button>\n    </Tooltip.Trigger>\n    <Tooltip.Content>Additional information</Tooltip.Content>\n  </Tooltip.Root>\n</Tooltip.Provider>',
  Popover: '<Popover.Root>\n  <Popover.Trigger asChild>\n    <Button>Details</Button>\n  </Popover.Trigger>\n  <Popover.Content aria-label="Details">\n    <Text>Additional information</Text>\n    <Popover.Close asChild>\n      <Button>Close</Button>\n    </Popover.Close>\n  </Popover.Content>\n</Popover.Root>',
  Table: '<Table.Root>\n  <Table.Caption>People</Table.Caption>\n  <Table.Head>\n    <Table.Row><Table.Header>Name</Table.Header></Table.Row>\n  </Table.Head>\n  <Table.Body>\n    <Table.Row><Table.Cell>Rikka</Table.Cell></Table.Row>\n  </Table.Body>\n</Table.Root>',
  FormControl: '<FormControl disabled>\n  <Field label="Name"><Input name="name" /></Field>\n  <Field label="Message"><Textarea name="message" /></Field>\n</FormControl>',
  RadioGroup: '<Field label="Plan">\n  <RadioGroup\n    name="plan"\n    defaultValue="basic"\n    options={[\n      { value: "basic", label: "Basic" },\n      { value: "pro", label: "Pro" },\n    ]}\n  />\n</Field>',
  Select: '<Field label="Theme">\n  <Select name="theme" defaultValue="dark">\n    <option value="dark">Dark</option>\n    <option value="light">Light</option>\n  </Select>\n</Field>',
};
function usageFor(component: ComponentName): string {
  if (component === 'Pagination') return `import { useState } from 'react';\nimport { Pagination } from '@rikkora/ui';\n\nexport function Example() {\n  const [page, setPage] = useState(1);\n  return <Pagination page={page} pageCount={12} onPageChange={setPage} />;\n}`;
  if (component === 'Toast') return `import { Button, ToastProvider, useToast } from '@rikkora/ui';\n\nfunction SaveButton() {\n  const { toast } = useToast();\n  return (\n    <Button onClick={() => toast({\n      title: 'Saved',\n      description: 'Your changes are saved.',\n    })}>\n      Save\n    </Button>\n  );\n}\n\nexport function Example() {\n  return (\n    <ToastProvider maxVisible={3}>\n      <SaveButton />\n    </ToastProvider>\n  );\n}`;
  const body = overrides[component] ?? basicUsage[component] ?? (component in catalog ? catalog[component as keyof typeof catalog].code : '');
  const imports = [...new Set(Array.from(body.matchAll(/<([A-Z][A-Za-z]*)/g), (match) => match[1]))];
  return `import { ${imports.join(', ')} } from '@rikkora/ui';\n\nexport function Example() {\n  return (\n${body.split('\n').map((line) => `    ${line}`).join('\n')}\n  );\n}`;
}

const summaries: Record<ComponentName, Localized> = {
  Link: localized('Navigates to a page, resource or section with native or router links.', 'Переходит к странице, ресурсу или разделу через нативные ссылки или роутер.'),
  ScrollArea: localized('A scrollable container with custom overlay tracks and native scrolling.', 'Контейнер с кастомными полосами и нативной прокруткой.'),
  Button: localized('Triggers an action or submits a form.', 'Запускает действие или отправляет форму.'),
  IconButton: localized('A compact button for an action represented by an icon.', 'Компактная кнопка действия с иконкой.'),
  Input: localized('A single-line field for text and native input types.', 'Однострочное поле для текста и нативных типов ввода.'),
  Checkbox: localized('Selects an independent option.', 'Выбирает независимый параметр.'),
  Textarea: localized('A resizable field for multiline text.', 'Поле с изменяемым размером для многострочного текста.'),
  Flex: localized('Arranges elements along one axis.', 'Располагает элементы вдоль одной оси.'),
  Grid: localized('Arranges elements in rows and columns.', 'Располагает элементы по строкам и столбцам.'),
  Text: localized('Displays text with semantic elements and typography tokens.', 'Выводит текст с семантическими элементами и токенами типографики.'),
  Heading: localized('A semantic heading with an independent visual size.', 'Семантический заголовок с независимым визуальным размером.'),
  Box: localized('A simple container with token-based padding.', 'Простой контейнер с отступами из токенов.'),
  Stack: localized('Composes elements vertically with consistent spacing.', 'Выстраивает элементы вертикально с согласованными отступами.'),
  Separator: localized('Separates related groups of content.', 'Разделяет группы содержимого.'),
  Badge: localized('A short label for a status or category.', 'Короткая метка статуса или категории.'),
  Card: localized('Groups related content inside a bordered or filled surface.', 'Объединяет связанное содержимое в контейнере с границей или фоном.'),
  Switch: localized('Turns a setting on or off.', 'Включает или выключает настройку.'),
  RadioGroup: localized('Selects one option from a set.', 'Выбирает один вариант из набора.'),
  Select: localized('A native dropdown for choosing an option.', 'Нативный выпадающий список для выбора варианта.'),
  Slider: localized('Chooses a value within a numeric range.', 'Выбирает значение в числовом диапазоне.'),
  Field: localized('Connects a control with its label, hint and error.', 'Связывает контрол с подписью, подсказкой и ошибкой.'),
  FormControl: localized('Shares form state with related fields and controls.', 'Передаёт общее состояние полям и контролам.'),
  Tabs: localized('Switches between related panels of content.', 'Переключает связанные панели содержимого.'),
  Dialog: localized('Opens a focused window above the page.', 'Открывает отдельное окно поверх страницы.'),
  Popover: localized('Shows contextual content next to a trigger.', 'Показывает контекстное содержимое рядом с триггером.'),
  Tooltip: localized('Adds a short explanation on hover or keyboard focus.', 'Добавляет короткое пояснение при наведении или фокусе с клавиатуры.'),
  DropdownMenu: localized('Groups contextual actions in a keyboard-accessible menu.', 'Объединяет контекстные действия в меню с управлением с клавиатуры.'),
  Accordion: localized('Expands and collapses sections of content.', 'Раскрывает и сворачивает разделы содержимого.'),
  Drawer: localized('Opens a dialog panel from an edge of the screen.', 'Открывает панель диалога от края экрана.'),
  Alert: localized('Displays a contextual message inside the page.', 'Выводит контекстное сообщение внутри страницы.'),
  Toast: localized('Shows temporary notifications in a compact stack. Hover or focus the stack to expand it; additional messages wait in a FIFO queue.', 'Показывает временные уведомления компактной стопкой. Наведите курсор или переведите фокус на стопку, чтобы раскрыть её; остальные сообщения ждут в очереди FIFO.'),
  Spinner: localized('Indicates an ongoing operation.', 'Обозначает выполняющуюся операцию.'),
  Progress: localized('Shows measurable or indeterminate progress.', 'Показывает измеримый или неопределённый прогресс.'),
  Skeleton: localized('Reserves space while content is loading.', 'Сохраняет место для загружаемого содержимого.'),
  Avatar: localized('Displays a profile image with a fallback.', 'Выводит изображение профиля с заменой при ошибке.'),
  Table: localized('Displays data in a semantic HTML table.', 'Выводит данные в семантической HTML-таблице.'),
  Pagination: localized('Navigates between pages of a collection.', 'Переключает страницы набора данных.'),
};

const notes: Partial<Record<ComponentName, Localized[]>> = {
  ScrollArea: [localized('The viewport is keyboard focusable by default. Name it with aria-label or aria-labelledby. Decorative scrollbars are hidden from assistive technology; scrolling and focus remain native.', 'Viewport по умолчанию доступен с клавиатуры. Подпишите его через aria-label или aria-labelledby. Декоративные полосы скрыты от вспомогательных технологий; прокрутка и фокус остаются нативными.'), localized('Use viewportRef for programmatic scrolling and viewportProps.onScroll for events. The regular ref points to the outer container. Tracks overlay content: leave padding near interactive items if needed. Pass dir="rtl" for RTL layouts.', 'Для программной прокрутки используйте viewportRef, для событий — viewportProps.onScroll. Обычный ref указывает на внешний контейнер. Полосы находятся поверх содержимого: при необходимости оставьте отступ рядом с интерактивными элементами. Для RTL задайте dir="rtl".')],
  Button: [localized('Use type="submit" explicitly for form submission. Loading keeps the accessible name and prevents repeated activation.', 'Для отправки формы явно задайте type="submit". При загрузке доступное имя сохраняется, повторное нажатие блокируется.')],
  IconButton: [localized('Always provide aria-label. Hide decorative SVGs with aria-hidden. Use aria-pressed for a toggle action.', 'Всегда задавайте aria-label. Декоративный SVG скрывайте через aria-hidden. Для переключаемого действия используйте aria-pressed.')],
  Field: [localized('Wrap one control per Field. A custom control id must match controlId. Errors are connected with aria-describedby; validation logic belongs to the application.', 'Оборачивайте один контрол в Field. Явный id контрола должен совпадать с controlId. Ошибка связана через aria-describedby; логика валидации остаётся в приложении.')],
  FormControl: [localized('Provides context without a DOM node. Use Field for accessible labels; explicit child props override inherited state.', 'Передаёт контекст без DOM-узла. Используйте Field для доступных подписей; явные свойства дочернего поля приоритетнее наследуемых.')],
  Dialog: modalNotes, Drawer: modalNotes,
  Popover: [localized('Give Content an accessible name. Use Dialog for a primary modal task; use Tooltip for non-interactive supplementary text.', 'Задайте доступную подпись Content. Для основной модальной задачи используйте Dialog; для пояснения без интерактивных элементов — Tooltip.')],
  Tooltip: [localized('Keep content brief and non-interactive. The trigger keeps its own accessible name; the tooltip supplements it through aria-describedby. Disabled buttons cannot receive focus.', 'Содержимое должно быть коротким и неинтерактивным. Триггер сохраняет своё доступное имя; подсказка дополняет его через aria-describedby. Недоступная кнопка не получает фокус.')],
  DropdownMenu: [localized('Use Item for actions and onSelect for activation. Disabled items are skipped by keyboard navigation.', 'Используйте Item для действий и onSelect для выбора. Навигация с клавиатуры пропускает недоступные пункты.')],
  Tabs: [localized('Label List and connect each Trigger to Content using the same value. Manual activation is useful when switching panels is expensive.', 'Подпишите List и свяжите Trigger с Content одинаковым value. Ручная активация удобна, если переключение панели требует загрузки.')],
  Accordion: [localized('Place Trigger inside Header. Set the Header heading level with asChild to fit the document hierarchy.', 'Поместите Trigger в Header. При необходимости измените уровень заголовка Header через asChild под иерархию документа.')],
  Alert: [localized('Static content has no live role by default. Choose role="status" for routine dynamic updates and role="alert" only for urgent messages.', 'Статическое содержимое по умолчанию не имеет live-роли. Для обычных динамических сообщений используйте role="status", для срочных — role="alert".')],
  Toast: [localized('Localize closeLabel and viewportLabel. Timers pause on hover/focus. Routine queued messages use background announcements; do not rely on a toast as the only place for essential information.', 'Локализуйте closeLabel и viewportLabel. Таймер приостанавливается при hover/focus. Обычные сообщения очереди объявляются в фоне; важная информация должна оставаться доступной и после закрытия уведомления.'), localized('Toast.* also exposes declarative Provider, Root, Title, Description, Close, Action and Viewport primitives. Use either a declarative viewport or ToastProvider for a given notification region.', 'Toast.* также предоставляет декларативные Provider, Root, Title, Description, Close, Action и Viewport. Для одной области уведомлений выбирайте декларативный viewport или ToastProvider.')],
  Spinner: [localized('Decorative by default. Put loading text in a surrounding status region or use the parent button loading state.', 'По умолчанию декоративен. Поместите текст загрузки в окружающую status-область или используйте loading у кнопки.')],
  Progress: [localized('Provide aria-label or aria-labelledby. Indeterminate progress omits aria-valuenow. Use surrounding text to explain the operation.', 'Задайте aria-label или aria-labelledby. Неопределённый прогресс не имеет aria-valuenow. Объясните операцию окружающим текстом.')],
  Skeleton: [localized('Hidden from assistive technology. Mark the loading content region with aria-busy and announce loading separately. Reduced motion disables the animation.', 'Скрыт от вспомогательных технологий. Задайте aria-busy на загружаемой области и отдельно сообщите о загрузке. Уменьшение движения отключает анимацию.')],
  Avatar: [localized('Use meaningful alt text. Failed or missing images show fallback or initials. A changed src resets image loading.', 'Задайте осмысленный alt. При отсутствии или ошибке изображения показываются fallback или инициалы. Изменение src перезапускает загрузку.')],
  Table: [localized('Include Caption. Use Header scope="row" for row headers and the default scope="col" for column headers. This is a table, not an interactive data grid.', 'Добавьте Caption. Для заголовка строки задайте Header scope="row", для столбца используется scope="col". Это таблица без поведения интерактивной сетки.')],
  Pagination: [localized('Current page uses aria-current="page". Localize aria-label, previousLabel, nextLabel and getPageLabel. Content loading and focus after a page change belong to the application.', 'Текущая страница отмечена aria-current="page". Локализуйте aria-label, previousLabel, nextLabel и getPageLabel. Загрузкой содержимого и фокусом после перехода управляет приложение.')],
  Heading: [localized('Choose level to match the document hierarchy. Use size for appearance instead of skipping heading levels.', 'Выбирайте level по иерархии документа. Для оформления используйте size, сохраняя порядок уровней.')],
  Separator: [localized('Use decorative for purely visual lines. Vertical separators need a parent with a defined height or stretch alignment.', 'Для чисто визуальной линии используйте decorative. Вертикальной линии нужен родитель с высотой или растягиванием.')],
};

function keyboardFor(component: ComponentName): KeyboardEntry[] {
  switch (component) {
    case 'ScrollArea': return [tabKey, key('Arrow keys / Page Up / Page Down', 'Scrolls the focused viewport using browser behavior.', 'Прокручивает viewport в фокусе по правилам браузера.'), key('Home / End', 'Moves toward the start or end using native platform behavior.', 'Перемещает к началу или концу по правилам платформы.')];
    case 'Link': return [tabKey, key('Enter', 'Follows the focused link.', 'Открывает ссылку в фокусе.')];
    case 'Button': case 'IconButton': return [tabKey, activateKey];
    case 'Checkbox': case 'Switch': return [tabKey, key('Space', 'Toggles the checked state.', 'Переключает состояние выбора.')];
    case 'Input': case 'Textarea': return [tabKey, key('Native editing keys', 'Moves the caret, selects and edits text.', 'Перемещает курсор, выделяет и редактирует текст.')];
    case 'Select': return [tabKey, key('↑ / ↓ / typing', 'Uses the browser native option navigation.', 'Использует нативную навигацию по вариантам браузера.')];
    case 'RadioGroup': return [tabKey, key('↑ / ↓ / ← / →', 'Selects the adjacent enabled option.', 'Выбирает соседний доступный вариант.'), key('Space', 'Selects the focused option.', 'Выбирает вариант в фокусе.')];
    case 'Slider': return [tabKey, key('← / ↓ · → / ↑', 'Decreases or increases by one step.', 'Уменьшает или увеличивает на один шаг.'), key('Home / End', 'Moves to the minimum or maximum.', 'Выбирает минимум или максимум.')];
    case 'Tabs': return [tabKey, key('← / → or ↑ / ↓', 'Moves focus along the tab orientation; skips disabled tabs.', 'Перемещает фокус по ориентации вкладок; пропускает недоступные.'), key('Home / End', 'Focuses the first or last tab.', 'Переводит фокус на первую или последнюю вкладку.'), key('Enter / Space', 'Activates the focused tab in manual mode.', 'Активирует вкладку в ручном режиме.')];
    case 'Accordion': return [tabKey, key('Enter / Space', 'Expands or collapses an item.', 'Раскрывает или закрывает пункт.'), key('↑ / ↓ · Home / End', 'Moves between item triggers.', 'Переводит фокус между триггерами пунктов.')];
    case 'Dialog': case 'Drawer': return [key('Tab / Shift + Tab', 'Cycles within modal content.', 'Перемещает фокус внутри модального содержимого.'), key('Escape', 'Closes the topmost window and restores focus.', 'Закрывает верхнее окно и возвращает фокус.')];
    case 'Popover': return [tabKey, key('Escape', 'Closes the popover and restores trigger focus.', 'Закрывает popover и возвращает фокус в триггер.')];
    case 'Tooltip': return [key('Tab', 'Focus on the trigger reveals the explanation.', 'Фокус на триггере показывает пояснение.'), key('Escape', 'Dismisses the tooltip.', 'Закрывает подсказку.')];
    case 'DropdownMenu': return [key('Enter / Space / ↓', 'Opens the menu from its trigger.', 'Открывает меню из триггера.'), key('↑ / ↓ · Home / End', 'Moves between enabled items.', 'Перемещает фокус между доступными пунктами.'), key('Typing', 'Finds a matching item.', 'Ищет подходящий пункт.'), key('Enter / Space', 'Selects the focused item.', 'Выбирает пункт в фокусе.'), key('Escape', 'Closes the menu and restores focus.', 'Закрывает меню и возвращает фокус.')];
    case 'Toast': return [key('F8', 'Focuses the notification region.', 'Переводит фокус в область уведомлений.'), tabKey, key('Escape', 'Dismisses the focused toast.', 'Закрывает уведомление в фокусе.')];
    case 'Pagination': return [tabKey, activateKey];
    default: return [];
  }
}
const sourceFolders: Record<string, ComponentName[]> = {
  'Foundation/Foundation.tsx': ['Text', 'Heading', 'Box', 'Stack', 'Separator', 'Badge', 'Card'],
  'Controls/Controls.tsx': ['Switch', 'RadioGroup', 'Select', 'Slider'],
  'Field/Field.tsx': ['Field', 'FormControl'], 'Navigation/Navigation.tsx': ['Tabs', 'Accordion'],
  'Feedback/Feedback.tsx': ['Alert', 'Spinner', 'Progress', 'Skeleton', 'Avatar'],
  'Data/Data.tsx': ['Table', 'Pagination'], 'Overlays/Dialog.tsx': ['Dialog', 'Drawer'], 'Toast/Toast.tsx': ['Toast'],
};
export const componentDocs: ComponentDoc[] = categories.flatMap((category) => category.names.map((component) => ({
  name: component, slug: componentSlug(component), category: category.id, summary: summaries[component], usage: usageFor(component), api: api[component],
  accessibility: notes[component] ?? ([...['Input', 'Textarea', 'Checkbox', 'Switch', 'RadioGroup', 'Select', 'Slider']].includes(component)
    ? [nativeLabel] : [localized('Uses native HTML semantics. Choose semantic elements for the surrounding content and keep its reading order consistent.', 'Использует нативную HTML-семантику. Выбирайте смысловые элементы окружающего содержимого и сохраняйте порядок чтения.')]),
  keyboard: keyboardFor(component),
  source: Object.entries(sourceFolders).find(([, members]) => members.includes(component))?.[0]
    ?? (['Popover', 'Tooltip', 'DropdownMenu'].includes(component) ? `Overlays/${component}.tsx` : `${component === 'IconButton' ? 'Button' : component}/${component}.tsx`),
})));

// Keep the documentation registry complete when the public component catalog grows.
if (componentDocs.length !== componentNames.length) throw new Error('Component documentation is incomplete');
