import React from 'react'
import {configure, addDecorator} from '@storybook/react'
import ThemeProvider from '../src/theme'

import styled from 'styled-components'

const Background = styled.div`
  background-color: ${p => p.theme.main};
  min-height: 80vh;
`

function loadStories() {
  require('../src/stories')
}

addDecorator(story => (
  <ThemeProvider>
    <Background>{story()}</Background>
  </ThemeProvider>
))

configure(loadStories, module)
