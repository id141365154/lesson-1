import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme, keyframesList } from '@ui/theme'
import {IconLoader} from '@ui/atoms'

const Container = styled.div`
  width:18px;
  height: 18px;
  text-align:center;
  animation: ${keyframesList.loading} 1s linear infinite
`

export const Loader = ({ loading, color }) => {
  let colorDic = {
    pink: theme.pallete.radicalRed,
    black: theme.pallete.nero,
    white: theme.pallete.white
  }
  return (
    <Container>
      <IconLoader
        color={ typeof color === 'string' ? colorDic[color] : colorDic.pink}
      ></IconLoader>
    </Container>
  )
}

Loader.propTypes = {
  color: PropTypes.oneOf(['pink', 'black','white']),
}