import React from 'react'
import styled from 'styled-components'
import TextButton from '../TextButton'
import TextLink from '../TextLink'
import Nav from './Nav'
import Title from './Title'

const StyleWrapper = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.secondary};
  margin-bottom: 1rem;
`

const StyledHeader = styled.header`
  width: calc(500px + 3rem);
  position: relative;
  right: 3rem;
  margin: 0 auto;
  color: ${({theme}) => theme.secondary};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 1rem;
`

const Mini = styled.span`
  font-size: 0.4em;
  position: relative;
  left: 0.2em;
`

export default ({isUser, onLogout, children, ...props}) => (
  <StyleWrapper>
    <StyledHeader {...props}>
      <TextLink to={isUser ? '/home' : '/'}>
        <Title>
          <Mini>mini</Mini>Tumblr
        </Title>
      </TextLink>
      {children}
      {!isUser ? (
        <Nav>
          <TextLink to="/auth">Sign in</TextLink>
        </Nav>
      ) : (
        <Nav>
          <TextLink to="/">Home</TextLink>
          <TextLink to="/explore">Explore</TextLink>
          <TextButton onClick={onLogout}>Sign out</TextButton>
        </Nav>
      )}
    </StyledHeader>
  </StyleWrapper>
)
