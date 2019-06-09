import React from 'react'
import {Query, Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import PostList from '../components/PostList'
import Card from '../components/Card'
import {timeDifferenceForDate} from '../utils'

const Home = () => (
  <Query query={FEED_QUERY}>
    {({loading, error, data}) => {
      if (loading) return <p>fetching...</p>
      if (error) return <p>error</p>
      if (!data.feed.posts.length) return <p>no posts</p>
      return (
        <PostList>
          {data.feed.posts.map((post, i) => (
            <Card key={post.id} index={i}>
              <img alt="" src={post.imgUrl} />
              <p>{post.description}</p>
              <p>{post.likes.length} likes</p>
              <p>posted by {post.op.name}</p>
              <p>{timeDifferenceForDate(post.createdAt)}</p>
              <Mutation mutation={LIKE_MUTATION} variables={{postId: post.id}}>
                {likeMutation => (
                  <button type="button" onClick={likeMutation}>
                    like
                  </button>
                )}
              </Mutation>
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
        createdAt
        op {
          id
          name
        }
        likes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

const LIKE_MUTATION = gql`
  mutation VoteMutation($postId: ID!) {
    like(postId: $postId) {
      id
      post {
        likes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`

export default Home
