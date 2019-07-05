import React from 'react'
import StyledNav from './StyledNav'
import NavList from './NavList'
import NavListItem from './NavListItem'

export default ({children, ...props}) => (
  <StyledNav {...props}>
    <NavList>
      {React.Children.map(children, el => (
        <NavListItem>{el}</NavListItem>
      ))}
    </NavList>
  </StyledNav>
)
