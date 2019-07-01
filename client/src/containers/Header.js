import React from 'react'
import {useAuth} from '../hooks'
import Header from '../components/Header'

export default ({children, ...props}) => {
  const [isUser, logout] = useAuth()

  return (
    <Header isUser={isUser} onLogout={logout} {...props}>
      {children}
    </Header>
  )
}
