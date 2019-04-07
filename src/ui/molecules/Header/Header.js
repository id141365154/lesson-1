import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@ui/theme'
import { IconBack, IconClose } from '@ui/atoms'
import { HLevel4 } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 46px;
`

const IconContainer = styled.div`
  width: 40px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
`

const TitleContainer = styled.div`
  text-align: center;
`

export const Header = ({ icon, title, action }) => (
  <Container>
    <IconContainer onClick={action ? action : () => undefined}>
      {icon === 'back' ? <IconBack /> : icon === 'close' ? <IconClose /> : null}
    </IconContainer>
    <TitleContainer>{title ? <HLevel4>{title}</HLevel4> : null}</TitleContainer>
    <IconContainer />
  </Container>
)

Header.propTypes = {
  icon: PropTypes.oneOf(['back', 'close']),
  title: PropTypes.string,
  action: PropTypes.func,
}
