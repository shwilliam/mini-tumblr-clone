import React from 'react'
import {Query, withApollo} from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  query Feed($filter: String, $user: String, $explore: Boolean, $first: Int) {
    feed(
      filter: $filter
      user: $user
      explore: $explore
      first: $first
      orderBy: createdAt_DESC
    ) {
      posts {
        id
        text
        imgUrl
        link
        createdAt
        op {
          id
          name
          email
        }
        reblogPoster {
          id
          name
          email
        }
        likes {
          id
          user {
            id
            email
          }
        }
      }
    }
  }
`

const Feed = withApollo(({filter, user, first, explore, client, children}) => (
  <Query query={FEED_QUERY} variables={{filter, user, first, explore}}>
    {feed => children(feed)}
  </Query>
))

export default Feed
