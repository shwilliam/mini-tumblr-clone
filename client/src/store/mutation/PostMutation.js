import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($text: String!, $picture: Upload) {
    publish(text: $text, picture: $picture) {
      id
    }
  }
`

const PostMutation = ({text, picture, children}) => (
  <Mutation mutation={POST_MUTATION} variables={{text, picture}}>
    {createPost => children(createPost)}
  </Mutation>
)

export default PostMutation
