import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import TextLink from './TextLink'
import Title from './Title'

const StyledHeader = styled.header`
  border-bottom: 1px solid ${p => p.theme.secondary};
  color: ${p => p.theme.secondary};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`

const Mini = styled.span`
  font-size: 0.4em;
  position: relative;
  left: 0.2em;
`

const Header = props => (
  <StyledHeader {...props}>
    <TextLink to="/">
      <Title>
        <Mini>mini</Mini>Tumblr
      </Title>
    </TextLink>
    <Nav>
      <TextLink to="auth">Log in</TextLink>
    </Nav>
  </StyledHeader>
)

export default Header
