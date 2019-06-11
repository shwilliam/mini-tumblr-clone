import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import TextLink from './TextLink'
import Title from './Title'
import {AUTH_TOKEN} from '../constants'

const StyledHeader = styled.header`
  border-bottom: 1px solid ${({theme}) => theme.secondary};
  color: ${({theme}) => theme.secondary};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`

const Mini = styled.span`
  font-size: 0.4em;
  position: relative;
  left: 0.2em;
`

const TextButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: inherit;
  cursor: pointer;
`

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN)
  document.location.reload(true)
}

const Header = props => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <StyledHeader {...props}>
      <TextLink to="/">
        <Title>
          <Mini>mini</Mini>Tumblr
        </Title>
      </TextLink>
      <Nav>
        {!authToken ? (
          <TextLink to="auth">log in</TextLink>
        ) : (
          <TextButton onClick={logout}>log out</TextButton>
        )}
      </Nav>
    </StyledHeader>
  )
}

export default Header
