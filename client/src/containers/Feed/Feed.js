import React from 'react'
import FeedQuery from '../../store/query/FeedQuery'
import LikeMutation from '../../store/mutation/LikeMutation'
import {subscribeToNewPosts} from '../../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../../store/subscription/SubscribeToNewLikes'
import PlainList from '../../components/PlainList'
import FeedListItem from '../../components/FeedListItem'
import DisplayPicture from '../../components/DisplayPicture'
import Post from './Post'

export default () => (
  <FeedQuery>
    {({loading, error, data, subscribeToMore}) => {
      if (loading) return <p>fetching...</p>
      if (error) return <p>something went wrong</p>

      subscribeToNewPosts(subscribeToMore)
      subscribeToNewLikes(subscribeToMore)

      if (data.feed && !data.feed.posts.length) return <p>no posts</p>
      return (
        <PlainList>
          {data.feed.posts.map(post => (
            <FeedListItem key={post.id}>
              <DisplayPicture email={post.op.email} />
              <LikeMutation postId={post.id}>
                {likeMutation => <Post post={post} onLike={likeMutation} />}
              </LikeMutation>
            </FeedListItem>
          ))}
        </PlainList>
      )
    }}
  </FeedQuery>
)
