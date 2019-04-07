import React from 'react'
import PropTypes from 'prop-types'
import { theme, styled } from '@ui/theme'
import { ButtonText } from '@ui/atoms/Typography'
import { Loader } from '@ui/molecules'

const Button = styled('div')`
  background:
    ${({ disabled, theme, loading }) =>
  loading
    ? theme.pallete.radicalRed
    : disabled
    ? theme.pallete.silver
    : theme.pallete.radicalRed
  };
  border: 2px solid
    ${({ disabled, theme, loading }) =>
      loading
        ? theme.pallete.radicalRed
        : disabled
        ? theme.pallete.silver
        : theme.pallete.radicalRed
    };
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 4px;
`

export const ButtonColor = ({ loading, disabled, children, onPress }) => (
  <Button
    disabled={disabled}
    loading={loading}
    onClick={loading || disabled ? () => undefined : onPress}
  >
    {loading ? (
      <Loader color={'white'} />
    ) : (
      <ButtonText
        color={disabled ? theme.pallete.lightGray : theme.pallete.white}
      >
        {children}
      </ButtonText>
    )}
  </Button>
)

ButtonColor.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
