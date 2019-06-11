import React, {useState} from 'react'
import styled from 'styled-components'
import Card from './Card'
import Toolbar from './Toolbar'
import NewPost from './NewPost'
import TextButton from './TextButton'
import {GoTextSize, GoDeviceCamera} from 'react-icons/go'

const StyleWrapper = styled.div`
  margin: 0 1rem;
`

const ToolbarItem = styled(TextButton)`
  text-align: center;

  svg {
    font-size: 2rem;
  }

  p {
    margin: 0;
  }
`

const PostToolbar = props => {
  const [activePostType, setActivePostType] = useState()

  return (
    <StyleWrapper>
      <Card>
        <Toolbar {...props}>
          <ToolbarItem onClick={() => setActivePostType('text')}>
            <GoTextSize />
            <p>Text</p>
          </ToolbarItem>
          <ToolbarItem onClick={() => setActivePostType('photo')}>
            <GoDeviceCamera />
            <p>Photo</p>
          </ToolbarItem>
        </Toolbar>
        {activePostType && (
          <NewPost
            type={activePostType}
            onCreate={() => setActivePostType(null)}
          />
        )}
      </Card>
    </StyleWrapper>
  )
}

export default PostToolbar
