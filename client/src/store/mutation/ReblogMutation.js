import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const REBLOG_MUTATION = gql`
  mutation ReblogMutation(
    $text: String!
    $picture: String
    $link: String
    $op: String!
  ) {
    reblog(text: $text, picture: $picture, link: $link, op: $op) {
      id
    }
  }
`

const ReblogMutation = ({text, picture, link, op, children}) => (
  <Mutation mutation={REBLOG_MUTATION} variables={{text, picture, link, op}}>
    {reblogPost => children(reblogPost)}
  </Mutation>
)

export default ReblogMutation
