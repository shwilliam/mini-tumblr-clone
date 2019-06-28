import React from 'react'
import styled from 'styled-components'
import {GoVersions} from 'react-icons/go'

const Wrapper = styled.span`
  font-size: 1.4rem;
  padding: 0.5rem;
  position: relative;
  top: 0.3rem;
`

export default ({children, ...props}) => (
  <Wrapper {...props}>
    <GoVersions fill="#000000a5" />
  </Wrapper>
)
