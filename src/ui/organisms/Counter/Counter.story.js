import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Counter } from './Counter'
import { boolean, select, text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/organisms', module)
  .add(
    'Counter',
    withState({ value: '' })(({ store }) => (
      <Counter
        disabled={boolean('disabled', false)}
        label={text('label', 'Количество')}
        value={number('Value', 0)}
        min={number('Min', 0)}
        max={number('Max', 10)}
        step={number('Step', 2)}
        onChange={action('onChange')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
      />
    )),
  )
