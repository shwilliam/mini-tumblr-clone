import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  ul {
    padding: 1rem;
    margin: 0;
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    white-space: nowrap;
  }
`

const Nav = ({children, ...props}) => (
  <StyledNav {...props}>
    <ul>
      {React.Children.map(children, el => (
        <li>{el}</li>
      ))}
    </ul>
  </StyledNav>
)

export default Nav
