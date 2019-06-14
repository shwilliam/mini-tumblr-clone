import React from 'react'
import {ThemeProvider} from 'styled-components'
import colors from './colors'
import typography from './typography'
import './reset.css'

export default ({children}) => (
  <ThemeProvider
    theme={{
      ...colors,
      typography,
    }}
  >
    {children}
  </ThemeProvider>
)
