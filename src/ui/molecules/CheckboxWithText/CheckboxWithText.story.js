import React from 'react'
import { storiesOf } from '@storybook/react'
import { CheckboxWithText } from './CheckboxWithText'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'
import { Link} from '@ui/atoms/Typography'

storiesOf('ui/molecules', module).add(
  'CheckboxWithText',
  withState({ checked: false })(({ store }) => (
    <CheckboxWithText
      text={<text>Со всеми <Link href="#" text="условиями"/> согласен вторая строка</text>}
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



