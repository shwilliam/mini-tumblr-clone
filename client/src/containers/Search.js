import React, {useState} from 'react'
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag'

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
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

export default withApollo(({client, ...props}) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    _executeSearch()
    e.preventDefault()
  }

  const _executeSearch = async () => {
    const result = await client.query({
      query: FEED_SEARCH_QUERY,
      variables: {filter: query},
    })

    const posts = result.data.feed.posts

    console.log(posts)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={({target}) => setQuery(target.value)}
        {...props}
      />
      <button type="submit">search</button>
    </form>
  )
})
