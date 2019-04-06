import styled, { keyframes } from 'styled-components';

export const keyframesList = {
  'loading':keyframes`
              from {
                transform:rotateZ(0)
              }
              to {
                transform:rotateZ(359deg)
              }
            `
}