import React from 'react'
import FeedQuery from '../../store/query/FeedQuery'
import LikeMutation from '../../store/mutation/LikeMutation'
import {subscribeToNewPosts} from '../../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../../store/subscription/SubscribeToNewLikes'
import FeedList from './FeedList'
import FeedItem from './FeedItem'

const Loading = () => <p>fetching...</p>
const Error = () => <p>something went wrong</p>

const Feed = () => (
  <FeedQuery>
    {({loading, error, data, subscribeToMore}) => {
      if (loading) return <Loading />
      if (error) return <Error />

      subscribeToNewPosts(subscribeToMore)
      subscribeToNewLikes(subscribeToMore)

      if (data.feed && !data.feed.posts.length) return <p>no posts</p>
      return (
        <FeedList>
          {data.feed.posts.map(post => (
            <LikeMutation postId={post.id} key={post.id}>
              {likeMutation => <FeedItem post={post} onLike={likeMutation} />}
            </LikeMutation>
          ))}
        </FeedList>
      )
    }}
  </FeedQuery>
)

export default Feed
