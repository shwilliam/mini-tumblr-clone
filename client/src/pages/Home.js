import React from 'react'
import PostToolbar from '../components/PostToolbar'
import Feed from '../components/Feed'
import {AUTH_TOKEN} from '../constants'
const localUserDataJSON = localStorage.getItem(AUTH_TOKEN)
const isLoggedIn = localUserDataJSON && JSON.parse(localUserDataJSON)

const Home = () => (
  <>
    {isLoggedIn && <PostToolbar />}
    <Feed />
  </>
)

export default Home
