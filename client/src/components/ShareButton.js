import React from 'react'
import styled from 'styled-components'
import {TiSocialTwitter} from 'react-icons/ti'
import TextButton from './TextButton'

const StyledButton = styled(TextButton)`
  font-size: 1.9rem;
`

export default props => (
  <StyledButton {...props}>
    <TiSocialTwitter fill="#000000a5" />
  </StyledButton>
)
