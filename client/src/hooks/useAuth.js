import {useEffect, useState} from 'react'
import {navigate} from '@reach/router'
import {AUTH_TOKEN} from '../constants'

export default function() {
  const [localUserData, setLocalUserData] = useState()

  useEffect(() => {
    setLocalUserData(JSON.parse(localStorage.getItem(AUTH_TOKEN)))
  }, [])

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    navigate('/explore')
  }

  return [localUserData, logout]
}
