import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconLoader, IconSuccess } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment, Loader } from '@ui/molecules'
import { styled, theme } from '@ui/theme'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FieldContainer = styled.div`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.paddings.main};
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  height: 40px;
  width:100%;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 44px;
  }
`

export const TextField = ({
  startAdornment,
  endAdornment,
  status,
  disabled,
  placeholder,
  label,
  error,
  value,
  tip,
  valid,
  type,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = e => {
    if (onFocus) {
      onFocus(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) {
      onBlur(e)
    }
    setFocused(false)
  }
  return (
    <Container>
      {
        label
          ? <div>
            {!error
              ? <>
                  <FormLabel valid={valid}>{label}</FormLabel>
                  <HBox height={theme.paddings.half} />
                </>
              :<>
                  <FormLabel valid={null}>{label}</FormLabel>
                  <HBox height={theme.paddings.half} />
               </>
            }
          </div>
          : null
      }
      <FieldContainer focused={focused} error={error}>
        {startAdornment ? (
          <FormAdornment>{startAdornment}</FormAdornment>
        ) : (
          <VBox />
        )}
        <StyledInput
          placeholder={placeholder ? placeholder : ''}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type ? type : 'text'}
        />
        {status
          ?<FormAdornment>

            {status === 'loading' ? <Loader /> : null}
            {status === 'success' ? <IconSuccess /> : null}
          </FormAdornment>
          : endAdornment
            ? <FormAdornment>{endAdornment}</FormAdornment>
            : <VBox />

        }

      </FieldContainer>

      {error
        ?<>
            <HBox height={theme.paddings.half} />
            <InputError>{error}</InputError>
         </>
        :<>
          {tip
            ? <>
              <HBox height={theme.paddings.half}/>
              <InputTip>{tip}</InputTip>
            </>
            : null
          }
         </>
        ?<HBox height={theme.paddings.double} />: null
      }
    </Container>
  )
}

TextField.propTypes = {
  status: PropTypes.oneOf(['loading', 'success']),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  type: PropTypes.oneOf(['text','email','tel']),

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
