import React, {useState} from 'react'
import styled from 'styled-components'
import {GoTextSize, GoDeviceCamera, GoLink} from 'react-icons/go'
import {AUTH_TOKEN} from '../../constants'
import Card from '../../components/Card'
import Toolbar from '../../components/Toolbar'
import IconButton from '../../components/IconButton'
import DisplayPicture from '../../components/DisplayPicture'
import NewPostForm from '../NewPostForm'

const localUserDataJSON = localStorage.getItem(AUTH_TOKEN)
const localUserData = localUserDataJSON && JSON.parse(localUserDataJSON)

const Wrapper = styled(Card)`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`

const ToolbarContainer = props => {
  const [activePostType, setActivePostType] = useState()

  return (
    <Wrapper>
      <DisplayPicture email={localUserData.email} />
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
    </Wrapper>
  )
}

export default ToolbarContainer
