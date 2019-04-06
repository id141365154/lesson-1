import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextareaField } from './TextareaField'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add(
  'TextareaField',
  withState({ value: '' })(({ store }) => (
    <TextareaField
      disabled={boolean('disabled', false)}
      placeholder={text('placeholder', 'Описание проблемы')}
      label={text('label', 'На что жалуетесь?')}
      error={select(
        'error',
        {
          invalid: 'Опишите проблему',
          none: null,
        },
        null,
      )}
      tip={select(
        'tip',
        {
          tip: 'Подробно описание вашей проблемы',
          none: null,
        },
        null,
      )}
      valid={boolean('valid', false)}
      value={store.state.value}
      onChange={value => store.set({ value })}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
    />
  )),
)
