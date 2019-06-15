import React, {useState} from 'react'
import {AUTH_TOKEN} from '../constants'
import {Mutation} from 'react-apollo'
import {LOGIN_MUTATION} from '../store/mutation/LoginMutation'
import {SIGNUP_MUTATION} from '../store/mutation/SignupMutation'

const Login = props => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const _saveUserData = data => {
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(data))
    window.location.pathname = '/'
  }

  const _confirm = async data => {
    const authData = isLogin ? data.login : data.signup
    const {token, user} = authData
    _saveUserData({token, email: user.email})
  }

  return (
    <Mutation
      mutation={isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION}
      variables={{email, password, name}}
      onCompleted={data => _confirm(data)}
    >
      {mutation => (
        <form
          onSubmit={e => {
            e.preventDefault()
            mutation()
          }}
          {...props}
        >
          {!isLogin && (
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="name"
              required
            />
          )}
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            required
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <button type="submit">{isLogin ? 'login' : 'create account'}</button>
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'create an account?' : 'already have an account?'}
          </button>
        </form>
      )}
    </Mutation>
  )
}

export default Login
