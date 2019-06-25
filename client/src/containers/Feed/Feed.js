import React from 'react'
import styled from 'styled-components'
import FeedQuery from '../../store/query/FeedQuery'
import LikeMutation from '../../store/mutation/LikeMutation'
import {subscribeToNewPosts} from '../../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../../store/subscription/SubscribeToNewLikes'
import PlainList from '../../components/PlainList'
import DisplayPicture from '../../components/DisplayPicture'
import Post from '../Post'

const PostListItem = styled.li`
  display: flex;
  padding-bottom: 1rem;

  &:first-child {
    padding-top: 1rem;
  }
`

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
            <PostListItem key={post.id}>
              <DisplayPicture email={post.op.email} />
              <LikeMutation postId={post.id}>
                {likeMutation => <Post post={post} onLike={likeMutation} />}
              </LikeMutation>
            </PostListItem>
          ))}
        </PlainList>
      )
    }}
  </FeedQuery>
)

export default Feed
