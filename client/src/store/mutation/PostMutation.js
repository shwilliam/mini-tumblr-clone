import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($text: String!, $picture: Upload, $link: String) {
    publish(text: $text, picture: $picture, link: $link) {
      id
    }
  }
`

const PostMutation = ({text, picture, link, children}) => (
  <Mutation mutation={POST_MUTATION} variables={{text, picture, link}}>
    {createPost => children(createPost)}
  </Mutation>
)

export default PostMutation
