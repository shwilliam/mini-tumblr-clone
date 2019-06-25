import React from 'react'
import styled from 'styled-components'
import PlainList from '../PlainList'

const List = styled(PlainList)`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;
`

const Toolbar = ({children, ...props}) => (
  <List>
    {React.Children.map(children, el => (
      <li>{el}</li>
    ))}
  </List>
)

export default Toolbar
