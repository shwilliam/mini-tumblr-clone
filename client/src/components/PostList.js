import React from 'react'
import PlainList from './PlainList'

const PostList = ({children, ...props}) => (
  <PlainList {...props}>
    {React.Children.map(children, el => (
      <li>{el}</li>
    ))}
  </PlainList>
)

export default PostList
