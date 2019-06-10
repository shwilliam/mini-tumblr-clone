import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  padding-left: 0;
  margin: 1rem;
  list-style: none;
`

const PostList = ({children, ...props}) => (
  <StyledList {...props}>
    {React.Children.map(children, el => (
      <li>{el}</li>
    ))}
  </StyledList>
)

export default PostList
