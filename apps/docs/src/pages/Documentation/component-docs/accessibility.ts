import type { ComponentName } from '../../../components/Showcase/componentNames';
import type { KeyboardEntry, Localized } from './types';
import { key, localized } from './builders';

export const nativeLabel = localized(
  "Use Field or aria-label to give the control an accessible name.",
  "Задайте доступное имя поля через Field или aria-label.",
);

const tabKey = key(
  'Tab / Shift + Tab',
  'Moves focus to the next or previous control.',
  'Переводит фокус на следующий или предыдущий контрол.',
);

const activateKey = key(
  'Enter / Space',
  'Activates the focused button.',
  'Активирует кнопку в фокусе.',
);

const modalNotes = [
  localized(
    "Include Dialog.Title and a labelled close button.",
    "Добавьте Dialog.Title и кнопку закрытия с понятной подписью.",
  ),
  localized(
    "The dialog traps focus while open and returns it to the trigger on close.",
    "Окно удерживает фокус внутри и возвращает его на кнопку открытия после закрытия.",
  ),
];

export const notes: Partial<Record<ComponentName, Localized[]>> = {
  Breadcrumbs: [localized("The current page uses aria-current=\"page\". Separators are hidden from screen readers.", "Текущая страница отмечена aria-current=\"page\". Разделители скрыты от скринридеров.")],
  ScrollArea: [
    localized(
      "Name the scroll region with aria-label or aria-labelledby.",
      "Задайте имя области прокрутки через aria-label или aria-labelledby.",
    ),
    localized(
      "Use viewportRef for access to scrollTop, scrollLeft and scrollTo.",
      "Используйте viewportRef для доступа к scrollTop, scrollLeft и scrollTo.",
    ),
  ],
  Button: [
    localized(
      "Provide aria-label for icon-only buttons and aria-pressed for toggle buttons.",
      "Для кнопки без текста задайте aria-label, для переключателя — aria-pressed.",
    ),
  ],
  Field: [
    localized(
      "The control id must match controlId so that the label focuses the correct field.",
      "id поля должен совпадать с controlId, чтобы подпись была связана с нужным полем.",
    ),
  ],
  FormControl: [
    localized(
      "Props set on a field override the state inherited from FormControl.",
      "Свойства самого поля имеют приоритет над состоянием FormControl.",
    ),
  ],
  Dialog: modalNotes,
  Drawer: modalNotes,
  Popover: [
    localized(
      "Give Popover.Content an accessible name with aria-label or aria-labelledby.",
      "Задайте имя Popover.Content через aria-label или aria-labelledby.",
    ),
  ],
  Tooltip: [
    localized(
      "Use Tooltip for text hints. Put links and buttons in Popover instead.",
      "Используйте Tooltip для текстовых подсказок. Ссылки и кнопки размещайте в Popover.",
    ),
  ],
  DropdownMenu: [
    localized(
      "Keyboard navigation skips disabled items",
      "Навигация пропускает неактивные пункты",
    ),
  ],
  Tabs: [
    localized(
      "Give each Trigger and its Content the same value to connect the tab and panel.",
      "Задайте одинаковый value у Trigger и Content, чтобы связать вкладку с её содержимым.",
    ),
  ],
  Accordion: [
    localized(
      "Place Trigger inside Header and choose a heading level that matches the page structure.",
      "Размещайте Trigger внутри Header и выбирайте уровень заголовка по структуре страницы.",
    ),
  ],
  Alert: [
    localized(
      "Use role=\"status\" for routine updates and role=\"alert\" for urgent messages.",
      "Используйте role=\"status\" для обычных уведомлений, role=\"alert\" — для срочных.",
    ),
  ],
  Toast: [
    localized(
      "Timers pause on hover and focus",
      "Таймер приостанавливается при наведении и фокусе",
    ),
    localized(
      "One notification provider per region",
      "Один провайдер на область уведомлений",
    ),
  ],
  Spinner: [
    localized(
      "Spinner is decorative by default. Add loading text to the surrounding status region.",
      "Spinner по умолчанию декоративен. Добавьте текст о загрузке в окружающую область status.",
    ),
  ],
  Progress: [
    localized(
      "Provide aria-label or aria-labelledby",
      "Задайте aria-label или aria-labelledby",
    ),
  ],
  Skeleton: [
    localized(
      "Hidden from screen readers",
      "Скрыт от скринридеров",
    ),
  ],
  Avatar: [
    localized(
      "Provide alternative text in alt",
      "Задайте альтернативный текст в alt",
    ),
  ],
  Table: [
    localized(
      "Use scope=\"row\" for row headers and scope=\"col\" for column headers.",
      "Для заголовков строк задайте scope=\"row\", для заголовков столбцов — scope=\"col\".",
    ),
  ],
  Pagination: [
    localized(
      "Current page: aria-current=\"page\"",
      "Текущая страница: aria-current=\"page\"",
    ),
  ],
  Heading: [
    localized(
      "Keep heading levels in order",
      "Соблюдайте порядок уровней заголовков",
    ),
  ],
  Separator: [
    localized(
      "Decorative lines use decorative",
      "Для декоративных линий задайте decorative",
    ),
  ],
};

