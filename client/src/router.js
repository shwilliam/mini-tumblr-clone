import React from 'react'
import {Router} from '@reach/router'

import Home from './pages/Home'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

const BrowserRouter = () => (
  <Router>
    <Home path="/" />
    <Auth path="/auth" />
    <NotFound default />
  </Router>
)

export default BrowserRouter
