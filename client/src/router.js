import React from 'react'
import {Router} from '@reach/router'

import Home from './pages/Home'
import User from './pages/User'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

export default () => (
  <Router>
    <Home path="/" />
    <User path="/user/:userId" />
    <Auth path="/auth" />
    <NotFound default />
  </Router>
)
