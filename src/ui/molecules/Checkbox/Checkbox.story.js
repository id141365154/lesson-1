import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add(
  'Checkbox',
  ()=>(
    <Checkbox
      disabled={boolean('Disabled', false)}
      checked={boolean('Checked', false)}

      onClick={action('onClick')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
    />
  )
)
