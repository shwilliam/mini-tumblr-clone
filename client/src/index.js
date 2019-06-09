import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from './router'
import * as serviceWorker from './serviceWorker'

import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {onError} from 'apollo-link-error'
import {setContext} from 'apollo-link-context'
import {createUploadLink} from 'apollo-upload-client'
import {split} from 'apollo-link'
import {WebSocketLink} from 'apollo-link-ws'
import {getMainDefinition} from 'apollo-utilities'

import './styles/reset.css'
import {AUTH_TOKEN} from './constants'

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem(AUTH_TOKEN),
    },
  },
})

const link = authLink.concat(
  errorLink.concat(
    split(
      ({query}) => {
        const {kind, operation} = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      createUploadLink({
        uri: 'http://localhost:4000',
      }),
    ),
  ),
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter />
  </ApolloProvider>,
  document.getElementById('root'),
)

// TODO: register
serviceWorker.unregister()
