import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $picture: Upload) {
    publish(description: $description, picture: $picture) {
      id
    }
  }
`

const PostMutation = ({description, picture, children}) => (
  <Mutation mutation={POST_MUTATION} variables={{description, picture}}>
    {createPost => children(createPost)}
  </Mutation>
)

export default PostMutation
