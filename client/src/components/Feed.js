import React from 'react'
import FeedQuery from '../store/query/FeedQuery'
import LikeMutation from '../store/mutation/LikeMutation'
import {subscribeToNewPosts} from '../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../store/subscription/SubscribeToNewLikes'
import PostList from '../components/PostList'
import Card from '../components/Card'
import {timeDifferenceForDate} from '../utils'

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
            <Card key={post.id}>
              <img alt="" src={post.imgUrl} />
              <p>{post.text}</p>
              <p>{post.likes.length} likes</p>
              <p>posted by {post.op.name}</p>
              <p>{timeDifferenceForDate(post.createdAt)}</p>
              <LikeMutation postId={post.id}>
                {likeMutation => (
                  <button type="button" onClick={likeMutation}>
                    like
                  </button>
                )}
              </LikeMutation>
            </Card>
          ))}
        </PostList>
      )
    }}
  </FeedQuery>
)

export default Feed
