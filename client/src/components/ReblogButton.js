import React from 'react'
import styled from 'styled-components'
import {GoRepoClone} from 'react-icons/go'
import TextButton from './TextButton'

const StyledButton = styled(TextButton)`
  font-size: 1.5rem;
`

export default props => (
  <StyledButton {...props}>
    <GoRepoClone fill="#000000a5" />
  </StyledButton>
)
