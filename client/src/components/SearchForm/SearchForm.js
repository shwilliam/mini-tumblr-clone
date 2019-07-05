import React from 'react'
import StyledForm from './StyledForm'
import SearchIcon from './SearchIcon'

export default ({children, ...props}) => (
  <StyledForm {...props}>
    <SearchIcon />
    {children}
  </StyledForm>
)
