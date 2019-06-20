import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import BrowserRouter from './router'
import ApolloProvider from './store'
import ThemeProvider from './theme'
import Layout from './components/Layout'

ReactDOM.render(
  <ApolloProvider>
    <ThemeProvider>
      <Layout>
        <BrowserRouter />
      </Layout>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)

// TODO: register
serviceWorker.unregister()
