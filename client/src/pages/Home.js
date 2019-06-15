import React from 'react'
import PostToolbar from '../components/PostToolbar'
import Feed from '../components/Feed'
import {AUTH_TOKEN} from '../constants'
const localUserDataJSON = localStorage.getItem(AUTH_TOKEN)
const localUserData = localUserDataJSON && JSON.parse(localUserDataJSON)

const Home = () => (
  <>
    {localUserData && <PostToolbar />}
    <Feed />
  </>
)

export default Home
