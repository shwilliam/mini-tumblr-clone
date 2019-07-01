import React from 'react'
import {SearchContextProvider} from '../context/search'
import Header from '../containers/Header'
import Search from '../containers/Search'
import Toolbar from '../containers/Toolbar'
import Feed from '../containers/Feed'
import Main from '../components/Main'

export default () => (
  <SearchContextProvider>
    <Header>
      <Search />
    </Header>
    <Main>
      <Toolbar />
      <Feed />
    </Main>
  </SearchContextProvider>
)
