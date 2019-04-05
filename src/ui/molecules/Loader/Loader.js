import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

const Container = styled.div`
  width:16px;
  height: 16px;
  background: #ccc;
  
`


export const Loader = ({ loading }) => {
  return (
    <Container>
      {loading ? (
        'Loading...'
      ) : ''}

    </Container>
  )
}

Loader.propTypes = {
  loading: PropTypes.bool,
}

/*
Loader.defaultProps = {
  valid: false,
}*/
