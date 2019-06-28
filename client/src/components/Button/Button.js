import React from 'react'
import StyledButton from './StyledButton'

export default ({
  type = 'primary',
  htmlType = 'button',
  children,
  ...props
}) => (
  <StyledButton btnType={type} type={htmlType} {...props}>
    {children}
  </StyledButton>
)
