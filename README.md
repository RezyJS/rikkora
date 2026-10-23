<p align="center">
  <img src=".github/assets/readme-cover.svg" alt="Rikkora UI with Rikka" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-5B5FD3?style=flat-square" alt="Version 0.1.0" />
  <img src="https://img.shields.io/badge/React-18%20%2F%2019-191922?style=flat-square&amp;logo=react&amp;logoColor=white" alt="React 18 and 19" />
  <img src="https://img.shields.io/badge/TypeScript-typed-191922?style=flat-square&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" />
</p>

# Rikkora UI

React components for application interfaces: forms, page layouts, navigation and notifications. The library includes light and dark themes and supports custom styling through CSS variables.

[Русский](README.ru.md) · [Feedback](https://github.com/RezyJS/rikkora/issues)

## Status

The library is in development. The `@rikkora/ui` package has not been published to npm yet.

React 18 and 19 are supported. TypeScript definitions are included.

## Usage

Import the stylesheet once at your application entry point:

```tsx
import '@rikkora/ui/styles.css';
```

Import the components you need from `@rikkora/ui`:

```tsx
import { Button } from '@rikkora/ui';

export function SaveButton() {
  return <Button variant="primary">Save</Button>;
}
```

## Themes and styling

The default theme is light. For the dark theme, set `data-rkr-theme="violet-smoke"` on the page root or a container:

```html
<html data-rkr-theme="violet-smoke">
```

Use `violet-smoke-light` to select the light theme explicitly.

Override colors, fonts, spacing and corner radii in your own stylesheet. For example, to change the primary color in the dark theme:

```css
[data-rkr-theme="violet-smoke"] {
  --rkr-color-action-primary: #8b5cf6;
  --rkr-color-action-primary-hover: #7c3aed;
}
```

Load your overrides after `@rikkora/ui/styles.css`.

## Feedback

Report bugs and suggest changes in [GitHub Issues](https://github.com/RezyJS/rikkora/issues). Include a small reproduction when reporting a bug.
