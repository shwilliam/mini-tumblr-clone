import React from 'react'
import Header from '../Header'
import Wrapper from './Wrapper'
import Main from './Main'

export default ({children, ...props}) => (
  <Wrapper>
    <Header />
    <Main {...props}>{children}</Main>
  </Wrapper>
)
