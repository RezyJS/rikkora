import { IconArrowUpRight } from '@tabler/icons-react';
import { useProfileExample } from './examples/useProfileExample';
import { ProfileDialogExample } from './examples/ProfileDialogExample';
import { ProfileCardExample } from './examples/ProfileCardExample';
import { ActionButtonsExample } from './examples/ActionButtonsExample';
import { PaginationExample } from './examples/PaginationExample';
import { TimezoneExample } from './examples/TimezoneExample';
import { TextAlignmentExample } from './examples/TextAlignmentExample';
import { PlanExample } from './examples/PlanExample';
import { QuantityExample } from './examples/QuantityExample';
import { ComponentSearchExample } from './examples/ComponentSearchExample';
import { InvitationExample } from './examples/InvitationExample';
import { CommentExample } from './examples/CommentExample';
import { ReleaseChecklistExample } from './examples/ReleaseChecklistExample';
import { NotificationSettingsExample } from './examples/NotificationSettingsExample';
import { SignInExample } from './examples/SignInExample';
import { Breadcrumbs, Accordion, Alert, Avatar, Badge, Box, Button, Card, Flex, Heading, Link, Popover, Progress, Spinner, Stack, Table, Tabs, Text, useToast } from '@rikkora/ui';
import { Link as RouterLink } from 'react-router';
import { usePreferences } from '@/shared/model/preferences';
import styles from './ShowcaseScene.module.css';

export function ShowcaseScene() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { toast } = useToast();
  const profile = useProfileExample();
  const notify = () => toast({ title: ru ? 'Изменения сохранены' : 'Changes saved', description: ru ? 'Можно продолжать работу.' : 'You can keep working.' });

  return <Box className={styles.scene} aria-label={ru ? 'Примеры интерфейсов' : 'Interface examples'}>
    <Box className={styles.column}>
      <SignInExample />

      <ActionButtonsExample onSave={notify} />

      <ComponentSearchExample />

      <QuantityExample />

      <Box className={styles.sample}><Breadcrumbs aria-label={ru ? 'Путь к компонентам' : 'Component path'} className={styles.inlineSurface}
        separator={<Text as='span' tone='tertiary'>/</Text>}>
        <Link as={RouterLink} to='/docs'>{ru ? 'Документация' : 'Docs'}</Link><Text size='sm'>{ru ? 'Компоненты' : 'Components'}</Text>
      </Breadcrumbs></Box>

    </Box>
    <Box className={styles.column}>
      <Box className={styles.sample}><Flex gap={2} wrap><Badge>{ru ? 'Черновик' : 'Draft'}</Badge><Badge variant='primary'>{ru ? 'Опубликовано' : 'Published'}</Badge><Badge variant='danger'>{ru ? 'Ошибка' : 'Error'}</Badge></Flex></Box>

      <ProfileCardExample profile={profile} onSave={notify} />

      <NotificationSettingsExample />

      <TimezoneExample />

      <ReleaseChecklistExample />

    </Box>
    <Box className={styles.column}>
      <CommentExample />

      <Box className={styles.sample}><Flex align='center' gap={3} wrap><Flex gap={2}><Avatar size='sm' alt='Rikka Inohana' /><Avatar size='sm' alt='Sana Mori' /><Avatar size='sm' alt='Yuta Aoki' /></Flex><Text size='sm' tone='secondary'>{ru ? 'И ещё 12 участников' : 'And 12 more members'}</Text></Flex></Box>

      <PlanExample />

      <TextAlignmentExample />

      <Box className={styles.sample}><Alert title={ru ? 'Доступен новый релиз' : 'A new release is available'}>{ru ? 'Посмотрите, что изменилось.' : 'See what has changed.'}<Box padding={1}><Link as={RouterLink} to='/docs'>{ru ? 'Открыть документацию' : 'Read the docs'} <IconArrowUpRight size={14} aria-hidden='true' focusable='false' /></Link></Box></Alert></Box>

    </Box>
    <Box className={styles.column}>
      <Box className={`${styles.sample} ${styles.panel}`}><Tabs.Root defaultValue='overview'>
        <Tabs.List aria-label={ru ? 'Разделы' : 'Sections'}><Tabs.Trigger value='overview'>{ru ? 'Обзор' : 'Overview'}</Tabs.Trigger><Tabs.Trigger value='details'>{ru ? 'Детали' : 'Details'}</Tabs.Trigger></Tabs.List>
        <Tabs.Content value='overview'><Stack gap={3}><Text size='sm'>{ru ? 'Профиль заполнен на 64%' : 'Your profile is 64% complete'}</Text><Progress value={64} aria-label={ru ? 'Заполнение профиля' : 'Profile completion'} /></Stack></Tabs.Content>
        <Tabs.Content value='details'><Text size='sm' tone='secondary'>{ru ? 'Добавьте фотографию и расскажите немного о себе.' : 'Add a photo and a short bio.'}</Text></Tabs.Content>
      </Tabs.Root></Box>

      <Box className={styles.sample}><Flex gap={2} wrap>
        <ProfileDialogExample profile={profile} onSave={notify} />
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
        <Accordion.Item value='docs'><Accordion.Header><Accordion.Trigger>{ru ? 'Где посмотреть API?' : 'Where is the API reference?'}</Accordion.Trigger></Accordion.Header><Accordion.Content><Link as={RouterLink} to='/docs'>{ru ? 'Открыть документацию' : 'Open documentation'} <IconArrowUpRight size={14} aria-hidden='true' focusable='false' /></Link></Accordion.Content></Accordion.Item>
      </Accordion.Root></Box>

      <PaginationExample />

      <Box className={styles.sample}><Flex align='center' gap={3} wrap><Button variant='secondary' onClick={notify}>{ru ? 'Показать уведомление' : 'Show notification'}</Button><Flex gap={2} align='center' role='status'><Spinner size='sm' /><Text size='sm' tone='secondary'>{ru ? 'Загрузка' : 'Loading'}</Text></Flex></Flex></Box>

      <InvitationExample />

      <Box className={`${styles.sample} ${styles.panel}`}><Stack gap={4}>
        <Heading level={3} size='lg'>{ru ? 'В команде' : 'Team activity'}</Heading>
        {[{ name: 'Sana Mori', action: ru ? 'Обновила макет' : 'Updated the design', time: ru ? '2 мин назад' : '2 min ago' }, { name: 'Yuta Aoki', action: ru ? 'Добавил комментарий' : 'Left a comment', time: ru ? '8 мин назад' : '8 min ago' }].map((item) => <Flex gap={3} align='center' key={item.name}>
          <Avatar size='sm' alt={item.name} /><Stack gap={1}><Text size='sm'>{item.action}</Text><Text size='xs' tone='secondary'>{item.name} · {item.time}</Text></Stack>
        </Flex>)}
      </Stack></Box>
    </Box>
  </Box>;
}
