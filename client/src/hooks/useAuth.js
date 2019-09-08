import {useEffect, useState} from 'react'
import {AUTH_TOKEN} from '../constants'

export default function() {
  const [localUserData, setLocalUserData] = useState()

  useEffect(() => {
    setLocalUserData(JSON.parse(localStorage.getItem(AUTH_TOKEN)))
  }, [])

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    window.location.pathname = '/'
  }

  return [localUserData, logout]
}
