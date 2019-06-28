import React from 'react'
import ReblogMutation from '../../store/mutation/ReblogMutation'
import {useAuth} from '../../hooks'
import Post from '../../components/Post'

export default ({post, ...props}) => {
  const [localUserData] = useAuth()
  const isLiked = () =>
    localUserData &&
    post.likes.some(like => like.user.email === localUserData.email)

  return (
    <ReblogMutation
      text={post.text}
      picture={post.imgUrl || null}
      link={post.link || null}
      op={post.op.id}
    >
      {reblogPost => (
        <Post
          isLiked={isLiked}
          email={localUserData && localUserData.email}
          post={post}
          onReblog={reblogPost}
          {...props}
        />
      )}
    </ReblogMutation>
  )
}
