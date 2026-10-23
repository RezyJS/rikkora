import type { ComponentName } from '../../../components/Showcase/componentNames';
import type { Localized } from './types';
import { localized } from './builders';

export const categories = [
  {
    id: 'foundation',
    title: localized('Foundation', 'Основа'),
    names: ['Text', 'Heading', 'Separator', 'Badge', 'Card'],
  },
  {
    id: 'layout',
    title: localized('Layout', 'Композиция'),
    names: ['Box', 'Flex', 'Grid', 'Stack', 'ScrollArea'],
  },
  {
    id: 'forms',
    title: localized('Forms', 'Формы'),
    names: [
      'Button',
      'Input',
      'Textarea',
      'Checkbox',
      'Switch',
      'RadioGroup',
      'Select',
      'Slider',
      'Field',
      'FormControl',
    ],
  },
  {
    id: 'navigation',
    title: localized('Navigation', 'Навигация'),
    names: ['Link', 'ButtonLink', 'Breadcrumbs', 'Tabs', 'Accordion', 'Pagination'],
  },
  {
    id: 'overlays',
    title: localized('Overlays', 'Оверлеи'),
    names: ['Dialog', 'Drawer', 'Popover', 'Tooltip', 'DropdownMenu'],
  },
  {
    id: 'feedback',
    title: localized('Feedback', 'Обратная связь'),
    names: ['Alert', 'Toast', 'Spinner', 'Progress', 'Skeleton'],
  },
  {
    id: 'data',
    title: localized('Data display', 'Данные'),
    names: ['Avatar', 'Table'],
  },
] satisfies { id: string; title: Localized; names: ComponentName[] }[];

