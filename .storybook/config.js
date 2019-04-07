import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Normalize } from 'styled-normalize'

import { theme, GlobalStyles, styled, ThemeProvider } from '@ui/theme'
import { withInfo } from '@storybook/addon-info'

const req = require.context('../src', true, /.story.js$/)


const StoryBookContainer = styled.div`
  padding: 16px;
  min-height: 250px;
  width: 436px;
  background-color: #fcfcfc;
  display: flex;
`

const InnerContainer = styled.div`
  background-color: white;
  flex: 1;
  max-width: 320px;
`

function loadStories() {
  addDecorator(withInfo)
  addDecorator(withKnobs())
  addDecorator(story => (
    <StoryBookContainer>
      <InnerContainer>
        <ThemeProvider theme={theme}>
          <>
            <Normalize />
            <GlobalStyles />
            {story()}
          </>
        </ThemeProvider>
      </InnerContainer>
    </StoryBookContainer>
  ))
  req.keys().forEach(req)
}
configure(loadStories, module)
