import { useState } from 'react';
import { configureExample, type ExampleConfiguration } from './exampleConfiguration';
import { Link, Text, Heading, Box, Flex, Stack, Separator, Badge, Card, Switch, RadioGroup, Select, Slider, Field, FormControl, Tabs, Dialog, Popover, Tooltip, DropdownMenu, Accordion, Drawer, Alert, ToastProvider, useToast, Spinner, Progress, Skeleton, Avatar, Table, Pagination, Button, Input, Checkbox, Textarea, ScrollArea } from '@rikkora/ui';
import { usePreferences } from '../../preferences/PreferencesContext';
import type { AdditionalExample } from './catalog';
import styles from './Showcase.module.css';

function ToastExample({ text }: { text?: string }) {
  const { toast, dismissAll } = useToast();
  const { language } = usePreferences();
  const ru = language === 'ru';
  return <Stack><Button onClick={() => toast({ title: text ?? (ru ? 'Сохранено' : 'Saved'),
    description: ru ? 'Изменения сохранены.' : 'Your changes are saved.' })}>
    {ru ? 'Показать уведомление' : 'Show notification'}</Button>
    <Button variant='ghost' onClick={dismissAll}>{ru ? 'Закрыть все' : 'Dismiss all'}</Button></Stack>;
}

export function ComponentExample({ name, configuration = {}, text, onConfigurationChange }: { name: AdditionalExample; configuration?: ExampleConfiguration; text?: string; onConfigurationChange?: (part: string, property: string, value: unknown) => void }) {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [page, setPage] = useState(1);
  const [volume, setVolume] = useState('50');
  const [selection, setSelection] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [scrollOrientation, setScrollOrientation] = useState<'vertical' | 'horizontal' | 'both'>('vertical');
  const [scrollType, setScrollType] = useState<'hover' | 'scroll' | 'auto' | 'always'>('always');
  const content = ru ? 'Содержимое' : 'Content';
  const close = ru ? 'Закрыть' : 'Close';
  function render() {
  switch (name) {
    case 'ScrollArea': return <Stack gap={3} style={{ width: '100%' }}>
      <Stack direction='row' gap={3}>
        <Field label={ru ? 'Направление' : 'Orientation'}><Select value={scrollOrientation} onChange={(event) => setScrollOrientation(event.target.value as typeof scrollOrientation)}>
          <Box as='option' value='vertical'>{ru ? 'Вертикально' : 'Vertical'}</Box><Box as='option' value='horizontal'>{ru ? 'Горизонтально' : 'Horizontal'}</Box><Box as='option' value='both'>{ru ? 'Оба' : 'Both'}</Box>
        </Select></Field>
        <Field label={ru ? 'Полосы' : 'Scrollbars'}><Select value={scrollType} onChange={(event) => setScrollType(event.target.value as typeof scrollType)}>
          <Box as='option' value='always'>{ru ? 'Всегда' : 'Always'}</Box><Box as='option' value='hover'>{ru ? 'При наведении' : 'On hover'}</Box><Box as='option' value='scroll'>{ru ? 'При прокрутке' : 'On scroll'}</Box><Box as='option' value='auto'>{ru ? 'При переполнении' : 'On overflow'}</Box>
        </Select></Field>
      </Stack>
      <ScrollArea key={scrollOrientation} orientation={scrollOrientation} type={scrollType} aria-label={ru ? 'Пример прокрутки' : 'Scroll example'}
        style={{ height: 160, border: '1px solid var(--rkr-color-border-default)', borderRadius: 'var(--rkr-radius-md)' }}>
        <Stack gap={0} style={{ padding: 'var(--rkr-spacing-3)', width: scrollOrientation === 'vertical' ? undefined : 640 }}>
          {Array.from({ length: scrollOrientation === 'horizontal' ? 3 : 16 }, (_, index) => <Text as='div' key={index} className={styles.scrollItem}>
            {String(index + 1).padStart(2, '0')} <Box as='span'>{ru ? 'Содержимое прокручиваемой области' : 'Content inside the scroll area'}</Box>
          </Text>)}
        </Stack>
      </ScrollArea>
    </Stack>;
    case 'Link': return <Link href='#setup'>{ru ? 'Перейти к подключению' : 'Go to setup'}</Link>;
    case 'Text': return <Stack><Text size='lg'>Rikkora UI</Text><Text as='p' tone='secondary'>{ru ? 'Дополнительный текст' : 'Supporting text'}</Text><Text as='strong' size='sm'>{ru ? 'Выделенный текст' : 'Emphasized text'}</Text></Stack>;
    case 'Heading': return <Stack><Heading level={2} size='3xl'>Rikkora UI</Heading><Heading level={3} size='lg'>{ru ? 'Семантика и размер независимы' : 'Independent level and size'}</Heading></Stack>;
    case 'Box': return <Box padding={6} className={styles.item}>{content}</Box>;
    case 'Stack': return <Stack gap={3}><Badge>{ru ? 'Первый' : 'First'}</Badge><Badge>{ru ? 'Второй' : 'Second'}</Badge><Badge>{ru ? 'Третий' : 'Third'}</Badge></Stack>;
    case 'Separator': return <Stack style={{ width: '100%' }}><Text>{content}</Text><Separator /><Stack direction='row' gap={4}><Text>A</Text><Separator orientation='vertical' /><Text>B</Text></Stack></Stack>;
    case 'Badge': return <Stack direction='row' wrap><Badge>{ru ? 'Черновик' : 'Draft'}</Badge><Badge variant='primary'>{ru ? 'Новый' : 'New'}</Badge><Badge variant='danger'>{ru ? 'Ошибка' : 'Error'}</Badge></Stack>;
    case 'Card': return <Card variant='filled'><Stack><Heading level={3} size='lg'>Rikkora UI</Heading><Text tone='secondary'>{content}</Text><Button>{ru ? 'Продолжить' : 'Continue'}</Button></Stack></Card>;
    case 'Switch': return <Box as='form'><Field label={ru ? 'Уведомления' : 'Notifications'}><Switch name='notifications' defaultChecked /></Field></Box>;
    case 'RadioGroup': return <Box as='form'><Field label={ru ? 'Тариф' : 'Plan'} required><RadioGroup name='plan' defaultValue='basic' options={[
      { value: 'basic', label: 'Basic' }, { value: 'pro', label: 'Pro' }, { value: 'team', label: 'Team', disabled: true },
    ]} /></Field><Button type='reset' variant='ghost'>{ru ? 'Сбросить' : 'Reset'}</Button></Box>;
    case 'Select': return <Field label={ru ? 'Тема' : 'Theme'}><Select name='theme' defaultValue='dark'><Box as='option' value='dark'>{ru ? 'Тёмная' : 'Dark'}</Box><Box as='option' value='light'>{ru ? 'Светлая' : 'Light'}</Box><Box as='option' disabled>{ru ? 'Недоступно' : 'Unavailable'}</Box></Select></Field>;
    case 'Slider': return <Field label={`${ru ? 'Громкость' : 'Volume'}: ${volume}`}><Slider name='volume' value={volume} onChange={(event) => setVolume(event.target.value)} step={5} /></Field>;
    case 'Field': return <Stack><Field label='Email' description={ru ? 'Рабочий адрес' : 'Work address'} error={invalid ? (ru ? 'Введите корректный email' : 'Enter a valid email') : undefined} required><Input name='email' type='email' placeholder='you@example.com' /></Field><Button variant='outline' onClick={() => setInvalid(!invalid)}>{ru ? 'Переключить ошибку' : 'Toggle error'}</Button></Stack>;
    case 'FormControl': return <Stack><FormControl disabled={disabled}><Field label={ru ? 'Имя' : 'Name'}><Input name='name' /></Field><Field label={ru ? 'Сообщение' : 'Message'}><Textarea name='message' rows={2} /></Field></FormControl><Flex as='label' align='center' gap={2}><Checkbox checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> {ru ? 'Заблокировать поля' : 'Disable fields'}</Flex></Stack>;
    case 'Tabs': return <Tabs.Root defaultValue='overview'><Tabs.List aria-label={ru ? 'Разделы' : 'Sections'}><Tabs.Trigger value='overview'>{ru ? 'Обзор' : 'Overview'}</Tabs.Trigger><Tabs.Trigger value='settings'>{ru ? 'Настройки' : 'Settings'}</Tabs.Trigger><Tabs.Trigger value='disabled' disabled>{ru ? 'Архив' : 'Archive'}</Tabs.Trigger></Tabs.List><Tabs.Content value='overview'>{ru ? 'Содержимое обзора' : 'Overview content'}</Tabs.Content><Tabs.Content value='settings'><Field label={ru ? 'Имя' : 'Name'}><Input /></Field></Tabs.Content></Tabs.Root>;
    case 'Dialog': return <Dialog.Root><Dialog.Trigger asChild><Button>{ru ? 'Открыть диалог' : 'Open dialog'}</Button></Dialog.Trigger><Dialog.Content><Dialog.Title>{ru ? 'Настройки' : 'Settings'}</Dialog.Title><Dialog.Description>{ru ? 'Измените имя и закройте окно.' : 'Update your name and close the dialog.'}</Dialog.Description><Stack><Field label={ru ? 'Имя' : 'Name'}><Input name='dialog-name' /></Field><Dialog.Close aria-label={close} /></Stack></Dialog.Content></Dialog.Root>;
    case 'Drawer': return <Drawer.Root><Drawer.Trigger asChild><Button>{ru ? 'Открыть панель' : 'Open drawer'}</Button></Drawer.Trigger><Drawer.Content side='right'><Drawer.Title>{ru ? 'Настройки' : 'Settings'}</Drawer.Title><Drawer.Description>{ru ? 'Панель использует поведение диалога.' : 'The drawer shares dialog behavior.'}</Drawer.Description><Stack><Field label={ru ? 'Имя' : 'Name'}><Input name='drawer-name' /></Field><Drawer.Close asChild><Button>{close}</Button></Drawer.Close></Stack></Drawer.Content></Drawer.Root>;
    case 'Popover': return <Popover.Root><Popover.Trigger asChild><Button>{ru ? 'Подробности' : 'Details'}</Button></Popover.Trigger><Popover.Content aria-label={ru ? 'Подробности' : 'Details'}><Stack><Text>{content}</Text><Field label={ru ? 'Имя' : 'Name'}><Input /></Field><Popover.Close asChild><Button>{close}</Button></Popover.Close></Stack></Popover.Content></Popover.Root>;
    case 'Tooltip': return <Tooltip.Provider delayDuration={300}><Tooltip.Root><Tooltip.Trigger asChild><Button variant='outline'>{ru ? 'Помощь' : 'Help'}</Button></Tooltip.Trigger><Tooltip.Content>{ru ? 'Подсказка работает по наведению и фокусу.' : 'This tooltip works on hover and focus.'}</Tooltip.Content></Tooltip.Root></Tooltip.Provider>;
    case 'DropdownMenu': return <Stack><DropdownMenu.Root><DropdownMenu.Trigger asChild><Button>{ru ? 'Действия' : 'Actions'}</Button></DropdownMenu.Trigger><DropdownMenu.Content><DropdownMenu.Label>{ru ? 'Документ' : 'Document'}</DropdownMenu.Label><DropdownMenu.Item onSelect={() => setSelection(ru ? 'Изменить' : 'Edit')}>{ru ? 'Изменить' : 'Edit'}</DropdownMenu.Item><DropdownMenu.Item disabled>{ru ? 'Удалить' : 'Delete'}</DropdownMenu.Item><DropdownMenu.Separator /><DropdownMenu.Item onSelect={() => setSelection(ru ? 'Копировать' : 'Copy')}>{ru ? 'Копировать' : 'Copy'}</DropdownMenu.Item></DropdownMenu.Content></DropdownMenu.Root><Text role='status'>{selection}</Text></Stack>;
    case 'Accordion': return <Stack><Accordion.Root type='single' collapsible defaultValue='one'><Accordion.Item value='one'><Accordion.Header><Accordion.Trigger>{ru ? 'Что внутри?' : 'What is inside?'}</Accordion.Trigger></Accordion.Header><Accordion.Content>{content}</Accordion.Content></Accordion.Item><Accordion.Item value='two'><Accordion.Header><Accordion.Trigger>{ru ? 'Как управлять?' : 'How to navigate?'}</Accordion.Trigger></Accordion.Header><Accordion.Content>{ru ? 'Tab, стрелки, Home, End, Enter и Space.' : 'Tab, arrows, Home, End, Enter and Space.'}</Accordion.Content></Accordion.Item></Accordion.Root></Stack>;
    case 'Alert': return <Stack><Alert title={ru ? 'Информация' : 'Information'}>{content}</Alert><Alert variant='danger' title={ru ? 'Ошибка' : 'Error'}>{ru ? 'Проверьте введённые данные.' : 'Check your input.'}</Alert></Stack>;
    case 'Toast': return <ToastProvider closeLabel={ru ? 'Закрыть уведомление' : 'Dismiss notification'} viewportLabel={ru ? 'Уведомления' : 'Notifications'}><ToastExample text={text} /></ToastProvider>;
    case 'Spinner': return <Stack direction='row' align='center' role='status'><Spinner size='sm' /><Spinner /><Spinner size='lg' /><Text>{ru ? 'Загрузка…' : 'Loading…'}</Text></Stack>;
    case 'Progress': return <Stack style={{ width: '100%' }}><Field label={`${ru ? 'Загрузка' : 'Upload'}: ${volume}%`}><Slider value={volume} onChange={(event) => setVolume(event.target.value)} /></Field><Progress value={Number(volume)} aria-label={ru ? 'Прогресс загрузки' : 'Upload progress'} /><Progress aria-label={ru ? 'Ожидание' : 'Waiting'} /></Stack>;
    case 'Skeleton': return <Stack style={{ width: '100%' }}><Skeleton shape='circle' style={{ width: '3rem' }} /><Skeleton shape='text' /><Skeleton shape='text' style={{ width: '70%' }} /><Skeleton animated={false} style={{ height: '3rem' }} /></Stack>;
    case 'Avatar': return <Stack direction='row' align='center'><Avatar alt='Rikka Inohana' size='sm' /><Avatar alt='Rikka Inohana' /><Avatar src='/missing-avatar.png' alt='Rikka Inohana' size='lg' /><Avatar alt={ru ? 'Пользователь' : 'User'} fallback='?' /></Stack>;
    case 'Table': return <ScrollArea orientation='horizontal' style={{ width: '100%' }}><Table.Root><Table.Caption>{ru ? 'Компоненты' : 'Components'}</Table.Caption><Table.Head><Table.Row><Table.Header>{ru ? 'Название' : 'Name'}</Table.Header><Table.Header>{ru ? 'Статус' : 'Status'}</Table.Header></Table.Row></Table.Head><Table.Body><Table.Row><Table.Header scope='row'>Button</Table.Header><Table.Cell><Badge variant='primary'>{ru ? 'Доступен' : 'Available'}</Badge></Table.Cell></Table.Row><Table.Row><Table.Header scope='row'>Dialog</Table.Header><Table.Cell><Badge variant='primary'>{ru ? 'Доступен' : 'Available'}</Badge></Table.Cell></Table.Row></Table.Body></Table.Root></ScrollArea>;
    case 'Pagination': return <Stack><Text>{ru ? 'Страница' : 'Page'} {page}</Text><Pagination page={page} pageCount={12} onPageChange={setPage} previousLabel={ru ? 'Предыдущая страница' : 'Previous page'} nextLabel={ru ? 'Следующая страница' : 'Next page'} getPageLabel={(number) => `${ru ? 'Страница' : 'Page'} ${number}`} aria-label={ru ? 'Страницы' : 'Pagination'} /></Stack>;
  }
  }
  return configureExample(render(), name, configuration, text, onConfigurationChange);
}
