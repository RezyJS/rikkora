import { useState } from 'react';
import {
  Box,
  Stack,
  Field,
  Textarea,
  Flex,
  Button,
  Text,
  useToast,
} from '@rikkora/ui';
import { usePreferences } from '../../../preferences/PreferencesContext';
import styles from '../ShowcaseScene.module.css';

export function CommentExample() {
  const { language } = usePreferences();
  const ru = language === 'ru';
  const { toast } = useToast();
  const [comment, setComment] = useState('');
  const [lastComment, setLastComment] = useState('');

  return (
    <Box className={`${styles.sample} ${styles.panel}`}>
      <Box
        as='form'
        onSubmit={(event) => {
          event.preventDefault();
          if (!comment.trim()) return;
          setLastComment(comment.trim());
          setComment('');
          toast({ title: ru ? 'Комментарий добавлен' : 'Comment added' });
        }}
      >
        <Stack gap={3}>
          <Field label={ru ? 'Комментарий' : 'Comment'}>
            <Textarea
              rows={3}
              placeholder={ru ? 'Что думаете?' : 'What do you think?'}
              required
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </Field>
          <Flex justify='end'>
            <Button
              size='sm'
              type='submit'
            >
              {ru ? 'Отправить' : 'Send'}
            </Button>
          </Flex>
          {lastComment && (
            <Text
              as='p'
              size='sm'
              role='status'
              className={styles.userText}
            >
              {lastComment}
            </Text>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
