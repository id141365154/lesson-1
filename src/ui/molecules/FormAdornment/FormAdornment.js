import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

const AdornmentContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink:0;
`

const AdornmentString = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.pallete.lightGray};
`

export const FormAdornment = ({ children }) => (
  <AdornmentContainer>
    {typeof children === 'string' ? (
      <AdornmentString>{children}</AdornmentString>
    ) : (
      children
    )}
  </AdornmentContainer>
)

FormAdornment.propTypes = {
  children: PropTypes.node,
}
