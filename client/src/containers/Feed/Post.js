import React, {useState, useEffect} from 'react'
import ReblogMutation from '../../store/mutation/ReblogMutation'
import FollowMutation from '../../store/mutation/FollowMutation'
import LikeMutation from '../../store/mutation/LikeMutation'
import {useAuth} from '../../hooks'
import ShareButton from '../ShareButton'
import Post from '../../components/Post'

export default ({post, ...props}) => {
  const [localUserData] = useAuth()
  const [isLiked, setIsLiked] = useState(false)
  const [isFollowed, setIsFollowed] = useState(true)

  useEffect(() => {
    if (!localUserData) return
    setIsLiked(post.likes.some(like => like.user.email === localUserData.email))
    setIsFollowed(
      post.op.followers.some(follow => follow.follower.id === localUserData.id),
      // TODO: subscribed toast
    )
  }, [localUserData, post.likes, post.op.followers])

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
                {/* TODO: subscribe to follows */}
                {followMutation => (
                  <Post
                    email={localUserData && localUserData.email}
                    post={post}
                    isLiked={isLiked}
                    isFollowed={isFollowed}
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
