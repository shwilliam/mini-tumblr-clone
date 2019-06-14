import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const LikeMutation = ({postId, children}) => (
  <Mutation mutation={LIKE_MUTATION} variables={{postId}}>
    {likeMutation => children(likeMutation)}
  </Mutation>
)

const LIKE_MUTATION = gql`
  mutation LikeMutation($postId: ID!) {
    like(postId: $postId) {
      id
      post {
        id
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

export default LikeMutation
