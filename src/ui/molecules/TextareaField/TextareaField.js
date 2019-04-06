import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconLoader, IconSuccess } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment} from '@ui/molecules'
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
  height: 100px;
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const StyledInput = styled.textarea`
  border: none;
  background-color: transparent;
  min-height:100px;
  max-height:100px;
  max-width:100%;
  height:100px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  padding: ${theme.paddings.main}px;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 18px;
  }
`

export const TextareaField = ({
  startAdornment,
  status,
  disabled,
  placeholder,
  label,
  error,
  value,
  tip,
  valid,
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
              ? <FormLabel valid={valid}>{label}</FormLabel>
              :<FormLabel valid={null}>{label}</FormLabel>
            }
            <HBox height={theme.paddings.half} />
          </div>
          : null
      }

      <FieldContainer focused={focused} error={error}>
        <StyledInput
          placeholder={placeholder ? placeholder : ''}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </FieldContainer>
      <HBox height={theme.paddings.half} />
      {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
    </Container>
  )
}

TextareaField.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
