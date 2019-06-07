import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import NewPost from './components/NewPost'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Login />
      <NewPost />
      <Query query={FEED_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <p>fetching...</p>
          if (error) return <p>error</p>
          return data.feed.posts.map(post => (
            <p key={post.id}>{post.description}</p>
          ))
        }}
      </Query>
    </div>
  )
}

const FEED_QUERY = gql`
  {
    feed {
      posts {
        id
        imgUrl
        description
      }
    }
  }
`
export default App
