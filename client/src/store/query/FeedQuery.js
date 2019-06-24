import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const Feed = ({children}) => (
  <Query query={FEED_QUERY}>{feed => children(feed)}</Query>
)

const FEED_QUERY = gql`
  {
    feed(orderBy: createdAt_DESC) {
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

export default Feed
