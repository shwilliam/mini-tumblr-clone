import React from 'react'
import {SearchContextProvider} from '../context/search'
import Header from '../containers/Header'
import Search from '../containers/Search'
import Feed from '../containers/Feed'
import Main from '../components/Main'

export default ({userId}) => (
  <SearchContextProvider>
    <Header>
      <Search />
    </Header>
    <Main>
      <Feed user={userId} />
    </Main>
  </SearchContextProvider>
)
