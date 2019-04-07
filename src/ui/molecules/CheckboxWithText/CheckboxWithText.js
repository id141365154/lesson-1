import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'
import { VBox} from '@ui/atoms'
import { Checkbox } from '@ui/molecules'

const Container = styled.div`
  display:flex;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.pallete.gray2}
`

export const CheckboxWithText = ({text, checked, disabled, onClick, onFocus, onBlur}) => {
  const handleFocus = e => {
    if (onFocus) {
      onFocus(e)
    }
  }
  const handleClick = e => {
    if (!disabled){
      if (onClick) {
        onClick(e)
      }
    }
  }
  const handleBlur = e => {
    if (onBlur) {
      onBlur(e)
    }
  }

  return (
    <Container
      disabled={disabled}
    >
      <Checkbox
        checked={checked}
        disabled={disabled}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <VBox width={20}/>
      <Text disabled={disabled}>{text}</Text>
      <VBox width={25}/>
    </Container>
  )
}

CheckboxWithText.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  text: PropTypes.node.isRequired,

  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
