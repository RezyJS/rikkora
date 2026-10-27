import { Button, ButtonGroup, ConfirmButton, DropdownMenu, HoldToConfirm, SplitButton, Stack, Text, ToggleButton } from '@rikkora/ui';
import type { AdditionalExample } from '@/entities/documentation';
import type { ExampleRenderContext } from './types';

export function renderButtonExample(name: AdditionalExample, { ru, selection, setSelection }: ExampleRenderContext) {
  switch (name) {
    case 'ToggleButton': return <ToggleButton>{ru ? 'Жирный' : 'Bold'}</ToggleButton>;
    case 'ButtonGroup': return <ButtonGroup aria-label={ru ? 'Действия' : 'Actions'}>
      <Button variant='outline'>{ru ? 'Сохранить' : 'Save'}</Button>
      <Button variant='outline'>{ru ? 'Отмена' : 'Cancel'}</Button>
    </ButtonGroup>;
    case 'SplitButton': return <Stack>
      <SplitButton menuLabel={ru ? 'Другие действия' : 'More actions'} onClick={() => setSelection(ru ? 'Сохранено' : 'Saved')}
        menu={<DropdownMenu.Item onSelect={() => setSelection(ru ? 'Выбрано «Сохранить как»' : 'Save as selected')}>{ru ? 'Сохранить как…' : 'Save as…'}</DropdownMenu.Item>}>
        {ru ? 'Сохранить' : 'Save'}
      </SplitButton><Text role='status'>{selection}</Text>
    </Stack>;
    case 'ConfirmButton': return <Stack>
      <ConfirmButton title={ru ? 'Подтвердить действие?' : 'Confirm the action?'}
        description={ru ? 'Демонстрация подтверждения.' : 'Confirmation demonstration.'}
        confirmText={ru ? 'Подтвердить' : 'Confirm'} cancelText={ru ? 'Отмена' : 'Cancel'}
        pendingText={ru ? 'Выполняем…' : 'Confirming…'} errorText={ru ? 'Не удалось выполнить действие.' : 'Could not complete the action.'}
        onConfirm={() => setSelection(ru ? 'Подтверждено' : 'Confirmed')}>
        {ru ? 'Подтвердить действие' : 'Confirm action'}
      </ConfirmButton><Text role='status'>{selection}</Text>
    </Stack>;
    case 'HoldToConfirm': return <Stack>
      <HoldToConfirm onConfirm={() => setSelection(ru ? 'Подтверждено' : 'Confirmed')}
        instructions={ru ? 'Удерживайте кнопку, Enter или Space. Отпустите или нажмите Escape для отмены.' : undefined}
        holdingText={ru ? 'Удерживайте…' : 'Keep holding…'} confirmedText={ru ? 'Подтверждено' : 'Confirmed'}>
        {ru ? 'Удерживайте для подтверждения' : 'Hold to confirm'}
      </HoldToConfirm><Text role='status'>{selection}</Text>
    </Stack>;
  }
}
