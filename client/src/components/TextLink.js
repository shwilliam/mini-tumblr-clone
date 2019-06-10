import React from 'react'
import {Link} from '@reach/router'
import styled from 'styled-components'

const PlainLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const TextLink = ({children, ...props}) => (
  <PlainLink {...props}>{children}</PlainLink>
)

export default TextLink
