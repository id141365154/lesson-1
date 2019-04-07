import React from 'react'
import { styled } from '@ui/theme'
import PropTypes from 'prop-types'
import { CheckboxWithText } from '../../../molecules'

const _Link = styled.a`
  color: ${({ theme }) => theme.pallete.radicalRed};
  font-size: 14px;
  text-decoration:none;
`

export const Link = ({href, text}) => {

  return (
    <_Link
      href={href}
    >{text}</_Link>
  )
}


Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}