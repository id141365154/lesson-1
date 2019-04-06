import React from 'react'
import { storiesOf } from '@storybook/react'
import { DeliveryTime } from './DeliveryTime'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/organisms', module).add(
  'DeliveryTime',
  withState({ value: '' })(({ store }) => (
    <DeliveryTime
      disabled={boolean('disabled', false)}
      label={text('label', 'Время доставки')}
      error={select(
        'error',
        {
          invalid: 'Укажите время доставки',
          none: null,
        },
        null,
      )}
      tip={select(
        'tip',
        {
          tip: 'Когда привезти вкусную пиццу',
          none: null,
        },
        null,
      )}
      valid={boolean('valid', false)}
      value={store.state.value}
      //onChange={value => store.set({ value })}
      onTimeSet={action('onTimeSet')}
    />
  )),
)
