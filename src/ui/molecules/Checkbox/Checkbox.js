import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'

const Box = styled.div`
  height: 20px;
  width:20px;
  display: flex;
  border-radius: 2px;
  border: 1px solid ${theme.pallete.controlsOutline};
`

const Container = styled.button``

const CheckSvg = ({disabled}) => (
  <svg width={20} height={20} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2 10l3.5 3.5 8.833-8.833L17.5 5.833l-10 10-4.667-4.666L4 10z"
      fill={disabled ? theme.pallete.controlsOutline : theme.pallete.radicalRed}
    />
  </svg>
)


export const Checkbox = ({checked, disabled, onClick, onFocus, onBlur}) => {
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
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {checked
        ? <CheckSvg disabled={disabled} />
        : <Box/>
      }
    </Container>
  )
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,

  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
