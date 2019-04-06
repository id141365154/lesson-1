import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'
import { IconValid, VBox } from '@ui/atoms'
import { InputLabel } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 16px;
  min-height: 16px;
`

export const FormLabel = ({ children, valid }) => {
  return (
    <Container>
      <InputLabel>{children ? children : ' '}</InputLabel>
      <VBox width={theme.paddings.half}/>
      {valid ? <IconValid /> : null}
    </Container>
  )
}

FormLabel.propTypes = {
  children: PropTypes.node,
  valid: PropTypes.bool,
}

FormLabel.defaultProps = {
  valid: false,
}
