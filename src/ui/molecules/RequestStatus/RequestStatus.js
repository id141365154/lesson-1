import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme, keyframesList } from '@ui/theme'

const Container = styled.div`
  padding 0 ${theme.paddings.half}px;
  text-align:center;
  font-size:14px;
  color: ${(error)=>  error.error ? theme.pallete.errorColor : theme.pallete.successColor }
  animation: ${keyframesList.msg_appearance} 0.3s ease-out;
`

export const RequestStatus = ({ success, error }) => {
  return (
      (error || success) ? (
      <Container
        error={error}
      >
        {error ? error : success}
      </Container>) : null
  )
}

RequestStatus.propTypes = {
  success: PropTypes.string,
  error: PropTypes.string,
}