import React from 'react'
import styled from 'styled-components'
import PlainList from './PlainList'

const StyledList = styled(PlainList)`
  display: flex;
  justify-content: space-around;
`

const Toolbar = ({children, ...props}) => (
  <StyledList>
    {React.Children.map(children, el => (
      <li>{el}</li>
    ))}
  </StyledList>
)

export default Toolbar
