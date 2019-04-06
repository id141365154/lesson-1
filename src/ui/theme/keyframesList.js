import styled, { keyframes } from 'styled-components';

export const keyframesList = {
  'loading':keyframes`
              from {
                transform:rotateZ(0)
              }
              to {
                transform:rotateZ(359deg)
              }
            `,
  'msg_appearance':keyframes`
              from {
                opacity:0;
                transform:translateY(15px);
              }
              to {
                opacity:1;
                transform:translateY(0);
              }
            `
}