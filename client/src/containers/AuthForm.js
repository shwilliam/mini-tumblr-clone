import React, {useState} from 'react'
import {Mutation} from 'react-apollo'
import {AUTH_TOKEN} from '../constants'
import {LOGIN_MUTATION} from '../store/mutation/LoginMutation'
import {SIGNUP_MUTATION} from '../store/mutation/SignupMutation'
import AuthForm from '../components/AuthForm'
import TextInput from '../components/TextInput'
import FlexWrapper from '../components/FlexWrapper'
import Button from '../components/Button'

export default props => {
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

    _saveUserData({token, email: user.email, id: user.id})
  }

  return (
    <Mutation
      mutation={isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION}
      variables={{email, password, name}}
      onCompleted={data => _confirm(data)}
    >
      {mutation => (
        <AuthForm
          onSubmit={e => {
            e.preventDefault()
            mutation()
          }}
          {...props}
        >
          {!isLogin && (
            <TextInput
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="name"
              required
            />
          )}
          <TextInput
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            required
          />
          <TextInput
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <FlexWrapper>
            <Button type="primary" htmlType="submit">
              {isLogin ? 'log in' : 'sign up'}
            </Button>
            <Button type="secondary" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'create an account?' : 'already have an account?'}
            </Button>
          </FlexWrapper>
        </AuthForm>
      )}
    </Mutation>
  )
}
