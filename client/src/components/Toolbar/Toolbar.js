import React from 'react'
import StyledList from './StyledList'
import ToolbarItem from './ToolbarItem'

export default ({children, ...props}) => (
  <StyledList>
    {React.Children.map(children, el => (
      <ToolbarItem>{el}</ToolbarItem>
    ))}
  </StyledList>
)
