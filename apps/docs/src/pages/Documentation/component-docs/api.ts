import type { ComponentName } from '../../../components/Showcase/componentNames';
import type { ApiPart } from './types';
import { prop } from './builders';

const disabled = prop(
  'disabled',
  'boolean',
  'false',
  "Prevents interaction with the component.",
  "Блокирует взаимодействие с компонентом.",
);

const required = prop(
  'required',
  'boolean',
  'false',
  "Marks the field as required.",
  "Отмечает поле как обязательное.",
);

const invalid = prop(
  'invalid',
  'boolean',
  'false',
  "Marks an invalid value and applies error styling.",
  "Отмечает некорректное значение и включает оформление ошибки.",
);

const name = prop(
  'name',
  'string',
  '—',
  "The field name used in form submission.",
  "Имя поля при отправке формы.",
);

const size = prop(
  'size',
  "'sm' | 'md' | 'lg'",
  "'md'",
  "Controls the component size.",
  "Задаёт размер компонента.",
);

const variant = prop(
  'variant',
  "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
  "'primary'",
  "Changes the visual appearance of the component.",
  "Задаёт вариант оформления компонента.",
);

const tone = prop(
  'variant',
  "'neutral' | 'primary' | 'danger'",
  "'neutral'",
  "Changes the visual appearance of the component.",
  "Задаёт вариант оформления компонента.",
);

const asChild = prop(
  'asChild',
  'boolean',
  'false',
  "Passes the component behavior to its child element.",
  "Передаёт поведение компонента дочернему элементу.",
);

const openProps = [
  prop(
    'open / defaultOpen',
    'boolean',
    'false',
    "Controlled or initial open state.",
    "Управляемое или начальное состояние открытия.",
  ),
  prop(
    'onOpenChange',
    '(open: boolean) => void',
    '—',
    "Called when the open state changes.",
    "Вызывается при открытии и закрытии.",
  ),
];

const positionProps = [
  prop(
    'side',
    "'top' | 'right' | 'bottom' | 'left'",
    "'bottom'",
    "The side where the panel appears.",
    "Сторона размещения панели.",
  ),
  prop(
    'align',
    "'start' | 'center' | 'end'",
    "'center'",
    "Aligns content within its container or relative to its trigger.",
    "Выравнивает содержимое в контейнере или относительно элемента открытия.",
  ),
  prop(
    'sideOffset',
    'number',
    '8',
    "Distance from the trigger in pixels.",
    "Расстояние от элемента открытия в пикселях.",
  ),
  prop(
    'avoidCollisions',
    'boolean',
    'true',
    "Adjusts placement to keep content within the viewport.",
    "Меняет положение содержимого у границ экрана.",
  ),
  prop(
    'container',
    'HTMLElement | null',
    'document.body',
    "The element where portal content is mounted.",
    "Элемент, в котором размещается содержимое портала.",
  ),
];

const padding = prop(
  'padding',
  '0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12',
  '0',
  "Sets inner spacing using a spacing token.",
  "Задаёт внутренний отступ через токен.",
);

const paddingAxes = [
  prop('paddingX', padding.type, 'padding',
    "Sets horizontal padding independently of padding.",
    "Задаёт отступ по горизонтали независимо от padding."),
  prop('paddingY', padding.type, 'padding',
    "Sets vertical padding independently of padding.",
    "Задаёт отступ по вертикали независимо от padding."),
];

const checkedProps = [
  prop(
    'checked / defaultChecked',
    'boolean',
    'false',
    "Controlled or initial checked state.",
    "Управляемое или начальное состояние выбора.",
  ),
  prop(
    'onChange',
    'ChangeEventHandler<HTMLInputElement>',
    '—',
    "Called when the field value changes.",
    "Вызывается при изменении значения поля.",
  ),
  name,
  disabled,
  required,
  invalid,
];

