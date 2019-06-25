import React from 'react'
import Toolbar from '../containers/Toolbar'
import Feed from '../containers/Feed'
import {AUTH_TOKEN} from '../constants'
const localUserDataJSON = localStorage.getItem(AUTH_TOKEN)
const isLoggedIn = localUserDataJSON && JSON.parse(localUserDataJSON)

const Home = () => (
  <>
    {isLoggedIn && <Toolbar />}
    <Feed />
  </>
)

export default Home
