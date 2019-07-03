import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const FollowMutation = ({userId, children}) => (
  <Mutation mutation={FOLLOW_MUTATION} variables={{userId}}>
    {followMutation => children(followMutation)}
  </Mutation>
)

const FOLLOW_MUTATION = gql`
  mutation FollowMutation($userId: ID!) {
    follow(userId: $userId) {
      id
      follower {
        id
        name
      }
      following {
        id
        name
      }
    }
  }
`

export default FollowMutation
