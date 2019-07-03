import React from 'react'
import ReblogMutation from '../../store/mutation/ReblogMutation'
import FollowMutation from '../../store/mutation/FollowMutation'
import LikeMutation from '../../store/mutation/LikeMutation'
import {useAuth} from '../../hooks'
import ShareButton from '../ShareButton'
import Post from '../../components/Post'

export default ({post, ...props}) => {
  const [localUserData] = useAuth()
  const isLiked = () =>
    localUserData &&
    post.likes.some(like => like.user.email === localUserData.email)

  return (
    <>
      <LikeMutation postId={post.id}>
        {likeMutation => (
          <ReblogMutation
            text={post.text}
            picture={post.imgUrl || null}
            link={post.link || null}
            op={post.op.id}
          >
            {reblogPost => (
              <FollowMutation
                userId={post.reblogPoster ? post.reblogPoster.id : post.op.id}
              >
                {followMutation => (
                  <Post
                    isLiked={isLiked}
                    email={localUserData && localUserData.email}
                    post={post}
                    onReblog={reblogPost}
                    onLike={likeMutation}
                    onFollow={followMutation}
                    {...props}
                  >
                    <ShareButton content={post.text} />
                  </Post>
                )}
              </FollowMutation>
            )}
          </ReblogMutation>
        )}
      </LikeMutation>
    </>
  )
}
