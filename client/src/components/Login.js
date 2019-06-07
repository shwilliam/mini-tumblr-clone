import React, {useState} from 'react'
import {AUTH_TOKEN} from '../constants'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  const _confirm = async data => {
    const {token} = isLogin ? data.login : data.signup
    _saveUserData(token)
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
