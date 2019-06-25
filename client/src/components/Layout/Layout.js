import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
  ${({theme}) => theme['typography']};
  background-color: ${({theme}) => theme.main};
  min-height: 100vh;
`

const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`

const Layout = ({children, ...props}) => (
  <Container>
    <Header />
    <Main {...props}>{children}</Main>
  </Container>
)

export default Layout
