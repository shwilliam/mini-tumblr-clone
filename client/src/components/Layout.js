import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Background = styled.div`
  background-color: ${p => p.theme.main};
`

const StyleWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const Layout = ({children, ...props}) => (
  <Background>
    <Header />
    <StyleWrapper {...props}>
      <main>{children}</main>
    </StyleWrapper>
  </Background>
)

export default Layout
