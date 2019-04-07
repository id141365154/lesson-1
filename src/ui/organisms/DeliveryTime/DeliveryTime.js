import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, TextField } from '@ui/molecules'
import { styled, theme } from '@ui/theme'


const DeliveryTimeField = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:start;
`

const FieldItem = styled.div`
  display:flex;
`

const DeliveryTimeDelimiter = styled.div`
  width:24px;
  height:40px;
  text-align:center;
  line-height:40px;
`

export const DeliveryTime = ({
  label, valid, error, tip, onTimeSet, disabled
}) => {

  const [from, setFrom] = useState('')
  const [fromErr, setFromErr] = useState('')
  const [till, setTill] = useState('')
  const [tillErr, setTillErr] = useState('')
  const [tillDisabled, setTillDisabled] = useState(true)

  const handleTimeSet = (res) => {
      if (onTimeSet) {
        onTimeSet(res)
      }
  }

  const validateTime = (str)=>{
    let res = true
    let t = str.split( ":" )
    if ( +t[0] > 24 || +t[1] > 60 ) {
      res = false
    }
    if (str.length<4){
      res = false
    }

    return res
  }

  const onFromChange = (e)=>{
    let res = e.replace(/\D/g, "")
    res = res.replace(/(\d)(?=(\d{2})+(?!\d))/g, "$1:")
    setTillDisabled(true)
    setTillErr(false)
    if (res.length<=5){
      setFrom(res)
    }

  }

  const onTillChange = (e)=>{
    let res = e.replace(/\D/g, "")
    res = res.replace(/(\d)(?=(\d{2})+(?!\d))/g, "$1:")

    if (res.length>=6){
      return
    }
    setTill(res)
  }

  const onInputBlurHandlerFrom = (e)=>{
    let hasError = false
    if(!validateTime(e.currentTarget.value)){
      setTillDisabled(true)
      setFromErr('Некорректно')
    }else{
      setFromErr('')
      setTillDisabled(false)
      setFromErr('')
    }
  }

  const onInputBlurHandlerTill = (e)=>{
    let t = till.split( ":" );
    let f = from.split( ":" );
    let hasError = false;
    if ( +t[0] < +f[0] || +t[1] < +f[1] ) {
      hasError = true
    }

    if(!validateTime(e.currentTarget.value)){
      hasError = true
    }

    hasError ? setTillErr('Некорректно') : setTillErr('')

    if(!hasError){
      timeSetMakeResult();
    }
  }

  const timeSetMakeResult = (e)=>{
    let res = {
      from: from,
      till: till
    }
    onTimeSet(res)
  }

  return (
    <>
      <FormLabel valid={valid}>{label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <DeliveryTimeField>
        <FieldItem>
          <TextField
            startAdornment={'с'}
            onChange={onFromChange}
            onBlur={onInputBlurHandlerFrom}
            value={from}
            error={fromErr}
            disabled={disabled}
          />
        </FieldItem>
        <VBox width={theme.paddings.half}/>
        <DeliveryTimeDelimiter>—</DeliveryTimeDelimiter>
        <VBox width={theme.paddings.half}/>
        <FieldItem>
          <TextField
            startAdornment={'до'}
            onChange={onTillChange}
            onBlur={onInputBlurHandlerTill}
            value={till}
            error={tillErr}
            disabled={ disabled ? disabled : tillDisabled}
          />
        </FieldItem>
      </DeliveryTimeField>
      {error
        ?<>
          <HBox height={theme.paddings.half} />
          <InputError>{error}</InputError>
        </>
        :<>
          {tip
            ? <>
                <HBox height={theme.paddings.half} />
                <InputTip>{tip}</InputTip>
              </>
            : null
          }
        </>
      }
    </>
  )
}

DeliveryTime.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.object.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,

  onSetTime: PropTypes.func
}
