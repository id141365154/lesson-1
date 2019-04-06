import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { Loader } from './Loader'


storiesOf('ui/molecules', module).add('Loader', () => (
  <Loader
    color={select('color', {
      "Pink": 'pink',
      "Black": 'black',
      "White": 'white',
    }, 'pink')}
  />
))
