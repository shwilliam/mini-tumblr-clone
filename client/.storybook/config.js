import React from 'react'
import {configure, addDecorator} from '@storybook/react'
import styled from 'styled-components'
import ThemeProvider from '../src/theme'

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
