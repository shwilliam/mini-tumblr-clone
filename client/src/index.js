import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from './router'
import * as serviceWorker from './serviceWorker'
import ApolloProvider from './store'
import ThemeProvider from './theme'

ReactDOM.render(
  <ApolloProvider>
    <ThemeProvider>
      <BrowserRouter />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)

// TODO: register
serviceWorker.unregister()
