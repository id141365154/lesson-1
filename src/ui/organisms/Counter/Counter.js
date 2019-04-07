import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, TextField } from '@ui/molecules'
import { styled, theme } from '@ui/theme'


const Container = styled.div`
  display:flex;
  width:140px;
  border-radius:4px;
  overflow:hidden;
  user-select: none;
  border: 1px solid ${({focused})=> focused ? theme.pallete.controlsOutline : 'transparent' }
  outline:none;
`

const Handel = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-around;
  width:40px;
  height:40px;
  text-align:center;
  line-height:40px;
  background: ${({disabled})=>
  disabled
    ? theme.pallete.silver
    : theme.pallete.nero
  }
`

const Value = styled.div`
  height:40px;
  width:60px;
  text-align:center;
  font-size:16px;
  line-height:40px;
  background: ${theme.pallete.darkWhite};
  color: ${({disabled})=>
    disabled
        ? theme.pallete.lightGray
        : theme.pallete.nero
  }
`


const SvgMinus = ({disabled}) => (
  <svg width={12} height={2} fill="none">
    <path fill={disabled ? theme.pallete.lightGray : theme.pallete.white} d="M0 2V0h12v2z" />
  </svg>
)

const SvgPlus = ({disabled}) => (
  <svg width={12} height={12} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0H5v5H0v2h5v5h2V7h5V5H7V0z"
      fill={disabled ? theme.pallete.lightGray : theme.pallete.white}
    />
  </svg>
)



export const Counter = ({
  disabled,
  label,
  value,
  min,
  max,
  step,
  onChange,
  onClick,
  onFocus,
  onBlur
}) => {

  const [sValue, setValue] = useState(value ? value : 0)
  const [sMinDisabled, setMinDisabled] = useState(sValue <= min)
  const [sPlusDisabled, setPlusDisabled] = useState(sValue >= max)

  const [focused, setFocused] = useState(false)

  step = step === null  ? 1 : step;

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

  const handlePlusClick = (e) => {
    if (disabled) {return}
    let newVal = Number(sValue) + step
    setPlusDisabled(false)
    setMinDisabled(false)
    if (max !== null){
      if (newVal >= max) {
        setPlusDisabled(true)
        if (newVal === max){
          onChange({
            prev: sValue,
            value: newVal
          })
          setValue(newVal)
        }
      }else{
        onChange({
          prev: sValue,
          value: newVal
        })
        setValue(newVal)
      }
    } else{
      onChange({
        prev: sValue,
        value: newVal
      })
      setValue(newVal)
    }
  }

  const handleMinusClick = (e) => {
    if (disabled) {return}
    let newVal = Number(sValue) - step
    setPlusDisabled(false)
    setMinDisabled(false)
    if ( min !== null){
      if (newVal <= min){
        setMinDisabled(true)
        if (newVal === min){
          onChange({
            prev: sValue,
            value: newVal
          })
          setValue(newVal)
        }
      }else{
        onChange({
          prev: sValue,
          value: newVal
        })
        setValue(newVal)
      }
    } else{
      onChange({
        prev: sValue,
        value: newVal
      })
      setValue(newVal)
    }
  }

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <Container
        focused={focused}
        tabIndex='0'
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <Handel
          disabled={disabled ? disabled : sMinDisabled}
          onClick={handleMinusClick}
        >
            <SvgMinus
              disabled={disabled ? disabled : sMinDisabled}
            />
        </Handel>
        <Value disabled={disabled}>{sValue}</Value>
        <Handel
          disabled={disabled ? disabled : sPlusDisabled}
          onClick={handlePlusClick}
        >
          <SvgPlus
            disabled={disabled ? disabled : sPlusDisabled}
          />
        </Handel>
      </Container>
    </>
  )
}

Counter.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,

  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}
