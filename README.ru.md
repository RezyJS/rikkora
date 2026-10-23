<p align="center">
  <img src=".github/assets/readme-cover.svg" alt="Rikkora UI с Риккой" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-5B5FD3?style=flat-square" alt="Версия 0.1.0" />
  <img src="https://img.shields.io/badge/React-18%20%2F%2019-191922?style=flat-square&amp;logo=react&amp;logoColor=white" alt="React 18 и 19" />
  <img src="https://img.shields.io/badge/TypeScript-typed-191922?style=flat-square&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" />
</p>

# Rikkora UI

React-компоненты для интерфейсов приложений: формы, компоновка страниц, навигация и уведомления. Библиотека поддерживает светлую и тёмную темы; оформление настраивается через CSS-переменные.

[English](README.md) · [Обратная связь](https://github.com/RezyJS/rikkora/issues)

## Статус

Библиотека в разработке. Пакет `@rikkora/ui` пока не опубликован в npm.

Поддерживаются React 18 и 19. Типы TypeScript входят в пакет.

## Использование

Подключите стили один раз в точке входа приложения:

```tsx
import '@rikkora/ui/styles.css';
```

Импортируйте нужные компоненты из `@rikkora/ui`:

```tsx
import { Button } from '@rikkora/ui';

export function SaveButton() {
  return <Button variant="primary">Сохранить</Button>;
}
```

## Темы и оформление

По умолчанию используется светлая тема. Для тёмной задайте `data-rkr-theme="violet-smoke"` на корне страницы или контейнере:

```html
<html data-rkr-theme="violet-smoke">
```

Для явного выбора светлой темы используйте `violet-smoke-light`.

Цвета, шрифты, отступы и скругления можно переопределить в своих стилях. Например, изменить основной цвет тёмной темы:

```css
[data-rkr-theme="violet-smoke"] {
  --rkr-color-action-primary: #8b5cf6;
  --rkr-color-action-primary-hover: #7c3aed;
}
```

Подключайте свои стили после `@rikkora/ui/styles.css`.

## Обратная связь

Об ошибках и предложениях можно написать в [GitHub Issues](https://github.com/RezyJS/rikkora/issues). Приложите небольшой пример, если сообщаете об ошибке.
