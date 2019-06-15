import React from 'react'
import styled from 'styled-components'
import {GoSignIn, GoSignOut} from 'react-icons/go'
import Nav from './Nav'
import TextButton from './TextButton'
import TextLink from './TextLink'
import Title from './Title'
import {AUTH_TOKEN} from '../constants'
const localUserDataJSON = localStorage.getItem(AUTH_TOKEN)
const localUserData = localUserDataJSON && JSON.parse(localUserDataJSON)

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

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN)
  document.location.reload(true)
}

const Header = props => {
  return (
    <StyledHeader {...props}>
      <TextLink to="/">
        <Title>
          <Mini>mini</Mini>Tumblr
        </Title>
      </TextLink>
      <Nav>
        {!localUserData ? (
          <TextLink aria-label="Sign in" title="Enter" to="auth">
            <GoSignIn />
          </TextLink>
        ) : (
          <TextButton aria-label="Sign out" label="Exit" onClick={logout}>
            <GoSignOut />
          </TextButton>
        )}
      </Nav>
    </StyledHeader>
  )
}

export default Header
