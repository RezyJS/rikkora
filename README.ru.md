<p align="center">
  <img src=".github/assets/readme-cover.svg" alt="Rikkora UI — библиотека React-компонентов с Риккой" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-5B5FD3?style=flat-square" alt="Версия 0.1.0" />
  <img src="https://img.shields.io/badge/React-18%20%2F%2019-191922?style=flat-square&amp;logo=react&amp;logoColor=white" alt="React 18 и 19" />
  <img src="https://img.shields.io/badge/TypeScript-typed-191922?style=flat-square&amp;logo=typescript&amp;logoColor=white" alt="Написано на TypeScript" />
</p>

<p align="center">
  <a href="#компоненты">Компоненты</a> · <a href="#использование">Использование</a> · <a href="#установка">Установка</a> · <a href="README.md">English</a>
</p>

Rikkora UI — библиотека React-компонентов на TypeScript с CSS Modules. В Playground можно посмотреть API компонентов, а по ссылкам ниже — как они устроены внутри.

## Компоненты

| Компонент | Возможности |
| --- | --- |
| [Button](packages/ui/src/components/Button/Button.tsx) | Пять вариантов, три размера, состояния загрузки и недоступности |
| [IconButton](packages/ui/src/components/Button/IconButton.tsx) | Компактная кнопка для иконки с теми же свойствами, что у Button |
| [Input](packages/ui/src/components/Input/Input.tsx) | Нативные атрибуты, управляемое и неуправляемое значение, ref |
| [Checkbox](packages/ui/src/components/Checkbox/Checkbox.tsx) | Нативный чекбокс с управляемым и неуправляемым состоянием |
| [Textarea](packages/ui/src/components/Textarea/Textarea.tsx) | Нативное многострочное поле с изменением размера по обеим осям |
| [Flex](packages/ui/src/components/Flex/Flex.tsx) | Flex-раскладка с выравниванием, переносом и токенами отступов |
| [Grid](packages/ui/src/components/Grid/Grid.tsx) | Grid-раскладка с настройкой строк, столбцов, выравнивания и промежутков |

## Установка

Установка пока недоступна: пакет ещё не опубликован в npm.

## Использование

Подключите стили один раз в точке входа приложения:

```tsx
// main.tsx
import '@rikkora/ui/styles.css';
```

Затем импортируйте компоненты там, где они нужны:

```tsx
import { Button, Flex, Input } from '@rikkora/ui';

export function Example() {
  return (
    <Flex direction='column' gap={4}>
      <label>
        Имя
        <Input name='name' placeholder='Введите имя' />
      </label>
      <Button variant='primary'>Продолжить</Button>
    </Flex>
  );
}
```

## Светлая и тёмная темы

По умолчанию используется светлая тема.

Для явного выбора задайте `data-rkr-theme` на корне страницы или контейнере. `violet-smoke-light` — светлая тема, `violet-smoke` — тёмная:

```html
<html data-rkr-theme="violet-smoke-light">
```

```html
<html data-rkr-theme="violet-smoke">
```
