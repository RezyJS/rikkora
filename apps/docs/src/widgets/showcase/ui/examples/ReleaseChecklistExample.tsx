import { useState } from 'react';
import {
  Card,
  Stack,
  Flex,
  Heading,
  Badge,
  Checkbox,
  Text,
  Progress,
} from '@rikkora/ui';
import { usePreferences } from '@/shared/model/preferences';
import styles from '../ShowcaseScene.module.css';

export function ReleaseChecklistExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const [tasks, setTasks] = useState([true, false, false]);

  return (
    <Card
      variant='filled'
      className={styles.sample}
      padding={5}
    >
      <Stack gap={4}>
        <Flex
          justify='between'
          align='center'
        >
          <Heading
            level={3}
            size='lg'
          >
            {ru ? 'Перед релизом' : 'Before release'}
          </Heading>
          <Badge>{tasks.filter(Boolean).length} / 3</Badge>
        </Flex>
        {[
          ru ? 'Собрать компоненты' : 'Build components',
          ru ? 'Проверить клавиатуру' : 'Check keyboard navigation',
          ru ? 'Обновить документацию' : 'Update documentation',
        ].map((task, index) => (
          <Flex
            key={task}
            as='label'
            align='center'
            gap={3}
          >
            <Checkbox
              checked={tasks[index]}
              onChange={(event) =>
                setTasks(
                  tasks.map((checked, taskIndex) =>
                    taskIndex === index ? event.target.checked : checked,
                  ),
                )
              }
            />
            <Text size='sm'>{task}</Text>
          </Flex>
        ))}
        <Progress
          value={(tasks.filter(Boolean).length / tasks.length) * 100}
          aria-label={ru ? 'Готовность к релизу' : 'Release readiness'}
        />
      </Stack>
    </Card>
  );
}
