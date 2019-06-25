import React, {useState} from 'react'
import {GoTextSize, GoDeviceCamera, GoLink} from 'react-icons/go'
import Card from '../../components/Card'
import Toolbar from '../../components/Toolbar'
import IconButton from '../../components/IconButton'
import NewPostForm from '../NewPostForm'

const ToolbarContainer = props => {
  const [activePostType, setActivePostType] = useState()

  return (
    <Card>
      <Toolbar {...props}>
        <IconButton onClick={() => setActivePostType('text')} Icon={GoTextSize}>
          <p>Text</p>
        </IconButton>
        <IconButton
          onClick={() => setActivePostType('photo')}
          Icon={GoDeviceCamera}
        >
          <p>Photo</p>
        </IconButton>
        <IconButton onClick={() => setActivePostType('link')} Icon={GoLink}>
          <p>Link</p>
        </IconButton>
      </Toolbar>
      {activePostType && (
        <NewPostForm
          type={activePostType}
          onCreate={() => setActivePostType(null)}
        />
      )}
    </Card>
  )
}

export default ToolbarContainer
