import React from 'react'
import {ThemeProvider} from 'styled-components'
import './reset.css'

const theme = {
  main: '#001F3F',
  secondary: '#fff',
  field: '#fafafa',
  success: '#24a148',
  error: '#da1e28',
}

export default ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
