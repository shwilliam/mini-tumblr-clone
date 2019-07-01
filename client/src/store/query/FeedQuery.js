import React from 'react'
import {Query, withApollo} from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  query Feed($filter: String, $user: String, $first: Int) {
    feed(filter: $filter, user: $user, first: $first, orderBy: createdAt_DESC) {
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

const Feed = withApollo(({filter, user, first, client, children}) => (
  <Query query={FEED_QUERY} variables={{filter, user, first}}>
    {feed => children(feed)}
  </Query>
))

export default Feed
