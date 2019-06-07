import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const Home = () => (
  <Query query={FEED_QUERY}>
    {({loading, error, data}) => {
      if (loading) return <p>fetching...</p>
      if (error) return <p>error</p>
      return data.feed.posts.map(post => (
        <p key={post.id}>{post.description}</p>
      ))
    }}
  </Query>
)

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
export default Home
