import React from 'react'
import styled from 'styled-components'
import Gravatar from 'react-gravatar'

const Icon = styled(Gravatar)`
  position: absolute;
  right: calc(100% + 1rem);
  border-radius: 5px;
`

const DisplayPicture = props => <Icon size={50} default="retro" {...props} />

export default DisplayPicture
