import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { Loader } from './Loader'


storiesOf('ui/molecules', module).add('Loader', () => (
  <Loader
    loading={select('loading', {
      "Y": true,
      "N" : false
    }, true)}
    color={select('color', {
      "Pink": 'pink',
      "Black": 'black',
      "White": 'white',
    }, 'pink')}
  />
))
