import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme, keyframesList } from '@ui/theme'
import {IconLoader} from '@ui/atoms'

console.log('keyfrmaes',keyframesList)

const Container = styled.div`
  width:18px;
  height: 18px;
  text-align:center;
  animation: ${keyframesList.loading} 1s linear infinite
`

export const Loader = ({ loading, color }) => {
  console.log('color', color)
  let colorDic = {
    pink: theme.pallete.radicalRed,
    black: theme.pallete.nero,
    white: theme.pallete.white
  }
  return (
    loading ? (
    <Container>
      <IconLoader
        color={colorDic[color]}
      ></IconLoader>
    </Container>) : null
  )
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.oneOf(['pink', 'black','white']),
}

/*
Loader.defaultProps = {
  valid: false,
}*/
