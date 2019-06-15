import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {onError} from 'apollo-link-error'
import {setContext} from 'apollo-link-context'
import {createUploadLink} from 'apollo-upload-client'
import {split} from 'apollo-link'
import {WebSocketLink} from 'apollo-link-ws'
import {getMainDefinition} from 'apollo-utilities'

import {AUTH_TOKEN} from '../constants'
const localUserDataJSON = localStorage.getItem(AUTH_TOKEN)
const localUserData = localUserDataJSON && JSON.parse(localUserDataJSON)

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path}) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    authorization: localUserData ? `Bearer ${localUserData.token}` : '',
  },
}))

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localUserData && localUserData.token,
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

export default client
