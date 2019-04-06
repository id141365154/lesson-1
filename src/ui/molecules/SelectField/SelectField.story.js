import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField, TextField } from './SelectField'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add(
  'SelectField',
  ()=>(
    <SelectField
      startAdornment={select(
        'startAdornment',
        {
          Ru: 'ru',
          En: 'en',
          Es: 'es',
          Du: 'du',
          none: null,
        },
        null,
      )}
      status={select(
        'Loading',
        {
          true: true,
          false: false,
        },
        false,
      )}
      disabled={boolean('disabled', false)}
      placeholder={text('placeholder', 'Выберите из списка')}
      label={text('label', 'Язык')}
      error={select(
        'error',
        {
          invalid: 'Вы не выбрали язык',
          none: null,
        },
        null,
      )}
      tip={select(
        'tip',
        {
          tip: 'Укажите язык интерфеса',
          none: null,
        },
        'Укажите язык интерфеса',
      )}
      valid={boolean('valid', false)}
      value={text('value', '')}
      onClick={action('onClick')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
      onKeyPress={action('onKeyPress')}
    />
  )
)
