import React from 'react'
import FeedQuery from '../store/query/FeedQuery'
import LikeMutation from '../store/mutation/LikeMutation'
import {subscribeToNewPosts} from '../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../store/subscription/SubscribeToNewLikes'
import PostList from '../components/PostList'
import PostCard from './PostCard'

const Loading = () => <p>fetching...</p>
const Error = () => <p>something went wrong</p>

const Feed = () => (
  <FeedQuery>
    {({loading, error, data, subscribeToMore}) => {
      if (loading) return <Loading />
      if (error) return <Error />

      subscribeToNewPosts(subscribeToMore)
      subscribeToNewLikes(subscribeToMore)

      if (!data.feed.posts.length) return <p>no posts</p>
      return (
        <PostList>
          {data.feed.posts.map(post => (
            <LikeMutation postId={post.id} key={post.id}>
              {likeMutation => <PostCard post={post} onLike={likeMutation} />}
            </LikeMutation>
          ))}
        </PostList>
      )
    }}
  </FeedQuery>
)

export default Feed
