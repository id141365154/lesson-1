import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconLoader, IconSuccess, IconDropdown } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment, Loader } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const Container = styled.div`
  height: 88px;
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
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme, focused, disabled }) =>
  !disabled 
    ? error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite
    : theme.pallete.darkWhite
  }
        solid;
  opacity: ${({disabled})=> disabled ? 0.5 : 1};
    
`

const StyledInput = styled.div`
  border: none;
  background-color: transparent;
  height: 40px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
`


const Placeholder = styled.div`
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 40px;
`
const Value = styled.div`
   color: ${({ theme, disabled }) =>
     disabled ? theme.pallete.lightGray : theme.pallete.nero};
   line-height: 40px;
`

export const SelectField = ({
                            startAdornment,
                            status,
                            disabled,
                            placeholder,
                            label,
                            error,
                            value,
                            tip,
                            valid,
                            onClick,
                            onBlur,
                            onFocus,
                            onKeyPress
                          }) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = e => {
    if (onFocus) {
      onFocus(e)
    }
    setFocused(true)
  }
  const handleClick = e => {
    if (disabled){
      return;
    }
    if (onClick) {
      onClick(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) {
      onBlur(e)
    }
    setFocused(false)
  }

  const handleKeyPres = e =>{
    if (disabled){
      return;
    }
    if (onKeyPress){
      onKeyPress(e);
    }
  }
  return (
    <Container>
      {!error
        ? <FormLabel valid={valid}>{label}</FormLabel>
        :<FormLabel valid={null}>{label}</FormLabel>
      }

      <HBox height={theme.paddings.half} />
      <FieldContainer focused={focused} error={error} disabled={disabled}>
        {startAdornment ? (
          <FormAdornment>{startAdornment}</FormAdornment>
        ) : (
          <VBox />
        )}
        <StyledInput
          tabIndex='0'
          //placeholder={placeholder ? placeholder : ''}
          disabled={disabled}
          //value={value}
          //onChange={e => onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
          onKeyPress={handleKeyPres}
        >
          {value.length == 0 ? (<Placeholder>{placeholder}</Placeholder>) : <Value>{value}</Value>}
        </StyledInput>
        <FormAdornment>
          {status  ? <Loader /> : <IconDropdown />}
        </FormAdornment>
      </FieldContainer>
      <HBox height={theme.paddings.half} />
      {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
    </Container>
  )
}

SelectField.propTypes = {
  status: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,
  startAdornment: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
}
