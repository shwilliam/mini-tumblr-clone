import React, {useState} from 'react'
import PostToolbarItem from './PostToolbarItem'
import {GoTextSize, GoDeviceCamera, GoLink} from 'react-icons/go'
import Card from '../Card'
import Toolbar from '../Toolbar'
import NewPost from '../NewPost'

const PostToolbar = props => {
  const [activePostType, setActivePostType] = useState()

  return (
    <Card>
      <Toolbar {...props}>
        <PostToolbarItem
          onClick={() => setActivePostType('text')}
          Icon={GoTextSize}
        >
          <p>Text</p>
        </PostToolbarItem>
        <PostToolbarItem
          onClick={() => setActivePostType('photo')}
          Icon={GoDeviceCamera}
        >
          <p>Photo</p>
        </PostToolbarItem>
        <PostToolbarItem
          onClick={() => setActivePostType('link')}
          Icon={GoLink}
        >
          <p>Link</p>
        </PostToolbarItem>
      </Toolbar>
      {activePostType && (
        <NewPost
          type={activePostType}
          onCreate={() => setActivePostType(null)}
        />
      )}
    </Card>
  )
}

export default PostToolbar
