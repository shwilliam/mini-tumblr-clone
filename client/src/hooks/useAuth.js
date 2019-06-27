import {useEffect, useState} from 'react'
import {AUTH_TOKEN} from '../constants'

export default function() {
  const [localUserData, setLocalUserData] = useState()

  useEffect(() => {
    setLocalUserData(JSON.parse(localStorage.getItem(AUTH_TOKEN)))
  }, [])

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    document.location.reload(true)
  }

  return [localUserData, logout]
}
