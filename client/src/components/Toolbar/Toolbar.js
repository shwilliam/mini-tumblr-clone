import React from 'react'
import styled from 'styled-components'
import PlainList from '../PlainList'

const List = styled(PlainList)`
  display: flex;
  justify-content: space-around;
`

const Toolbar = ({children, ...props}) => (
  <List>
    {React.Children.map(children, el => (
      <li>{el}</li>
    ))}
  </List>
)

export default Toolbar
