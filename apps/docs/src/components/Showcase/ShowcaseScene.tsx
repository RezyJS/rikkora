import { useState } from 'react';
import {
  Accordion, Alert, Avatar, Badge, Box, Button, Card, Checkbox, Dialog, DropdownMenu, Field, Flex,
  Heading, IconButton, Input, Link, Pagination, Popover, Progress, RadioGroup, Separator,
  Select, Slider, Spinner, Stack, Switch, Table, Tabs, Text, Textarea, Tooltip, useToast,
} from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { usePreferences } from '../../preferences/PreferencesContext';
import { componentNames, componentSlug } from './catalog';
import styles from './ShowcaseScene.module.css';

export function ShowcaseScene() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(true);
  const [query, setQuery] = useState('');
  const [comment, setComment] = useState('');
  const [lastComment, setLastComment] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [volume, setVolume] = useState('60');
  const [plan, setPlan] = useState('starter');
  const [favorite, setFavorite] = useState(false);
  const [page, setPage] = useState(1);
  const [profileOpen, setProfileOpen] = useState(false);
  const [name, setName] = useState('Rikka Inohana');
  const [draftName, setDraftName] = useState(name);
  const [quantity, setQuantity] = useState(2);
  const [timezone, setTimezone] = useState('utc');
  const [tasks, setTasks] = useState([true, false, false]);
  const [alignment, setAlignment] = useState('left');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('editor');
  const results = componentNames.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase()));
  const notify = () => toast({ title: ru ? 'Изменения сохранены' : 'Changes saved', description: ru ? 'Можно продолжать работу.' : 'You can keep working.' });

  return <Box className={styles.scene} aria-label={ru ? 'Примеры интерфейсов' : 'Interface examples'}>
    <Box className={styles.column}>
      <Card variant='filled' className={styles.sample} padding={5}>
        <Box as='form' onSubmit={(event) => { event.preventDefault(); toast({ title: ru ? 'Данные готовы' : 'Form ready', description: email }); }}>
          <Stack gap={4}>
            <Stack gap={1}><Heading level={3} size='xl'>{ru ? 'Войти в аккаунт' : 'Sign in'}</Heading><Text size='sm' tone='secondary'>{ru ? 'С возвращением.' : 'Welcome back.'}</Text></Stack>
            <Field label='Email' required><Input name='email' type='email' placeholder='you@example.com' value={email} onChange={(event) => setEmail(event.target.value)} required /></Field>
            <Field label={ru ? 'Пароль' : 'Password'} required><Input name='password' type='password' placeholder='••••••••' required minLength={4} /></Field>
            <Flex as='label' align='center' gap={2}><Checkbox checked={remember} onChange={(event) => setRemember(event.target.checked)} /><Text size='sm'>{ru ? 'Запомнить меня' : 'Remember me'}</Text></Flex>
            <Button type='submit'>{ru ? 'Продолжить' : 'Continue'}</Button>
          </Stack>
        </Box>
      </Card>

      <Box className={styles.sample}><Flex gap={2} wrap align='center'>
        <Button onClick={notify}>{ru ? 'Сохранить' : 'Save'}</Button><Button variant='secondary' onClick={() => toast({ title: ru ? 'Отменено' : 'Cancelled' })}>{ru ? 'Отмена' : 'Cancel'}</Button>
        <Tooltip.Provider><Tooltip.Root><Tooltip.Trigger asChild><IconButton variant='secondary' aria-label={ru ? 'Избранное' : 'Favorite'} aria-pressed={favorite} onClick={() => setFavorite(!favorite)}>
          <svg viewBox='0 0 24 24' fill={favorite ? 'currentColor' : 'none'} stroke='currentColor' strokeWidth='1.7' aria-hidden='true'><path d='m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z' /></svg>
        </IconButton></Tooltip.Trigger><Tooltip.Content>{ru ? 'Добавить в избранное' : 'Add to favorites'}</Tooltip.Content></Tooltip.Root></Tooltip.Provider>
      </Flex></Box>

      <Box className={styles.sample}><Stack gap={3}>
        <Field label={ru ? 'Найти компонент' : 'Find a component'}><Input type='search' placeholder={ru ? 'Поиск…' : 'Search…'} value={query} onChange={(event) => setQuery(event.target.value)} /></Field>
        {query.trim() && <Stack gap={2} role='status'>
          {results.slice(0, 5).map((item) => <Link as={RouterLink} key={item} to={`/docs/components/${componentSlug(item)}`}>{item} ↗</Link>)}
          {!results.length && <Text size='sm' tone='secondary'>{ru ? 'Ничего не найдено' : 'No matches'}</Text>}
        </Stack>}
      </Stack></Box>

      <Box className={styles.sample}><Stack gap={2}>
        <Box as='label' htmlFor='example-quantity'><Text size='sm'>{ru ? 'Количество' : 'Quantity'}</Text></Box>
        <Flex gap={2}>
          <IconButton variant='secondary' aria-label={ru ? 'Уменьшить количество' : 'Decrease quantity'} disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>−</IconButton>
          <Input id='example-quantity' className={styles.quantity} type='number' min={1} max={99} value={quantity} onChange={(event) => setQuantity(Math.min(99, Math.max(1, Number(event.target.value) || 1)))} />
          <IconButton variant='secondary' aria-label={ru ? 'Увеличить количество' : 'Increase quantity'} disabled={quantity >= 99} onClick={() => setQuantity(quantity + 1)}>+</IconButton>
        </Flex>
      </Stack></Box>

      <Box className={styles.sample}><Flex as='nav' aria-label={ru ? 'Путь к компонентам' : 'Component path'} gap={2} wrap className={styles.inlineSurface}>
        <Link as={RouterLink} to='/docs'>{ru ? 'Документация' : 'Docs'}</Link><Text as='span' tone='tertiary' aria-hidden='true'>/</Text><Text size='sm'>{ru ? 'Компоненты' : 'Components'}</Text>
      </Flex></Box>

    </Box>
    <Box className={styles.column}>
      <Box className={styles.sample}><Flex gap={2} wrap><Badge>{ru ? 'Черновик' : 'Draft'}</Badge><Badge variant='primary'>{ru ? 'Опубликовано' : 'Published'}</Badge><Badge variant='danger'>{ru ? 'Ошибка' : 'Error'}</Badge></Flex></Box>

      <Card variant='filled' className={styles.sample} padding={5}><Stack gap={4}>
        <Flex align='center' gap={3}><Avatar alt={name} /><Stack gap={1}><Heading level={3} size='lg'>{name}</Heading><Text size='sm' tone='secondary'>{ru ? 'Дизайнер интерфейсов' : 'Interface designer'}</Text></Stack></Flex>
        <Separator />
        <DropdownMenu.Root><DropdownMenu.Trigger asChild><Button variant='secondary'>{ru ? 'Действия с профилем' : 'Profile actions'} <Box as='span' aria-hidden='true'>⌄</Box></Button></DropdownMenu.Trigger>
          <DropdownMenu.Content><DropdownMenu.Label>{name}</DropdownMenu.Label>
            <DropdownMenu.Item onSelect={() => { setDraftName(name); setProfileOpen(true); }}>{ru ? 'Редактировать профиль' : 'Edit profile'}</DropdownMenu.Item>
            <DropdownMenu.Item onSelect={notify}>{ru ? 'Сохранить изменения' : 'Save changes'}</DropdownMenu.Item>
            <DropdownMenu.Separator /><DropdownMenu.Item disabled>{ru ? 'Удалить аккаунт' : 'Delete account'}</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Stack></Card>

      <Box className={`${styles.sample} ${styles.panel}`}><Stack gap={4}>
        <Flex as='label' align='center' justify='between' gap={3}><Text size='sm'>{ru ? 'Уведомления на почту' : 'Email notifications'}</Text><Switch checked={notifications} onChange={(event) => setNotifications(event.target.checked)} /></Flex>
        <Flex as='label' align='center' justify='between' gap={3}><Text size='sm'>{ru ? 'Звук уведомлений' : 'Notification sounds'}</Text><Switch checked={sound} onChange={(event) => setSound(event.target.checked)} /></Flex>
        <Field label={`${ru ? 'Громкость' : 'Volume'} · ${volume}%`}><Slider disabled={!sound} value={volume} onChange={(event) => setVolume(event.target.value)} /></Field>
      </Stack></Box>

      <Box className={`${styles.sample} ${styles.panel}`}><Field label={ru ? 'Часовой пояс' : 'Timezone'}>
        <Select value={timezone} onChange={(event) => setTimezone(event.target.value)}>
          <Box as='option' value='utc'>UTC +0</Box><Box as='option' value='moscow'>{ru ? 'Москва · UTC +3' : 'Moscow · UTC +3'}</Box><Box as='option' value='tokyo'>{ru ? 'Токио · UTC +9' : 'Tokyo · UTC +9'}</Box>
        </Select>
      </Field></Box>

      <Card variant='filled' className={styles.sample} padding={5}><Stack gap={4}>
        <Flex justify='between' align='center'><Heading level={3} size='lg'>{ru ? 'Перед релизом' : 'Before release'}</Heading><Badge>{tasks.filter(Boolean).length} / 3</Badge></Flex>
        {[(ru ? 'Собрать компоненты' : 'Build components'), (ru ? 'Проверить клавиатуру' : 'Check keyboard navigation'), (ru ? 'Обновить документацию' : 'Update documentation')].map((task, index) => <Flex key={task} as='label' align='center' gap={3}>
          <Checkbox checked={tasks[index]} onChange={(event) => setTasks(tasks.map((checked, taskIndex) => taskIndex === index ? event.target.checked : checked))} /><Text size='sm'>{task}</Text>
        </Flex>)}
        <Progress value={tasks.filter(Boolean).length / tasks.length * 100} aria-label={ru ? 'Готовность к релизу' : 'Release readiness'} />
      </Stack></Card>

    </Box>
    <Box className={styles.column}>
      <Box className={`${styles.sample} ${styles.panel}`}><Box as='form' onSubmit={(event) => {
        event.preventDefault(); if (!comment.trim()) return;
        setLastComment(comment.trim()); setComment(''); toast({ title: ru ? 'Комментарий добавлен' : 'Comment added' });
      }}><Stack gap={3}>
        <Field label={ru ? 'Комментарий' : 'Comment'}><Textarea rows={3} placeholder={ru ? 'Что думаете?' : 'What do you think?'} required value={comment} onChange={(event) => setComment(event.target.value)} /></Field>
        <Flex justify='end'><Button size='sm' type='submit'>{ru ? 'Отправить' : 'Send'}</Button></Flex>
        {lastComment && <Text as='p' size='sm' role='status' className={styles.userText}>{lastComment}</Text>}
      </Stack></Box></Box>

      <Box className={styles.sample}><Flex align='center' gap={3} wrap><Flex gap={2}><Avatar size='sm' alt='Rikka Inohana' /><Avatar size='sm' alt='Sana Mori' /><Avatar size='sm' alt='Yuta Aoki' /></Flex><Text size='sm' tone='secondary'>{ru ? 'И ещё 12 участников' : 'And 12 more members'}</Text></Flex></Box>

      <Card variant='filled' className={styles.sample} padding={5}><Stack gap={4}>
        <Heading level={3} size='lg'>{ru ? 'Выберите план' : 'Choose a plan'}</Heading>
        <RadioGroup aria-label={ru ? 'План' : 'Plan'} name='plan' value={plan} onValueChange={setPlan} options={[{ value: 'starter', label: 'Starter' }, { value: 'pro', label: 'Pro' }, { value: 'team', label: 'Team', disabled: true }]} />
        <Separator /><Flex justify='between' align='center' gap={3}><Text size='sm' tone='secondary'>{ru ? 'Выбрано' : 'Selected'}</Text><Badge variant='primary'>{plan === 'starter' ? 'Starter' : 'Pro'}</Badge></Flex>
      </Stack></Card>

      <Box className={`${styles.sample} ${styles.panel}`}><Stack gap={3}>
        <Text size='sm'>{ru ? 'Выравнивание текста' : 'Text alignment'}</Text>
        <Flex gap={2} role='group' aria-label={ru ? 'Выравнивание текста' : 'Text alignment'}>
          {(['left', 'center', 'right'] as const).map((value, index) => <IconButton key={value} variant={alignment === value ? 'primary' : 'secondary'} aria-pressed={alignment === value} aria-label={(ru ? ['По левому краю', 'По центру', 'По правому краю'] : ['Align left', 'Align center', 'Align right'])[index]} onClick={() => setAlignment(value)}>
            <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'><path d='M4 5h16M4 12h16M4 19h16' /><path d={value === 'left' ? 'M4 8.5h10M4 15.5h10' : value === 'center' ? 'M7 8.5h10M7 15.5h10' : 'M10 8.5h10M10 15.5h10'} /></svg>
          </IconButton>)}
        </Flex>
        <Text as='p' size='sm' tone='secondary' style={{ textAlign: alignment as 'left' | 'center' | 'right' }}>{ru ? 'Всё на своём месте.' : 'Everything in its place.'}</Text>
      </Stack></Box>

      <Box className={styles.sample}><Alert title={ru ? 'Доступен новый релиз' : 'A new release is available'}>{ru ? 'Посмотрите, что изменилось.' : 'See what has changed.'}<Box padding={1}><Link as={RouterLink} to='/docs'>{ru ? 'Открыть документацию' : 'Read the docs'} ↗</Link></Box></Alert></Box>

    </Box>
    <Box className={styles.column}>
      <Box className={`${styles.sample} ${styles.panel}`}><Tabs.Root defaultValue='overview'>
        <Tabs.List aria-label={ru ? 'Разделы' : 'Sections'}><Tabs.Trigger value='overview'>{ru ? 'Обзор' : 'Overview'}</Tabs.Trigger><Tabs.Trigger value='details'>{ru ? 'Детали' : 'Details'}</Tabs.Trigger></Tabs.List>
        <Tabs.Content value='overview'><Stack gap={3}><Text size='sm'>{ru ? 'Профиль заполнен на 64%' : 'Your profile is 64% complete'}</Text><Progress value={64} aria-label={ru ? 'Заполнение профиля' : 'Profile completion'} /></Stack></Tabs.Content>
        <Tabs.Content value='details'><Text size='sm' tone='secondary'>{ru ? 'Добавьте фотографию и расскажите немного о себе.' : 'Add a photo and a short bio.'}</Text></Tabs.Content>
      </Tabs.Root></Box>

      <Box className={styles.sample}><Flex gap={2} wrap>
        <Dialog.Root open={profileOpen} onOpenChange={setProfileOpen}>
          <Dialog.Trigger asChild><Button variant='secondary' onClick={() => setDraftName(name)}>{ru ? 'Открыть диалог' : 'Open dialog'}</Button></Dialog.Trigger>
          <Dialog.Content><Dialog.Title>{ru ? 'Редактировать профиль' : 'Edit profile'}</Dialog.Title><Dialog.Description>{ru ? 'Как к вам обращаться?' : 'What should we call you?'}</Dialog.Description>
            <Box as='form' onSubmit={(event) => { event.preventDefault(); if (!draftName.trim()) return; setName(draftName.trim()); setProfileOpen(false); notify(); }}><Stack gap={4}>
              <Field label={ru ? 'Имя' : 'Name'} required><Input name='profile-name' value={draftName} onChange={(event) => setDraftName(event.target.value)} required /></Field>
              <Flex justify='end' gap={2}><Dialog.Close asChild><Button variant='ghost'>{ru ? 'Отмена' : 'Cancel'}</Button></Dialog.Close><Button type='submit'>{ru ? 'Сохранить профиль' : 'Save profile'}</Button></Flex>
            </Stack></Box>
          </Dialog.Content>
        </Dialog.Root>
        <Popover.Root><Popover.Trigger asChild><Button variant='secondary'>{ru ? 'Подсказка' : 'Quick tip'}</Button></Popover.Trigger><Popover.Content aria-label={ru ? 'Подсказка' : 'Quick tip'}><Text size='sm'>{ru ? 'Этот popover закрывается кликом снаружи или клавишей Escape.' : 'Click outside or press Escape to close this popover.'}</Text></Popover.Content></Popover.Root>
      </Flex></Box>

      <Box className={styles.sample}><Alert variant='primary' title={ru ? 'Всё сохранено' : 'All changes saved'}>{ru ? 'Последняя версия уже у вас.' : 'You have the latest version.'}</Alert></Box>

      <Card variant='filled' className={styles.sample} padding={4}><Table.Root aria-label={ru ? 'Недавние файлы' : 'Recent files'}>
        <Table.Caption>{ru ? 'Недавние файлы' : 'Recent files'}</Table.Caption>
        <Table.Head><Table.Row><Table.Header>{ru ? 'Файл' : 'File'}</Table.Header><Table.Header>{ru ? 'Размер' : 'Size'}</Table.Header></Table.Row></Table.Head>
        <Table.Body>{[['tokens.css', '4 KB'], ['theme.json', '12 KB'], ['icons.svg', '28 KB']].map(([file, size]) => <Table.Row key={file}><Table.Cell>{file}</Table.Cell><Table.Cell>{size}</Table.Cell></Table.Row>)}</Table.Body>
      </Table.Root></Card>

      <Box className={`${styles.sample} ${styles.panel}`}><Stack gap={3}>
        <Flex justify='between' align='center' gap={2}><Heading level={3} size='md'>{ru ? 'Хранилище' : 'Storage'}</Heading><Badge>72%</Badge></Flex>
        <Progress value={72} aria-label={ru ? 'Занято в хранилище' : 'Storage used'} />
        <Text size='sm' tone='secondary'>{ru ? '7,2 ГБ из 10 ГБ' : '7.2 GB of 10 GB'}</Text>
      </Stack></Box>

    </Box>
    <Box className={styles.column}>
      <Box className={styles.sample}><Accordion.Root className={styles.solid} type='single' collapsible>
        <Accordion.Item value='themes'><Accordion.Header><Accordion.Trigger>{ru ? 'Можно изменить тему?' : 'Can I change the theme?'}</Accordion.Trigger></Accordion.Header><Accordion.Content><Text size='sm'>{ru ? 'Да. Переключите тему в шапке сайта.' : 'Yes. Use the theme switch in the header.'}</Text></Accordion.Content></Accordion.Item>
        <Accordion.Item value='docs'><Accordion.Header><Accordion.Trigger>{ru ? 'Где посмотреть API?' : 'Where is the API reference?'}</Accordion.Trigger></Accordion.Header><Accordion.Content><Link as={RouterLink} to='/docs'>{ru ? 'Открыть документацию' : 'Open documentation'} ↗</Link></Accordion.Content></Accordion.Item>
      </Accordion.Root></Box>

      <Box className={styles.sample}><Stack gap={3}><Pagination page={page} pageCount={5} siblingCount={0} onPageChange={setPage} previousLabel={ru ? 'Предыдущая страница' : 'Previous page'} nextLabel={ru ? 'Следующая страница' : 'Next page'} getPageLabel={(number) => `${ru ? 'Страница' : 'Page'} ${number}`} /><Text size='sm' tone='secondary'>{ru ? 'Страница' : 'Page'} {page} / 5</Text></Stack></Box>

      <Box className={styles.sample}><Flex align='center' gap={3} wrap><Button variant='secondary' onClick={notify}>{ru ? 'Показать уведомление' : 'Show notification'}</Button><Flex gap={2} align='center' role='status'><Spinner size='sm' /><Text size='sm' tone='secondary'>{ru ? 'Загрузка' : 'Loading'}</Text></Flex></Flex></Box>

      <Card variant='filled' className={styles.sample} padding={5}><Box as='form' onSubmit={(event) => { event.preventDefault(); toast({ title: ru ? 'Приглашение готово' : 'Invitation ready', description: inviteEmail }); }}><Stack gap={4}>
        <Heading level={3} size='lg'>{ru ? 'Пригласить в команду' : 'Invite a teammate'}</Heading>
        <Field label={ru ? 'Рабочая почта' : 'Work email'} required><Input type='email' placeholder='name@team.com' required value={inviteEmail} onChange={(event) => setInviteEmail(event.target.value)} /></Field>
        <Field label={ru ? 'Роль' : 'Role'}><Select value={inviteRole} onChange={(event) => setInviteRole(event.target.value)}><Box as='option' value='editor'>{ru ? 'Редактор' : 'Editor'}</Box><Box as='option' value='viewer'>{ru ? 'Наблюдатель' : 'Viewer'}</Box></Select></Field>
        <Button type='submit'>{ru ? 'Подготовить' : 'Prepare invitation'}</Button>
      </Stack></Box></Card>

      <Box className={`${styles.sample} ${styles.panel}`}><Stack gap={4}>
        <Heading level={3} size='lg'>{ru ? 'В команде' : 'Team activity'}</Heading>
        {[{ name: 'Sana Mori', action: ru ? 'Обновила макет' : 'Updated the design', time: ru ? '2 мин назад' : '2 min ago' }, { name: 'Yuta Aoki', action: ru ? 'Добавил комментарий' : 'Left a comment', time: ru ? '8 мин назад' : '8 min ago' }].map((item) => <Flex gap={3} align='center' key={item.name}>
          <Avatar size='sm' alt={item.name} /><Stack gap={1}><Text size='sm'>{item.action}</Text><Text size='xs' tone='secondary'>{item.name} · {item.time}</Text></Stack>
        </Flex>)}
      </Stack></Box>
    </Box>
  </Box>;
}
