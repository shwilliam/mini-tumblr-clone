import React from 'react'
import PostToolbar from '../components/PostToolbar'
import Feed from '../components/Feed'
import {AUTH_TOKEN} from '../constants'

const Home = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <>
      {authToken && <PostToolbar />}
      <Feed />
    </>
  )
}

export default Home
