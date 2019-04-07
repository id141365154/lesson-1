import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme, color }) =>
    color ? color : theme.pallete.divider};
`

Divider.propTypes = {
  color: PropTypes.string,
}
