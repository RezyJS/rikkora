export const buttonExampleCode = {
  basic: (ru: boolean) => `import { Button } from "@rikkora/ui";

export function Example() {
  return <Button>${ru ? 'Сохранить' : 'Save changes'}</Button>;
}`,
  appearance: (ru: boolean) => `import { Button, type ButtonTone, type ButtonVariant } from "@rikkora/ui";

export function Example() {
  const variants: ButtonVariant[] = ["primary", "secondary", "outline", "ghost", "soft", "danger"];
  const tones: ButtonTone[] = ["primary", "danger", "success"];
  return (
    <>
      {variants.map(variant => (
        <Button variant={variant} key={variant}>${ru ? 'Кнопка' : 'Button'}</Button>
      ))}
      {tones.map((tone, index) => (
        <Button variant="soft" tone={tone} key={tone}>
          {[${(ru ? ['Создать', 'Удалить', 'Готово'] : ['Create', 'Delete', 'Done']).map(label => JSON.stringify(label)).join(', ')}][index]}
        </Button>
      ))}
    </>
  );
}`,
  layout: (ru: boolean) => `import { IconPlus } from "@tabler/icons-react";
import { Button, type ButtonSize, type ButtonRadius } from "@rikkora/ui";

export function Example() {
  const radii: ButtonRadius[] = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"];
  const sizes: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];
  const iconSizes: ButtonSize[] = ["icon-xs", "icon-sm", "icon", "icon-lg", "icon-xl"];
  return (
    <>
      {sizes.map(size => (
        <Button size={size} key={size}>${ru ? 'Кнопка' : 'Button'}</Button>
      ))}
      {iconSizes.map(size => (
        <Button size={size} variant="outline" aria-label={\`${ru ? 'Создать' : 'Create'} (\${size})\`} key={size}>
          <IconPlus size={18} aria-hidden="true" />
        </Button>
      ))}
      {radii.map(radius => (
        <Button variant="outline" radius={radius} key={radius}>${ru ? 'Кнопка' : 'Button'}</Button>
      ))}
      <Button fullWidth>${ru ? 'Войти в аккаунт' : 'Sign in'}</Button>
    </>
  );
}`,
  compact: (ru: boolean) => `import { IconDots } from "@tabler/icons-react";
import { Button } from "@rikkora/ui";

export function Example() {
  return (
    <>
      <Button size="sm" variant="outline" radius="full">${ru ? 'Фильтр' : 'Filter'}</Button>
      <Button size="sm" variant="outline" radius="full" compact>${ru ? 'Фильтр' : 'Filter'}</Button>
      <Button size="icon-sm" variant="outline" radius="full" aria-label={${JSON.stringify(ru ? 'Другие действия' : 'More actions')}}>
        <IconDots size={18} aria-hidden="true" />
      </Button>
    </>
  );
}`,
  typography: (ru: boolean) => `import { IconArrowRight, IconDownload, IconPlus } from "@tabler/icons-react";
import { Badge, Button, type ButtonFontWeight, type TextSize } from "@rikkora/ui";

export function Example() {
  const textSizes: TextSize[] = ["xs", "sm", "md", "lg", "xl"];
  const weights: ButtonFontWeight[] = ["regular", "medium", "semibold", "bold", "extrabold"];
  return (
    <>
      {textSizes.map(textSize => (
        <Button textSize={textSize} key={textSize}>${ru ? 'Текст' : 'Text'}</Button>
      ))}
      {weights.map(fontWeight => (
        <Button fontWeight={fontWeight} variant="soft" key={fontWeight}>${ru ? 'Текст' : 'Text'}</Button>
      ))}
      <Button italic variant="outline">${ru ? 'Курсив' : 'Italic'}</Button>
      <Button underline variant="outline">${ru ? 'Подчёркнутый' : 'Underline'}</Button>
      <Button strikethrough variant="outline">${ru ? 'Зачёркнутый' : 'Strike'}</Button>
      <Button italic underline variant="outline">${ru ? 'Сочетание' : 'Combined'}</Button>
      {(["none", "uppercase", "lowercase", "capitalize"] as const).map(textTransform => (
        <Button textTransform={textTransform} variant="soft" key={textTransform}>${ru ? 'Мой текст' : 'My text'}</Button>
      ))}
      <Button startContent={<IconPlus aria-hidden="true" />}>${ru ? 'Создать' : 'Create'}</Button>
      <Button endContent={<IconArrowRight aria-hidden="true" />}>${ru ? 'Продолжить' : 'Continue'}</Button>
      <Button startContent={<IconDownload aria-hidden="true" />} endContent={<Badge>PDF</Badge>}>${ru ? 'Скачать' : 'Download'}</Button>
    </>
  );
}`,
  selection: (ru: boolean) => `import { useState } from "react";
import { IconStar } from "@tabler/icons-react";
import { Button } from "@rikkora/ui";

export function Example() {
  const [pressed, setPressed] = useState(false);
  return (
    <>
      <Button disabled>${ru ? 'Недоступно' : 'Unavailable'}</Button>
      <Button
        variant="soft"
        pressed={pressed}
        onClick={() => setPressed(!pressed)}
        startContent={<IconStar fill={pressed ? "currentColor" : "none"} aria-hidden="true" />}
      >${ru ? 'Избранное' : 'Favorite'}</Button>
    </>
  );
}`,
  loading: (ru: boolean) => `import { useEffect, useRef, useState } from "react";
import { IconCheck, IconDeviceFloppy } from "@tabler/icons-react";
import { Button } from "@rikkora/ui";

export function Example() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <>
      {(["start", "end", "center"] as const).map(loadingPlacement => (
        <Button
          loading
          loadingPlacement={loadingPlacement}
          loadingText={${JSON.stringify(ru ? 'Загрузка' : 'Loading')}}
          key={loadingPlacement}
        >${ru ? 'Сохранить' : 'Save'}</Button>
      ))}
      <Button
        loading={saving}
        loadingText={${JSON.stringify(ru ? 'Сохраняем…' : 'Saving…')}}
        tone={saved ? "success" : "primary"}
        startContent={saved ? <IconCheck aria-hidden="true" /> : <IconDeviceFloppy aria-hidden="true" />}
        onClick={() => {
          setSaving(true);
          setSaved(false);
          timer.current = setTimeout(() => {
            setSaving(false);
            setSaved(true);
          }, 900);
        }}
      >
        {saved ? (${JSON.stringify(ru ? 'Сохранено' : 'Saved')}) : (${JSON.stringify(ru ? 'Попробовать сохранение' : 'Try saving')})}
      </Button>
    </>
  );
}`,
  motion: (ru: boolean) => `import { Button } from "@rikkora/ui";

export function Example() {
  return (
    <>
      <Button>${ru ? 'Наведи и нажми' : 'Hover and press'}</Button>
      <Button ripple>${ru ? 'Волна' : 'Ripple'}</Button>
      <Button variant="outline" disableAnimation>${ru ? 'Без анимации' : 'No animation'}</Button>
    </>
  );
}`,
  groups: (ru: boolean) => `import { useState } from "react";
import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react";
import { ButtonGroup, DropdownMenu, SplitButton, Text, ToggleButton } from "@rikkora/ui";

export function Example() {
  const [saveAction, setSaveAction] = useState("");
  return (
    <>
      <ButtonGroup aria-label={${JSON.stringify(ru ? 'Форматирование' : 'Formatting')}}>
        <ToggleButton size="icon" aria-label={${JSON.stringify(ru ? 'Жирный' : 'Bold')}}>
          <IconBold aria-hidden="true" />
        </ToggleButton>
        <ToggleButton size="icon" aria-label={${JSON.stringify(ru ? 'Курсив' : 'Italic')}}>
          <IconItalic aria-hidden="true" />
        </ToggleButton>
        <ToggleButton size="icon" aria-label={${JSON.stringify(ru ? 'Подчёркнутый' : 'Underline')}}>
          <IconUnderline aria-hidden="true" />
        </ToggleButton>
      </ButtonGroup>
      <SplitButton
        menuLabel={${JSON.stringify(ru ? 'Варианты сохранения' : 'Save options')}}
        onClick={() => setSaveAction(${JSON.stringify(ru ? 'Сохранено' : 'Saved')})}
        menu={<DropdownMenu.Item onSelect={() => setSaveAction(${JSON.stringify(ru ? 'Выбрано «Сохранить как»' : 'Save as selected')})}>${ru ? 'Сохранить как…' : 'Save as…'}</DropdownMenu.Item>}
      >
        {${JSON.stringify(ru ? 'Сохранить' : 'Save')}}
      </SplitButton>
      <Text
        as="p"
        role="status"
        size="sm"
        tone="secondary"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          overflow: "hidden",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap"
        }}
      >{saveAction}</Text>
    </>
  );
}`,
  confirmation: (ru: boolean) => `import { useState } from "react";
import { ConfirmButton, HoldToConfirm, Text } from "@rikkora/ui";

export function Example() {
  const [deleted, setDeleted] = useState(false);
  const [holds, setHolds] = useState(0);
  return (
    <>
      <ConfirmButton
        title={${JSON.stringify(ru ? 'Удалить пример?' : 'Delete example?')}}
        description={${JSON.stringify(ru ? 'Данные не удаляются: это демонстрация.' : 'This demonstration does not delete any data.')}}
        confirmText={${JSON.stringify(ru ? 'Удалить' : 'Delete')}}
        cancelText={${JSON.stringify(ru ? 'Отмена' : 'Cancel')}}
        pendingText={${JSON.stringify(ru ? 'Удаляем…' : 'Deleting…')}}
        errorText={${JSON.stringify(ru ? 'Не удалось выполнить действие.' : 'Could not complete the action.')}}
        onConfirm={async () => {
          await new Promise(resolve => setTimeout(resolve, 500));
          setDeleted(true);
        }}
      >
        {${JSON.stringify(ru ? 'Удалить пример' : 'Delete example')}}
      </ConfirmButton>
      <Text
        as="p"
        role="status"
        size="sm"
        tone="secondary"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          overflow: "hidden",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap"
        }}
      >
        {deleted ? (${JSON.stringify(ru ? 'Удаление подтверждено' : 'Deletion confirmed')}) : ""}
      </Text>
      <HoldToConfirm
        variant="soft"
        tone="danger"
        onConfirm={() => setHolds(value => value + 1)}
        holdingText={${JSON.stringify(ru ? 'Продолжайте удерживать…' : 'Keep holding…')}}
        confirmedText={${JSON.stringify(ru ? 'Подтверждено' : 'Confirmed')}}
        instructions={${JSON.stringify(ru ? 'Удерживайте кнопку, Enter или Space. Отпустите или нажмите Escape для отмены.' : undefined)}}
      >
        {${JSON.stringify(ru ? 'Удерживайте для подтверждения' : 'Hold to confirm')}}
      </HoldToConfirm>
      <Text
        as="p"
        role="status"
        size="sm"
        tone="secondary"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          overflow: "hidden",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap"
        }}
      >{${JSON.stringify(ru ? 'Подтверждений' : 'Confirmations')}}: {holds}</Text>
    </>
  );
}`,
};
