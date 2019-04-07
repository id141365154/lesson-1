import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('CodeConfirm', () => {
  return (
    <PageTemplate>
      <Header title="Введите код" />
      <Divider />
      <Flex1>
        <Wrapper>
          <HBox height={9} />
          <Body2>На указанный телефон выслан код подтверждения</Body2>
          <HBox height={20} />
          <TextField
            label="Код"
            placeholder="1255"
            onChange={action('onChange')}
            value=""
            error={select(
              'Ошибка валидации',
              {
                invalid: 'Неверный код подтверждения',
                none: null,
              },
              null,
            )}
            valid={select(
              'Валидность поля',
              {
                valid: true,
                none: null,
              },
              null,
            )}
            status={select(
              'Статус отправки',
              {
                loading: 'loading',
                success: 'success',
                none: null,
              },
              null,
            )}
          />
          <HBox height={theme.paddings.double} />
          <RequestStatus
            success={text('Запрос. Успех', 'Код успешно отправлен')}
            error={text('Запрос. Ошибка', 'Произошла неизвестная ошибка')}
          />
        </Wrapper>
      </Flex1>
      <Wrapper>
        <ButtonAccent onPress={action('press')}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
})
