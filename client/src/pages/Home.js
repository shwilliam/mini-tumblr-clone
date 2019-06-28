import React from 'react'
import {useAuth} from '../hooks'
import Toolbar from '../containers/Toolbar'
import Feed from '../containers/Feed'

const Home = () => {
  const [isUser] = useAuth()

  return (
    <>
      {isUser && <Toolbar />}
      <Feed />
    </>
  )
}

export default Home
