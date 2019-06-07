import React from 'react'
import {Router} from '@reach/router'

import Home from './pages/Home'
import Auth from './pages/Auth'
import New from './pages/New'
import NotFound from './pages/NotFound'

const BrowserRouter = () => (
  <Router>
    <Home path="/" />
    <Auth path="/auth" />
    <New path="/new" />
    <NotFound default />
  </Router>
)

export default BrowserRouter
