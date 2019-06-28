import React from 'react'
import NavList from './NavList'
import NavListItem from './NavListItem'

export default ({children, ...props}) => (
  <nav {...props}>
    <NavList>
      {React.Children.map(children, el => (
        <NavListItem>{el}</NavListItem>
      ))}
    </NavList>
  </nav>
)
