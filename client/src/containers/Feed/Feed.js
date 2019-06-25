import React from 'react'
import FeedQuery from '../../store/query/FeedQuery'
import LikeMutation from '../../store/mutation/LikeMutation'
import {subscribeToNewPosts} from '../../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../../store/subscription/SubscribeToNewLikes'
import PlainList from '../../components/PlainList'
import Post from '../../components/Post'

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
        <PlainList>
          {data.feed.posts.map(post => (
            <li key={post.id}>
              <LikeMutation postId={post.id}>
                {likeMutation => <Post post={post} onLike={likeMutation} />}
              </LikeMutation>
            </li>
          ))}
        </PlainList>
      )
    }}
  </FeedQuery>
)

export default Feed
