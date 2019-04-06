import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { RequestStatus } from './RequestStatus'


storiesOf('ui/molecules', module).add('RequestStatus', () => (
  <RequestStatus
    success={text('Success msg', 'Код успешно отправлен')}
    error={text('Error msg', 'Произошла неизвестная ошибка')}
  />
))
