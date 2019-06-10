import React from 'react'
import {Router} from '@reach/router'

import Layout from './components/Layout'
import Home from './pages/Home'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

const BrowserRouter = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Auth path="/auth" />
      <NotFound default />
    </Router>
  </Layout>
)

export default BrowserRouter
