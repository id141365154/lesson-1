import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider, Center} from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import { Body2, Link } from '@ui/atoms/Typography'
import { Header, TextField, TextareaField, ButtonAccent, RequestStatus, SelectField, Loader, CheckboxWithText } from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'
import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('Checkout', () => {
  return (
    <PageTemplate>
      <Header icon={'back'} />
      <Flex1>
        <Wrapper>
          <SelectField
            label={'Страна 1'}
            value={'Россия'}
          />
          <HBox/>
          <SelectField
            label={'Страна 2'}
            value={'Англия'}
          />
          <HBox/>
        {boolean('Поля ввода суммы', false)
        ? <>
            <Divider/>
            <HBox/>
              <TextField
                label={'Российский рубль (RUB)'}
                value={''}
                endAdornment={'₽'}
                type={'tel'}
              />
              <TextField
                label={'Фунт стерлингов (GBP)'}
                value={''}
                endAdornment={'£'}
                type={'tel'}
              />
          </>
        : null
        }

          {boolean('loader', false)
          ? <>
              <Center>
                <Loader/>
              </Center>
              <HBox/>
            </>
          : null
          }

          <DeliveryTime
            label={'Время доставки'}
            onTimeSet={action('onTimeSet')}

          />

          <TextareaField
            label={'Комментарий'}
            value={''}
            placeholder={'Например, прошу представляться при звонке'}
            onChange={()=>{}}
          />
          <HBox height={theme.paddings.double} />
          <CheckboxWithText
            text={<text>Со всеми <Link href="#" text="условиями"/> согласен вторая строка</text>}
          />
        </Wrapper>

      </Flex1>
      <Wrapper>
        <ButtonAccent onPress={action('press')}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
})
