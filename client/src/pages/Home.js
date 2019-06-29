import React from 'react'
import {useAuth} from '../hooks'
import Header from '../containers/Header'
import Toolbar from '../containers/Toolbar'
import Feed from '../containers/Feed'
import Layout from '../components/Layout'
import Main from '../components/Main'

const Home = () => {
  const [isUser] = useAuth()

  return (
    <Layout>
      <Header />
      <Main>
        {isUser && <Toolbar />}
        <Feed />
      </Main>
    </Layout>
  )
}

export default Home
