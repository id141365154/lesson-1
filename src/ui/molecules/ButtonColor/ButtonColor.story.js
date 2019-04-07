import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonColor } from './ButtonColor'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('ButtonColor', () => (
  <ButtonColor
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    onPress={action('press')}
  >
    Button
  </ButtonColor>
))
