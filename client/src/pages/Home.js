import React from 'react'
import {Query, Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import PostList from '../components/PostList'
import Card from '../components/Card'
import {timeDifferenceForDate} from '../utils'

const _subscribeToNewPosts = subscribeToMore => {
  subscribeToMore({
    document: NEW_POSTS_SUBSCRIPTION,
    updateQuery: (prev, {subscriptionData}) => {
      if (!subscriptionData.data) return prev
      const newPost = subscriptionData.data.newPost
      const exists = prev.feed.posts.find(({id}) => id === newPost.id)
      if (exists) return prev

      return Object.assign({}, prev, {
        feed: {
          posts: [newPost, ...prev.feed.posts],
          count: prev.feed.posts.length + 1,
          __typename: prev.feed.__typename,
        },
      })
    },
  })
}

const _subscribeToNewLikes = subscribeToMore => {
  subscribeToMore({
    document: NEW_LIKES_SUBSCRIPTION,
  })
}

const Home = () => (
  <Query query={FEED_QUERY}>
    {({loading, error, data, subscribeToMore}) => {
      if (loading) return <p>fetching...</p>
      if (error) return <p>error</p>

      _subscribeToNewPosts(subscribeToMore)
      _subscribeToNewLikes(subscribeToMore)

      if (!data.feed.posts.length) return <p>no posts</p>
      return (
        <PostList>
          {data.feed.posts.map((post, i) => (
            <Card key={post.id}>
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
    feed(orderBy: createdAt_DESC) {
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

const NEW_POSTS_SUBSCRIPTION = gql`
  subscription {
    newPost {
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
`

const NEW_LIKES_SUBSCRIPTION = gql`
  subscription {
    newLike {
      id
      post {
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
      user {
        id
      }
    }
  }
`

export default Home
