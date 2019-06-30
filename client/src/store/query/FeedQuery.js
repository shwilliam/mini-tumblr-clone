import React from 'react'
import {Query, withApollo} from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  query Feed($filter: String, $first: Int) {
    feed(filter: $filter, first: $first, orderBy: createdAt_DESC) {
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

const Feed = withApollo(({filter, first, client, children}) => (
  <Query query={FEED_QUERY} variables={{filter, first}}>
    {feed => children(feed)}
  </Query>
))

export default Feed
