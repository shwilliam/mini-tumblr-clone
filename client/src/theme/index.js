import React from 'react'
import {ThemeProvider} from 'styled-components'
import './reset.css'

const theme = {
  main: '#001F3F',
  secondary: '#fff',
}

export default ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
