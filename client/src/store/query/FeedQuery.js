import React, {useContext} from 'react'
import {Query, withApollo} from 'react-apollo'
import gql from 'graphql-tag'
import SearchContext from '../../context/search'

const FEED_QUERY = gql`
  query Feed($filter: String) {
    feed(filter: $filter, orderBy: createdAt_DESC) {
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

const Feed = withApollo(({client, children}) => {
  const {query} = useContext(SearchContext)

  return (
    <Query query={FEED_QUERY} variables={{filter: query}}>
      {feed => children(feed)}
    </Query>
  )
})

export default Feed