const textProps = [
  prop(
    'value / defaultValue',
    'string | number | readonly string[]',
    '—',
    "Controlled or initial value.",
    "Управляемое или начальное значение.",
  ),
  prop(
    'onChange',
    'ChangeEventHandler',
    '—',
    "Called when the field value changes.",
    "Вызывается при изменении значения поля.",
  ),
  name,
  disabled,
  required,
  invalid,
  prop(
    'readOnly',
    'boolean',
    'false',
    "Allows reading and selection without editing.",
    "Позволяет читать и выделять значение без редактирования.",
  ),
];

const modalApi: ApiPart[] = [
  {
    name: 'Root',
    props: [
      ...openProps,
      prop(
        'modal',
        'boolean',
        'true',
        "Traps focus and blocks interaction with the background.",
        "Удерживает фокус и блокирует взаимодействие с фоном.",
      ),
    ],
  },
  { name: 'Trigger / Close', props: [asChild, disabled] },
  {
    name: 'Content',
    props: [
      prop(
        'container',
        'HTMLElement | null',
        'document.body',
        "The element where portal content is mounted.",
        "Элемент, в котором размещается содержимое портала.",
      ),
      prop(
        'overlayClassName',
        'string',
        '—',
        "The CSS class for the backdrop.",
        "CSS-класс подложки.",
      ),
      prop(
        'onEscapeKeyDown',
        '(event: KeyboardEvent) => void',
        '—',
        "Handles Escape; preventDefault keeps the panel open.",
        "Обрабатывает Escape; preventDefault отменяет закрытие.",
      ),
    ],
  },
  { name: 'Title / Description', props: [asChild] },
];