export function keyboardFor(component: ComponentName): KeyboardEntry[] {
  switch (component) {
    case 'ScrollArea':
      return [
        tabKey,
        key(
          'Arrow keys / Page Up / Page Down',
          'Scrolls the focused viewport using browser behavior.',
          'Прокручивает viewport в фокусе по правилам браузера.',
        ),
        key(
          'Home / End',
          'Moves toward the start or end using native platform behavior.',
          'Перемещает к началу или концу по правилам платформы.',
        ),
      ];
    case 'Breadcrumbs':
    case 'ButtonLink':
    case 'Link':
      return [
        tabKey,
        key('Enter', 'Follows the focused link.', 'Открывает ссылку в фокусе.'),
      ];
    case 'Button':
      return [tabKey, activateKey];
    case 'Checkbox':
    case 'Switch':
      return [
        tabKey,
        key(
          'Space',
          'Toggles the checked state.',
          'Переключает состояние выбора.',
        ),
      ];
    case 'Input':
    case 'Textarea':
      return [
        tabKey,
        key(
          'Native editing keys',
          'Moves the caret, selects and edits text.',
          'Перемещает курсор, выделяет и редактирует текст.',
        ),
      ];
    case 'Select':
      return [
        tabKey,
        key(
          '↑ / ↓ / typing',
          'Uses the browser native option navigation.',
          'Использует нативную навигацию по вариантам браузера.',
        ),
      ];
    case 'RadioGroup':
      return [
        tabKey,
        key(
          '↑ / ↓ / ← / →',
          'Selects the adjacent enabled option.',
          'Выбирает соседний доступный вариант.',
        ),
        key(
          'Space',
          'Selects the focused option.',
          'Выбирает вариант в фокусе.',
        ),
      ];
    case 'Slider':
      return [
        tabKey,
        key(
          '← / ↓ · → / ↑',
          'Decreases or increases by one step.',
          'Уменьшает или увеличивает на один шаг.',
        ),
        key(
          'Home / End',
          'Moves to the minimum or maximum.',
          'Выбирает минимум или максимум.',
        ),
      ];
    case 'Tabs':
      return [
        tabKey,
        key(
          '← / → or ↑ / ↓',
          'Moves focus along the tab orientation; skips disabled tabs.',
          'Перемещает фокус по ориентации вкладок; пропускает недоступные.',
        ),
        key(
          'Home / End',
          'Focuses the first or last tab.',
          'Переводит фокус на первую или последнюю вкладку.',
        ),
        key(
          'Enter / Space',
          'Activates the focused tab in manual mode.',
          'Активирует вкладку в ручном режиме.',
        ),
      ];
    case 'Accordion':
      return [
        tabKey,
        key(
          'Enter / Space',
          'Expands or collapses an item.',
          'Раскрывает или закрывает пункт.',
        ),
        key(
          '↑ / ↓ · Home / End',
          'Moves between item triggers.',
          'Переводит фокус между триггерами пунктов.',
        ),
      ];
    case 'Dialog':
    case 'Drawer':
      return [
        key(
          'Tab / Shift + Tab',
          'Cycles within modal content.',
          'Перемещает фокус внутри модального содержимого.',
        ),
        key(
          'Escape',
          'Closes the topmost window and restores focus.',
          'Закрывает верхнее окно и возвращает фокус.',
        ),
      ];
    case 'Popover':
      return [
        tabKey,
        key(
          'Escape',
          'Closes the popover and restores trigger focus.',
          'Закрывает popover и возвращает фокус в триггер.',
        ),
      ];
    case 'Tooltip':
      return [
        key(
          'Tab',
          'Focus on the trigger reveals the explanation.',
          'Фокус на триггере показывает пояснение.',
        ),
        key('Escape', 'Dismisses the tooltip.', 'Закрывает подсказку.'),
      ];
    case 'DropdownMenu':
      return [
        key(
          'Enter / Space / ↓',
          'Opens the menu from its trigger.',
          'Открывает меню из триггера.',
        ),
        key(
          '↑ / ↓ · Home / End',
          'Moves between enabled items.',
          'Перемещает фокус между доступными пунктами.',
        ),
        key('Typing', 'Finds a matching item.', 'Ищет подходящий пункт.'),
        key(
          'Enter / Space',
          'Selects the focused item.',
          'Выбирает пункт в фокусе.',
        ),
        key(
          'Escape',
          'Closes the menu and restores focus.',
          'Закрывает меню и возвращает фокус.',
        ),
      ];
    case 'Toast':
      return [
        key(
          'F8',
          'Focuses the notification region.',
          'Переводит фокус в область уведомлений.',
        ),
        tabKey,
        key(
          'Escape',
          'Dismisses the focused toast.',
          'Закрывает уведомление в фокусе.',
        ),
      ];
    case 'Pagination':
      return [tabKey, activateKey];
    default:
      return [];
  }
}
