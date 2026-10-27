import type { ComponentDoc, Localized } from './types';
import type { ComponentName } from './componentNames';
import { textDoc } from './components/text';
import { headingDoc } from './components/heading';
import { separatorDoc } from './components/separator';
import { badgeDoc } from './components/badge';
import { cardDoc } from './components/card';
import { boxDoc } from './components/box';
import { flexDoc } from './components/flex';
import { gridDoc } from './components/grid';
import { stackDoc } from './components/stack';
import { scrollAreaDoc } from './components/scroll-area';
import { buttonDoc } from './components/button';
import { toggleButtonDoc } from './components/toggle-button';
import { buttonGroupDoc } from './components/button-group';
import { splitButtonDoc } from './components/split-button';
import { confirmButtonDoc } from './components/confirm-button';
import { holdToConfirmDoc } from './components/hold-to-confirm';
import { inputDoc } from './components/input';
import { textareaDoc } from './components/textarea';
import { checkboxDoc } from './components/checkbox';
import { switchDoc } from './components/switch';
import { radioGroupDoc } from './components/radio-group';
import { selectDoc } from './components/select';
import { sliderDoc } from './components/slider';
import { fieldDoc } from './components/field';
import { formControlDoc } from './components/form-control';
import { linkDoc } from './components/link';
import { buttonLinkDoc } from './components/button-link';
import { breadcrumbsDoc } from './components/breadcrumbs';
import { tabsDoc } from './components/tabs';
import { accordionDoc } from './components/accordion';
import { paginationDoc } from './components/pagination';
import { dialogDoc } from './components/dialog';
import { drawerDoc } from './components/drawer';
import { popoverDoc } from './components/popover';
import { tooltipDoc } from './components/tooltip';
import { dropdownMenuDoc } from './components/dropdown-menu';
import { alertDoc } from './components/alert';
import { toastDoc } from './components/toast';
import { spinnerDoc } from './components/spinner';
import { progressDoc } from './components/progress';
import { skeletonDoc } from './components/skeleton';
import { avatarDoc } from './components/avatar';
import { tableDoc } from './components/table';

export const categories: { id: string; title: Localized; names: ComponentName[] }[] = [
  {
    "id": "foundation",
    "title": {
      "en": "Foundation",
      "ru": "Основа"
    },
    "names": [
      "Text",
      "Heading",
      "Separator",
      "Badge",
      "Card"
    ]
  },
  {
    "id": "layout",
    "title": {
      "en": "Layout",
      "ru": "Композиция"
    },
    "names": [
      "Box",
      "Flex",
      "Grid",
      "Stack",
      "ScrollArea"
    ]
  },
  {
    "id": "forms",
    "title": {
      "en": "Forms",
      "ru": "Формы"
    },
    "names": [
      "Button",
      "ToggleButton",
      "ButtonGroup",
      "SplitButton",
      "ConfirmButton",
      "HoldToConfirm",
      "Input",
      "Textarea",
      "Checkbox",
      "Switch",
      "RadioGroup",
      "Select",
      "Slider",
      "Field",
      "FormControl"
    ]
  },
  {
    "id": "navigation",
    "title": {
      "en": "Navigation",
      "ru": "Навигация"
    },
    "names": [
      "Link",
      "ButtonLink",
      "Breadcrumbs",
      "Tabs",
      "Accordion",
      "Pagination"
    ]
  },
  {
    "id": "overlays",
    "title": {
      "en": "Overlays",
      "ru": "Оверлеи"
    },
    "names": [
      "Dialog",
      "Drawer",
      "Popover",
      "Tooltip",
      "DropdownMenu"
    ]
  },
  {
    "id": "feedback",
    "title": {
      "en": "Feedback",
      "ru": "Обратная связь"
    },
    "names": [
      "Alert",
      "Toast",
      "Spinner",
      "Progress",
      "Skeleton"
    ]
  },
  {
    "id": "data",
    "title": {
      "en": "Data display",
      "ru": "Данные"
    },
    "names": [
      "Avatar",
      "Table"
    ]
  }
];

export const componentDocs: ComponentDoc[] = [
  textDoc,
  headingDoc,
  separatorDoc,
  badgeDoc,
  cardDoc,
  boxDoc,
  flexDoc,
  gridDoc,
  stackDoc,
  scrollAreaDoc,
  buttonDoc,
  toggleButtonDoc,
  buttonGroupDoc,
  splitButtonDoc,
  confirmButtonDoc,
  holdToConfirmDoc,
  inputDoc,
  textareaDoc,
  checkboxDoc,
  switchDoc,
  radioGroupDoc,
  selectDoc,
  sliderDoc,
  fieldDoc,
  formControlDoc,
  linkDoc,
  buttonLinkDoc,
  breadcrumbsDoc,
  tabsDoc,
  accordionDoc,
  paginationDoc,
  dialogDoc,
  drawerDoc,
  popoverDoc,
  tooltipDoc,
  dropdownMenuDoc,
  alertDoc,
  toastDoc,
  spinnerDoc,
  progressDoc,
  skeletonDoc,
  avatarDoc,
  tableDoc,
];
export type { Localized, ApiProp, ApiPart, KeyboardEntry, ComponentDoc } from './types';
export { localized } from '../lib/builders';