export const api: Record<ComponentName, ApiPart[]> = {
  ButtonLink: [{
    name: 'ButtonLink',
    props: [
      variant,
      { ...size, type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg' | 'icon-xl'" },
      prop('radius', "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'", "'sm'", 'Corner radius', 'Параметр скругления'),
      prop('href', 'string', '—', "The URL or page anchor to navigate to.", "Адрес страницы, файла или раздела для перехода."),
      prop('as', 'ElementType', "'a'", "The HTML element or component to render.", "HTML-элемент или компонент для отображения."),
      prop('target', "'_self' | '_blank'", "'_self'", "Where the link destination opens.", "Где открывается ссылка."),
      prop('rel', 'string', '—', "The relationship between this page and the link destination.", "Связь текущей страницы с адресатом ссылки."),
      prop('aria-label', 'string', '—', "An accessible name for the component.", "Доступное имя компонента."),
      prop('children', 'ReactNode', '—', "The content displayed inside the component.", "Содержимое компонента."),
    ],
  }],
  Breadcrumbs: [
    {
      name: 'Breadcrumbs',
      props: [
        prop(
          'children',
          'ReactNode',
          '—',
          "The content displayed inside the component.",
          "Содержимое компонента.",
          true,
        ),
        prop(
          'separator',
          'ReactNode',
          "'/'",
          "The content between breadcrumb items.",
          "Разделитель между пунктами навигации.",
        ),
        prop(
          'aria-label',
          'string',
          "'Breadcrumb'",
          "An accessible name for the component.",
          "Доступное имя компонента.",
        ),
      ],
    },
  ],
  Link: [
    {
      name: 'Link',
      props: [
        prop(
          'href',
          'string',
          '—',
          "The URL or page anchor to navigate to.",
          "Адрес страницы, файла или раздела для перехода.",
        ),
        prop(
          'as',
          'ElementType',
          "'a'",
          "The HTML element or component to render.",
          "HTML-элемент или компонент для отображения.",
        ),
        prop(
          'target',
          "'_self' | '_blank'",
          "'_self'",
          "Where the link destination opens.",
          "Где открывается ссылка.",
        ),
        prop(
          'rel',
          'string',
          '—',
          "The relationship between this page and the link destination.",
          "Связь текущей страницы с адресатом ссылки.",
        ),
        prop(
          'children',
          'ReactNode',
          '—',
          "The content displayed inside the component.",
          "Содержимое компонента.",
        ),
      ],
    },
  ],
  ScrollArea: [
    {
      name: 'ScrollArea',
      props: [
        prop(
          'orientation',
          "'vertical' | 'horizontal' | 'both'",
          "'vertical'",
          "The horizontal or vertical orientation.",
          "Горизонтальное или вертикальное расположение.",
        ),
        prop(
          'type',
          "'hover' | 'scroll' | 'auto' | 'always'",
          "'hover'",
          "Controls when scrollbars appear.",
          "Определяет, когда видны полосы прокрутки.",
        ),
        prop(
          'scrollHideDelay',
          'number',
          '600',
          "Delay before hiding scrollbars, in milliseconds.",
          "Задержка скрытия полос прокрутки в миллисекундах.",
        ),
        prop(
          'dir',
          "'ltr' | 'rtl'",
          "'ltr'",
          "Text direction and scrollbar placement.",
          "Направление текста и расположение полос прокрутки.",
        ),
        prop(
          'viewportProps',
          'ScrollAreaViewportProps',
          '{ tabIndex: 0 }',
          "HTML attributes and handlers for the scrollable viewport.",
          "HTML-атрибуты и обработчики области прокрутки.",
        ),
        prop(
          'viewportRef',
          'Ref<HTMLDivElement>',
          '—',
          "A reference to the scrollable viewport.",
          "Ссылка на прокручиваемый элемент.",
        ),
        prop(
          'aria-label / aria-labelledby',
          'string',
          '—',
          "An accessible name or the id of its label.",
          "Доступное имя или id элемента с подписью.",
        ),
        prop(
          'style / className',
          'CSSProperties / string',
          '—',
          "Inline styles or a CSS class.",
          "Встроенные стили или CSS-класс.",
        ),
      ],
    },
    {
      name: 'CSS variables',
      props: [
        prop(
          '--rkr-scrollbar-size',
          'CSS length',
          '10px',
          'Scrollbar thickness',
          'Толщина полосы прокрутки',
        ),
        prop(
          '--rkr-scrollbar-thumb-color',
          'CSS color',
          'var(--rkr-color-text-tertiary)',
          'Thumb color',
          'Цвет бегунка',
        ),
        prop(
          '--rkr-scrollbar-thumb-hover-color',
          'CSS color',
          'var(--rkr-color-text-secondary)',
          'Thumb hover color',
          'Цвет бегунка при наведении',
        ),
        prop(
          '--rkr-scrollbar-track-color',
          'CSS color',
          'transparent',
          'Track color',
          'Цвет дорожки',
        ),
      ],
    },
  ],
  Button: [
    {
      name: 'Button',
      props: [
        variant,
        prop(
          'radius',
          "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",
          "'sm'",
          'Corner radius',
          'Параметр скругления',
        ),
        prop(
          'size',
          "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg' | 'icon-xl'",
          "'md'",
          "Controls the component size.",
          "Задаёт размер компонента.",
        ),
        prop(
          'aria-label',
          'string',
          '—',
          "An accessible name for the component.",
          "Доступное имя компонента.",
        ),
        disabled,
        prop(
          'loading',
          'boolean',
          'false',
          "Shows a loading indicator and prevents repeated clicks.",
          "Показывает индикатор загрузки и блокирует повторное нажатие.",
        ),
        prop(
          'type',
          "'button' | 'submit' | 'reset'",
          "'button'",
          "Controls whether the button submits or resets a form.",
          "Задаёт поведение кнопки в форме: действие, отправка или сброс.",
        ),
      ],
    },
  ],
  Input: [
    {
      name: 'Input',
      props: [
        prop(
          'type',
          'HTMLInputTypeAttribute',
          "'text'",
          "Selects the native input type, such as text, email or password.",
          "Задаёт тип поля, например text, email или password.",
        ),
        ...textProps,
      ],
    },
  ],
  Textarea: [
    {
      name: 'Textarea',
      props: [
        prop(
          'rows',
          'number',
          '4',
          "The number of visible text rows.",
          "Количество видимых строк текста.",
        ),
        ...textProps,
      ],
    },
  ],
  Checkbox: [{ name: 'Checkbox', props: checkedProps }],
  Switch: [{ name: 'Switch', props: checkedProps }],
  RadioGroup: [
    {
      name: 'RadioGroup',
      props: [
        prop(
          'options',
          'readonly RadioOption[]',
          '—',
          "Options with a value, label and optional disabled state.",
          "Варианты со значением, подписью и необязательным disabled.",
          true,
        ),
        prop(
          'value / defaultValue',
          'string',
          '—',
          "Controlled or initial value.",
          "Управляемое или начальное значение.",
        ),
        prop(
          'onValueChange',
          '(value: string) => void',
          '—',
          "Called with the updated value.",
          "Получает новое значение.",
        ),
        prop(
          'orientation',
          "'horizontal' | 'vertical'",
          "'vertical'",
          "The horizontal or vertical orientation.",
          "Горизонтальное или вертикальное расположение.",
        ),
        name,
        disabled,
        required,
        invalid,
      ],
    },
  ],
  Select: [
    {
      name: 'Select',
      props: [
        prop(
          'children',
          'option | optgroup elements',
          '—',
          "The content displayed inside the component.",
          "Содержимое компонента.",
          true,
        ),
        ...textProps.filter((item) => item.name !== 'readOnly'),
        prop(
          'multiple',
          'boolean',
          'false',
          "Allows selecting several options.",
          "Разрешает выбор нескольких вариантов.",
        ),
      ],
    },
  ],
  Slider: [
    {
      name: 'Slider',
      props: [
        prop(
          'value / defaultValue',
          'string | number',
          'Native midpoint',
          "Controlled or initial value.",
          "Управляемое или начальное значение.",
        ),
        prop(
          'onChange',
          'ChangeEventHandler<HTMLInputElement>',
          '—',
          "Called when the field value changes.",
          "Вызывается при изменении значения поля.",
        ),
        prop('min', 'number | string', '0', "The minimum allowed value.", "Минимально допустимое значение."),
        prop(
          'max',
          'number | string',
          '100',
          "The maximum allowed value.",
          "Максимально допустимое значение.",
        ),
        prop(
          'step',
          'number | string',
          '1',
          "The interval between allowed values.",
          "Шаг изменения значения.",
        ),
        name,
        disabled,
        invalid,
      ],
    },
  ],
  Field: [
    {
      name: 'Field',
      props: [
        prop(
          'label',
          'ReactNode',
          '—',
          "The visible field label.",
          "Видимая подпись поля.",
          true,
        ),
        prop(
          'description',
          'ReactNode',
          '—',
          "Additional text below the label or title.",
          "Дополнительный текст под подписью или заголовком.",
        ),
        prop(
          'error',
          'ReactNode',
          '—',
          "The error message displayed below the field.",
          "Сообщение об ошибке под полем.",
        ),
        prop(
          'controlId',
          'string',
          'Generated id',
          "The control id that connects the field to its label.",
          "id поля для связи с подписью.",
        ),
        disabled,
        required,
        invalid,
      ],
    },
  ],
  FormControl: [
    {
      name: 'FormControl',
      props: [
        disabled,
        required,
        invalid,
        prop(
          'children',
          'ReactNode',
          '—',
          "The content displayed inside the component.",
          "Содержимое компонента.",
        ),
      ],
    },
  ],
  Text: [
    {
      name: 'Text',
      props: [
        prop(
          'as',
          "'span' | 'p' | 'div' | 'small' | 'strong' | 'em'",
          "'span'",
          "The HTML element or component to render.",
          "HTML-элемент или компонент для отображения.",
        ),
        prop(
          'size',
          "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          "'md'",
          "Controls the component size.",
          "Задаёт размер компонента.",
        ),
        prop(
          'tone',
          "'primary' | 'secondary' | 'tertiary'",
          "'primary'",
          "Changes the text color.",
          "Задаёт цвет текста.",
        ),
      ],
    },
  ],
  Heading: [
    {
      name: 'Heading',
      props: [
        prop(
          'level',
          '1 | 2 | 3 | 4 | 5 | 6',
          '2',
          "The heading level, from h1 to h6.",
          "Уровень заголовка от h1 до h6.",
        ),
        prop(
          'size',
          "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
          "'2xl'",
          "Controls the component size.",
          "Задаёт размер компонента.",
        ),
      ],
    },
  ],
  Box: [
    {
      name: 'Box',
      props: [
        prop(
          'as',
          'HTML element name',
          "'div'",
          "The HTML element or component to render.",
          "HTML-элемент или компонент для отображения.",
        ),
        { ...padding, defaultValue: 'CSS default' },
        ...paddingAxes,
      ],
    },
  ],
  Flex: [
    {
      name: 'Flex',
      props: [
        prop(
          'as',
          'HTML element name',
          "'div'",
          "The HTML element or component to render.",
          "HTML-элемент или компонент для отображения.",
        ),
        prop(
          'direction',
          "'row' | 'column' | 'row-reverse' | 'column-reverse'",
          'CSS default',
          "The axis and order of items.",
          "Направление и порядок элементов.",
        ),
        prop(
          'align',
          "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
          'CSS default',
          "Aligns content within its container or relative to its trigger.",
          "Выравнивает содержимое в контейнере или относительно элемента открытия.",
        ),
        prop(
          'justify',
          "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
          'CSS default',
          "Aligns items along the main axis.",
          "Выравнивает элементы по основной оси.",
        ),
        prop(
          'gap',
          'number | string',
          'CSS default',
          "The spacing between items.",
          "Расстояние между элементами.",
        ),
        prop(
          'wrap',
          'boolean',
          'CSS default',
          "Allows items to wrap onto another line.",
          "Разрешает перенос элементов на новую строку.",
        ),
      ],
    },
  ],
  Grid: [
    {
      name: 'Grid',
      props: [
        prop(
          'as',
          'HTML element name',
          "'div'",
          "The HTML element or component to render.",
          "HTML-элемент или компонент для отображения.",
        ),
        prop(
          'columns / rows',
          'number | string',
          'CSS default',
          "The number or CSS definition of grid tracks.",
          "Количество или CSS-описание столбцов и строк.",
        ),
        prop(
          'gap / rowGap / columnGap',
          'number | string',
          'CSS default',
          "The spacing between rows and columns.",
          "Расстояние между строками и столбцами.",
        ),
        prop(
          'align',
          "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
          'CSS default',
          "Aligns content within its container or relative to its trigger.",
          "Выравнивает содержимое в контейнере или относительно элемента открытия.",
        ),
        prop(
          'justify',
          "'start' | 'center' | 'end' | 'stretch'",
          'CSS default',
          "Aligns items along the main axis.",
          "Выравнивает элементы по основной оси.",
        ),
      ],
    },
  ],
  Stack: [
    {
      name: 'Stack',
      props: [
        prop(
          'direction',
          "'row' | 'column' | 'row-reverse' | 'column-reverse'",
          "'column'",
          "The axis and order of items.",
          "Направление и порядок элементов.",
        ),
        prop(
          'gap',
          'number | string',
          '4',
          "The spacing between items.",
          "Расстояние между элементами.",
        ),
        prop(
          'align / justify / wrap',
          'Flex layout props',
          'CSS default',
          "Item alignment and wrapping.",
          "Выравнивание и перенос элементов.",
        ),
      ],
    },
  ],
  Separator: [
    {
      name: 'Separator',
      props: [
        prop(
          'orientation',
          "'horizontal' | 'vertical'",
          "'horizontal'",
          "The horizontal or vertical orientation.",
          "Горизонтальное или вертикальное расположение.",
        ),
        prop(
          'decorative',
          'boolean',
          'false',
          "Hides a decorative separator from screen readers.",
          "Скрывает декоративный разделитель от скринридеров.",
        ),
      ],
    },
  ],
  Badge: [{ name: 'Badge', props: [tone] }],
  Card: [
    {
      name: 'Card',
      props: [
        prop(
          'variant',
          "'outline' | 'filled'",
          "'outline'",
          "Changes the visual appearance of the component.",
          "Задаёт вариант оформления компонента.",
        ),
        { ...padding, defaultValue: '6' },
        ...paddingAxes,
      ],
    },
  ],
  Tabs: [
    {
      name: 'Root',
      props: [
        prop(
          'value / defaultValue',
          'string',
          '—',
          "Controlled or initial value.",
          "Управляемое или начальное значение.",
        ),
        prop(
          'onValueChange',
          '(value: string) => void',
          '—',
          "Called with the updated value.",
          "Получает новое значение.",
        ),
        prop(
          'orientation',
          "'horizontal' | 'vertical'",
          "'horizontal'",
          "The horizontal or vertical orientation.",
          "Горизонтальное или вертикальное расположение.",
        ),
        prop(
          'activationMode',
          "'automatic' | 'manual'",
          "'automatic'",
          "Whether focus activates a tab immediately or waits for confirmation.",
          "Активировать вкладку при фокусе или после подтверждения.",
        ),
      ],
    },
    {
      name: 'List',
      props: [
        prop(
          'aria-label',
          'string',
          '—',
          "An accessible name for the component.",
          "Доступное имя компонента.",
          true,
        ),
        prop(
          'loop',
          'boolean',
          'true',
          "Moves focus from the last item back to the first.",
          "Переводит фокус с последнего пункта на первый.",
        ),
      ],
    },
    {
      name: 'Trigger / Content',
      props: [
        prop(
          'value',
          'string',
          '—',
          'Value',
          'Значение',
          true,
        ),
      ],
    },
  ],
  Accordion: [
    {
      name: 'Root',
      props: [
        prop(
          'type',
          "'single' | 'multiple'",
          '—',
          "Allows one or several sections to be open.",
          "Разрешает раскрывать один или несколько разделов.",
          true,
        ),
        prop(
          'value / defaultValue',
          'string | string[]',
          '—',
          "Controlled or initial value.",
          "Управляемое или начальное значение.",
        ),
        prop(
          'onValueChange',
          '(value: string | string[]) => void',
          '—',
          "Called with the updated value.",
          "Получает новое значение.",
        ),
        prop(
          'collapsible',
          'boolean',
          'false',
          "Allows all accordion sections to be closed.",
          "Разрешает закрыть все разделы аккордеона.",
        ),
        disabled,
      ],
    },
    {
      name: 'Item',
      props: [
        prop(
          'value',
          'string',
          '—',
          'Value',
          'Значение',
          true,
        ),
        disabled,
      ],
    },
    { name: 'Header / Trigger / Content', props: [asChild] },
  ],
  Dialog: modalApi,
  Drawer: modalApi.map((part) =>
    part.name === 'Content' ?
      {
        ...part,
        props: [
          prop(
            'side',
            "'left' | 'right' | 'top' | 'bottom'",
            "'right'",
            "The side where the panel appears.",
            "Сторона размещения панели.",
          ),
          ...part.props,
        ],
      }
    : part,
  ),
  Popover: [
    {
      name: 'Root',
      props: [
        ...openProps,
        prop(
          'modal',
          'boolean',
          'false',
          "Traps focus and blocks interaction with the background.",
          "Удерживает фокус и блокирует взаимодействие с фоном.",
        ),
      ],
    },
    { name: 'Trigger / Anchor / Close', props: [asChild] },
    { name: 'Content', props: positionProps },
  ],
  Tooltip: [
    {
      name: 'Provider',
      props: [
        prop(
          'delayDuration',
          'number',
          '700',
          "Delay before showing the tooltip, in milliseconds.",
          "Задержка появления подсказки в миллисекундах.",
        ),
        prop(
          'skipDelayDuration',
          'number',
          '300',
          "The interval when another tooltip opens without a delay.",
          "Интервал, в котором следующая подсказка открывается без задержки.",
        ),
      ],
    },
    { name: 'Root', props: openProps },
    { name: 'Trigger', props: [asChild] },
    {
      name: 'Content',
      props: positionProps.map((item) =>
        item.name === 'side' ? { ...item, defaultValue: "'top'" } : item,
      ),
    },
  ],
  DropdownMenu: [
    { name: 'Root', props: openProps },
    { name: 'Trigger', props: [asChild, disabled] },
    { name: 'Content', props: positionProps },
    {
      name: 'Item',
      props: [
        disabled,
        prop(
          'onSelect',
          '(event: Event) => void',
          '—',
          "Called when a menu item is selected.",
          "Вызывается при выборе пункта меню.",
        ),
      ],
    },
    { name: 'Label / Separator', props: [asChild] },
  ],
  Alert: [
    {
      name: 'Alert',
      props: [
        tone,
        prop(
          'title',
          'ReactNode',
          '—',
          "The message title.",
          "Заголовок сообщения.",
        ),
        prop(
          'role',
          "'status' | 'alert'",
          'None',
          "How screen readers announce the message.",
          "Как скринридеры объявляют сообщение.",
        ),
      ],
    },
  ],
  Toast: [
    {
      name: 'ToastProvider',
      props: [
        prop(
          'width',
          'number | string',
          "'24rem'",
          "The toast width as pixels or a CSS length.",
          "Ширина уведомления в пикселях или CSS-единицах.",
        ),
        prop(
          'maxVisible',
          'number',
          '3',
          "The maximum number of visible notifications.",
          "Максимальное количество видимых уведомлений.",
        ),
        prop(
          'duration',
          'number',
          '5000',
          "Time before automatic dismissal, in milliseconds.",
          "Время до автоматического закрытия в миллисекундах.",
        ),
        prop(
          'closeLabel',
          'string',
          "'Dismiss notification'",
          "The accessible name of the close button.",
          "Доступное имя кнопки закрытия.",
        ),
        prop(
          'viewportLabel',
          'string',
          "'Notifications'",
          "The accessible name of the notification region.",
          "Доступное имя области уведомлений.",
        ),
      ],
    },
    {
      name: 'useToast()',
      props: [
        prop(
          'toast',
          '(message: ToastMessage) => number',
          '—',
          "Adds a notification and returns its id.",
          "Добавляет уведомление и возвращает его id.",
        ),
        prop(
          'dismiss',
          '(id: number) => void',
          '—',
          "Closes a notification by its id.",
          "Закрывает уведомление по id.",
        ),
        prop(
          'dismissAll',
          '() => void',
          '—',
          "Closes all notifications.",
          "Закрывает все уведомления.",
        ),
      ],
    },
    {
      name: 'ToastMessage',
      props: [
        prop(
          'title',
          'ReactNode',
          '—',
          "The message title.",
          "Заголовок сообщения.",
          true,
        ),
        prop(
          'description',
          'ReactNode',
          '—',
          "Additional text below the label or title.",
          "Дополнительный текст под подписью или заголовком.",
        ),
        prop(
          'duration',
          'number',
          'Provider duration',
          "Time before automatic dismissal, in milliseconds.",
          "Время до автоматического закрытия в миллисекундах.",
        ),
        prop(
          'type',
          "'foreground' | 'background'",
          "'background'",
          "Controls how screen readers announce the notification.",
          "Определяет порядок объявления уведомления скринридером.",
        ),
      ],
    },
  ],
  Spinner: [{ name: 'Spinner', props: [size] }],
  Progress: [
    {
      name: 'Progress',
      props: [
        prop(
          'value',
          'number',
          'Indeterminate',
          'Value',
          'Значение',
        ),
        prop(
          'min',
          'number',
          '0',
          "The minimum allowed value.",
          "Минимально допустимое значение.",
        ),
        prop(
          'max',
          'number',
          '100',
          "The maximum allowed value.",
          "Максимально допустимое значение.",
        ),
        prop(
          'aria-label',
          'string',
          '—',
          "An accessible name for the component.",
          "Доступное имя компонента.",
          true,
        ),
      ],
    },
  ],
  Skeleton: [
    {
      name: 'Skeleton',
      props: [
        prop(
          'shape',
          "'rectangle' | 'circle' | 'text'",
          "'rectangle'",
          "The placeholder shape.",
          "Форма заглушки.",
        ),
        prop(
          'animated',
          'boolean',
          'true',
          "Enables the loading animation.",
          "Включает анимацию загрузки.",
        ),
      ],
    },
  ],
  Avatar: [
    {
      name: 'Avatar',
      props: [
        prop(
          'alt',
          'string',
          '—',
          "Text describing the image. Also used to generate initials.",
          "Описание изображения; также используется для инициалов.",
          true,
        ),
        prop(
          'src',
          'string',
          '—',
          "The profile image URL.",
          "Адрес изображения профиля.",
        ),
        prop(
          'fallback',
          'ReactNode',
          'Initials',
          "Content shown when the image is unavailable.",
          "Содержимое вместо недоступного изображения.",
        ),
        size,
        prop(
          'imageProps',
          'img attributes except src/alt/children',
          '—',
          "Additional HTML attributes for the image.",
          "Дополнительные HTML-атрибуты изображения.",
        ),
      ],
    },
  ],
  Table: [
    {
      name: 'Root / Caption / Head / Body / Foot / Row / Cell',
      props: [
        prop(
          'Native HTML props',
          'table / caption / thead / tbody / tfoot / tr / td',
          '—',
          "Standard HTML attributes for the corresponding element.",
          "Стандартные HTML-атрибуты соответствующего элемента.",
        ),
      ],
    },
    {
      name: 'Header',
      props: [
        prop(
          'scope',
          "'col' | 'row' | 'colgroup' | 'rowgroup'",
          "'col'",
          "Whether the header describes a row or a column.",
          "Строка или столбец, к которым относится заголовок.",
        ),
      ],
    },
  ],
  Pagination: [
    {
      name: 'Pagination',
      props: [
        prop(
          'page',
          'number',
          '—',
          "The currently selected page number.",
          "Номер текущей страницы.",
          true,
        ),
        prop(
          'pageCount',
          'number',
          '—',
          "The total number of pages.",
          "Общее количество страниц.",
          true,
        ),
        prop(
          'onPageChange',
          '(page: number) => void',
          '—',
          "Called with the requested page number.",
          "Получает номер выбранной страницы.",
          true,
        ),
        prop(
          'siblingCount',
          'number',
          '1',
          "The number of page links beside the current page.",
          "Количество ссылок рядом с текущей страницей.",
        ),
        disabled,
        prop(
          'previousLabel / nextLabel',
          'string',
          'English labels',
          "Labels for previous and next page controls.",
          "Подписи переходов на предыдущую и следующую страницу.",
        ),
        prop(
          'getPageLabel',
          '(page: number) => string',
          '`Page ${page}`',
          "Returns an accessible label for a page number.",
          "Возвращает доступное имя страницы по её номеру.",
        ),
      ],
    },
  ],
};