export const summaries: Record<ComponentName, Localized> = {
  ButtonLink: localized("A navigation link with button styling. Supports URLs, anchors and router links.", "Ссылка с оформлением кнопки для перехода по адресу, к разделу страницы или через роутер."),
  Breadcrumbs: localized("Shows the path to the current page and links to parent sections.", "Показывает путь к текущей странице со ссылками на родительские разделы."),
  Link: localized(
    "A link to a page, file or section. Supports native anchors and router components.",
    "Ссылка для перехода на страницу, к файлу или разделу. Поддерживает компоненты роутера.",
  ),
  ScrollArea: localized(
    "A scrollable container with custom scrollbars and native scrolling.",
    "Контейнер с прокруткой и настраиваемыми полосами прокрутки. Сохраняет нативное управление.",
  ),
  Button: localized(
    "A button for actions and form submission. Supports text, icons and a loading state.",
    "Кнопка для действий и отправки форм. Поддерживает текст, иконки и состояние загрузки.",
  ),
  Input: localized(
    "A field for entering text, numbers and other form data. Supports standard HTML input types.",
    "Поле для ввода текста, чисел и других данных в формах. Поддерживает стандартные типы HTML input.",
  ),
  Checkbox: localized(
    "A checkbox for selecting an option or several independent options.",
    "Флажок для выбора одного или нескольких независимых параметров.",
  ),
  Textarea: localized(
    "A field for entering and editing multiline text.",
    "Поле для ввода и редактирования многострочного текста.",
  ),
  Flex: localized(
    "Arranges elements in a row or column with alignment, spacing and wrapping.",
    "Располагает элементы в строку или столбец с настройками выравнивания, отступов и переноса.",
  ),
  Grid: localized(
    "Arranges elements in a grid with configurable rows, columns and spacing.",
    "Располагает элементы в сетке с настройками строк, столбцов и расстояния между ячейками.",
  ),
  Text: localized(
    "Displays text with configurable size and color.",
    "Выводит текст с настройками размера и цвета.",
  ),
  Heading: localized(
    "Displays a heading. Its visual size is independent of the heading level.",
    "Выводит заголовок. Визуальный размер настраивается независимо от уровня заголовка.",
  ),
  Box: localized(
    "A container with configurable padding and a choice of HTML element.",
    "Контейнер с настройкой внутренних отступов и выбором HTML-элемента.",
  ),
  Stack: localized(
    "Arranges elements vertically with spacing between them.",
    "Располагает элементы друг под другом с заданным расстоянием между ними.",
  ),
  Separator: localized(
    "Separates content with a horizontal or vertical line.",
    "Разделяет содержимое горизонтальной или вертикальной линией.",
  ),
  Badge: localized(
    "A compact label for a status, category or count.",
    "Компактная метка для статуса, категории или количества.",
  ),
  Card: localized(
    "Groups related content in a container with a border or background.",
    "Объединяет связанное содержимое в контейнере с границей или фоном.",
  ),
  Switch: localized(
    "A switch for turning a setting on or off.",
    "Переключатель для включения и выключения настройки.",
  ),
  RadioGroup: localized(
    "A group of options with a single selection.",
    "Группа переключателей для выбора одного варианта из нескольких.",
  ),
  Select: localized(
    "A dropdown list for selecting one or more options. Uses the native browser control.",
    "Выпадающий список для выбора одного или нескольких вариантов. Использует нативный элемент браузера.",
  ),
  Slider: localized(
    "A slider for selecting a numeric value within a range.",
    "Ползунок для выбора числового значения в заданном диапазоне.",
  ),
  Field: localized(
    "Combines a control with its label, description and error message.",
    "Объединяет поле ввода с подписью, описанием и сообщением об ошибке.",
  ),
  FormControl: localized(
    "Shares disabled, required and error states across related fields.",
    "Задаёт общее состояние disabled, required и ошибки для группы полей.",
  ),
  Tabs: localized(
    "Switches between content panels using tabs.",
    "Переключает панели содержимого с помощью вкладок.",
  ),
  Dialog: localized(
    "A modal window above the page that blocks interaction with the background.",
    "Модальное окно поверх страницы, которое блокирует взаимодействие с фоном.",
  ),
  Popover: localized(
    "Shows additional content in a panel next to the trigger.",
    "Показывает дополнительное содержимое в панели рядом с элементом открытия.",
  ),
  Tooltip: localized(
    "Shows a short hint on hover or keyboard focus.",
    "Показывает короткую подсказку при наведении или фокусе с клавиатуры.",
  ),
  DropdownMenu: localized(
    "A dropdown menu of actions with keyboard navigation.",
    "Выпадающее меню действий с управлением с клавиатуры.",
  ),
  Accordion: localized(
    "Displays sections that can be expanded and collapsed.",
    "Показывает разделы, которые можно раскрывать и сворачивать.",
  ),
  Drawer: localized(
    "A panel that opens from an edge of the screen. Supports the same focus behavior as Dialog.",
    "Панель, которая выдвигается от края экрана. Управляет фокусом так же, как Dialog.",
  ),
  Alert: localized(
    "Displays a message inside the page, with an optional title.",
    "Выводит сообщение внутри страницы с необязательным заголовком.",
  ),
  Toast: localized(
    "Shows temporary notifications about actions and their results.",
    "Показывает временные уведомления о действиях и их результатах.",
  ),
  Spinner: localized(
    "An animated indicator for an operation in progress.",
    "Анимированный индикатор выполнения операции.",
  ),
  Progress: localized(
    "Shows progress toward completion. Supports determinate and indeterminate states.",
    "Показывает ход выполнения задачи. Поддерживает определённый и неопределённый прогресс.",
  ),
  Skeleton: localized(
    "A placeholder that reserves space for content while it loads.",
    "Заглушка, которая сохраняет место для содержимого во время загрузки.",
  ),
  Avatar: localized(
    "Displays a profile image, with initials or custom content as a fallback.",
    "Показывает изображение профиля, инициалы или заданную замену.",
  ),
  Table: localized(
    "Displays tabular data with headers, rows and a caption.",
    "Выводит табличные данные с заголовками, строками и подписью.",
  ),
  Pagination: localized(
    "Provides navigation between pages and highlights the current page.",
    "Позволяет переключать страницы и выделяет текущую.",
  ),
};

export const sourceFolders: Record<string, ComponentName[]> = {
  'Button/ButtonLink.tsx': ['ButtonLink'],
  'Foundation/Text.tsx': ['Text'],
  'Foundation/Heading.tsx': ['Heading'],
  'Foundation/Box.tsx': ['Box'],
  'Foundation/Stack.tsx': ['Stack'],
  'Foundation/Separator.tsx': ['Separator'],
  'Foundation/Badge.tsx': ['Badge'],
  'Foundation/Card.tsx': ['Card'],
  'Controls/Switch.tsx': ['Switch'],
  'Controls/RadioGroup.tsx': ['RadioGroup'],
  'Controls/Select.tsx': ['Select'],
  'Controls/Slider.tsx': ['Slider'],
  'Field/Field.tsx': ['Field'],
  'Field/FormControl.tsx': ['FormControl'],
  'Navigation/Tabs.tsx': ['Tabs'],
  'Navigation/Accordion.tsx': ['Accordion'],
  'Feedback/Alert.tsx': ['Alert'],
  'Feedback/Spinner.tsx': ['Spinner'],
  'Feedback/Progress.tsx': ['Progress'],
  'Feedback/Skeleton.tsx': ['Skeleton'],
  'Feedback/Avatar.tsx': ['Avatar'],
  'Data/Table.tsx': ['Table'],
  'Data/Pagination.tsx': ['Pagination'],
  'Overlays/DialogPrimitives.tsx': ['Dialog'],
  'Overlays/Drawer.tsx': ['Drawer'],
  'Toast/Toast.tsx': ['Toast'],
};
