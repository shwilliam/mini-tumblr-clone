import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Background = styled.div`
  ${({theme}) => theme['typography']};
  background-color: ${({theme}) => theme.main};
  min-height: 100vh;
`

const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`

const Layout = ({children, ...props}) => (
  <Background>
    <Header />
    <Main {...props}>{children}</Main>
  </Background>
)

export default Layout
