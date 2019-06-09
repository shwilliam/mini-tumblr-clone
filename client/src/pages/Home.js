import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import PostList from '../components/PostList'
import Card from '../components/Card'

const Home = () => (
  <Query query={FEED_QUERY}>
    {({loading, error, data}) => {
      if (loading) return <p>fetching...</p>
      if (error) return <p>error</p>
      if (!data.feed.posts.length) return <p>no posts</p>
      return (
        <PostList>
          {data.feed.posts.map(post => (
            <Card key={post.id}>
              <img alt="" src={post.imgUrl} />
              <p>{post.description}</p>
            </Card>
          ))}
        </PostList>
      )
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
