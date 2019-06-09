import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const StyleWrapper = styled.div`
  background-color: ${p => p.theme.main};
`

const Layout = ({children}) => (
  <StyleWrapper>
    <Header />
    <main>{children}</main>
  </StyleWrapper>
)

export default Layout
