import React from 'react'
import { styled, theme } from '@ui/theme'

const Icon = styled.div`
 height:24px
 width:24px;
 display:flex;
 justify-content:center;
 align-items:center;
`
export const IconDropdown = (color) => (
  <Icon>
    <svg width={16} height={8} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.158 4.244L1.914 0 .5 1.414l5.657 5.657.001-.001.001.001 5.657-5.657L10.402 0 6.158 4.244z"
        fill="#222"
      />
    </svg>
  </Icon>
  )