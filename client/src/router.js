import React from 'react'
import {Router} from '@reach/router'

import Home from './pages/index'
import Auth from './pages/auth'
import New from './pages/new'
import NotFound from './pages/not-found'

const BrowserRouter = () => (
  <Router>
    <Home path="/" />
    <Auth path="/auth" />
    <New path="/new" />
    <NotFound default />
  </Router>
)

export default BrowserRouter
