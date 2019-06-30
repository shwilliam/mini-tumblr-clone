import React from 'react'
import {useAuth} from '../hooks'
import Header from '../components/Header'
import Search from './Search'

export default props => {
  const [isUser, logout] = useAuth()

  return (
    <Header isUser={isUser} onLogout={logout} {...props}>
      <Search />
    </Header>
  )
}
