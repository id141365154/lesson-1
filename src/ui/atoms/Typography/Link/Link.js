import { styled } from '@ui/theme'

const _Link = styled.a`
  color: ${({ theme }) => theme.pallete.lightGray};
  font-size: 12px;
  line-height: 14px;
`

export const Link = ({href}) => {


  return (
    <_Link
      href={href}
    ></_Link>
  )
}