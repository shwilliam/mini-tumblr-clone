import React from 'react'
import {useAuth} from '../../hooks'
import Post from '../../components/Post'

export default ({post, ...props}) => {
  const [localUserData] = useAuth()
  const isLiked = () =>
    localUserData &&
    post.likes.some(like => like.user.email === localUserData.email)

  return (
    <Post
      isLiked={isLiked}
      email={localUserData && localUserData.email}
      post={post}
      {...props}
    />
  )
}
