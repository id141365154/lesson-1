import React from 'react'
import { storiesOf } from '@storybook/react'
import { CheckboxWithText } from './CheckboxWithText'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add(
  'CheckboxWithText',
  withState({ checked: false })(({ store }) => (
    <CheckboxWithText
      text={text('Text', 'Со всеми <a href=#>sdsd</a> согласен вторая строка')}
      disabled={boolean('Disabled', false)}
      checked={boolean('Checked', store.state.checked)}

      onClick={()=>{
        action('onClick')
        store.state.checked ? store.set({checked:false}) : store.set({checked: true})
      }}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
    />
  )),
  {knobs: {
    escapeHTML: false
  }}
)



