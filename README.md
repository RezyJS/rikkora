<p align="center">
  <img src=".github/assets/readme-cover.svg" alt="Rikkora UI — a React component library with Rikka" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-5B5FD3?style=flat-square" alt="Version 0.1.0" />
  <img src="https://img.shields.io/badge/React-18%20%2F%2019-191922?style=flat-square&amp;logo=react&amp;logoColor=white" alt="React 18 and 19" />
  <img src="https://img.shields.io/badge/TypeScript-typed-191922?style=flat-square&amp;logo=typescript&amp;logoColor=white" alt="Written in TypeScript" />
</p>

<p align="center">
  <a href="#components">Components</a> · <a href="#usage">Usage</a> · <a href="#installation">Installation</a> · <a href="README.ru.md">Русский</a>
</p>

Rikkora UI is a React component library built with TypeScript and CSS Modules. Explore component APIs in the playground and their implementation through the source links below.

## Components

| Component                                                      | What it does                                                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [Button](packages/ui/src/components/Button/Button.tsx) | Five variants, xs–xl text and icon sizes, configurable radius, loading and disabled states |
| [ButtonLink](packages/ui/src/components/Button/ButtonLink.tsx) | Button styling for native and router links |
| [Breadcrumbs](packages/ui/src/components/Breadcrumbs/Breadcrumbs.tsx) | Navigation path with links to parent sections |
| [Input](packages/ui/src/components/Input/Input.tsx)            | Native input attributes, controlled or uncontrolled values, and a forwarded ref |
| [Checkbox](packages/ui/src/components/Checkbox/Checkbox.tsx)   | A native checkbox with controlled or uncontrolled state                         |
| [Textarea](packages/ui/src/components/Textarea/Textarea.tsx)   | A native text area with resizing in both directions                             |
| [Flex](packages/ui/src/components/Flex/Flex.tsx)               | Flex layout with alignment, wrapping, and spacing tokens                        |
| [Grid](packages/ui/src/components/Grid/Grid.tsx)               | Grid layout with configurable tracks, alignment, and gaps                       |

## Installation

Installation is not available yet: the package has not been published to npm.

## Usage

Import the stylesheet once in your app entry point:

```tsx
// main.tsx
import '@rikkora/ui/styles.css';
```

Then import components where you use them:

```tsx
import { Button, Flex, Input } from '@rikkora/ui';

export function Example() {
  return (
    <Flex direction='column' gap={4}>
      <label>
        Name
        <Input
          name='name'
          placeholder='Enter your name'
        />
      </label>
      <Button variant='primary'>Continue</Button>
    </Flex>
  );
}
```

## Light & dark

Light mode is the default.

To choose a theme explicitly, set `data-rkr-theme` on the page root or a container. Use `violet-smoke-light` for light mode and `violet-smoke` for dark mode:

```html
<html data-rkr-theme="violet-smoke-light"></html>
```

```html
<html data-rkr-theme="violet-smoke"></html>
```
