import React, {useContext, useState, useRef} from 'react'
import SearchContext from '../../context/search'
import FeedQuery from '../../store/query/FeedQuery'
import {subscribeToNewPosts} from '../../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../../store/subscription/SubscribeToNewLikes'
import {useScrolledToBottom} from '../../hooks'
import PlainList from '../../components/PlainList'
import FeedListItem from '../../components/FeedListItem'
import TextLink from '../../components/TextLink'
import DisplayPicture from '../../components/DisplayPicture'
import Post from './Post'

export default ({user, ...props}) => {
  const [posts, setPosts] = useState([])
  const [amount, setAmount] = useState(10)
  const {query} = useContext(SearchContext)
  const feedRef = useRef(null)
  useScrolledToBottom(feedRef, () => setAmount(amount + 10))

  return (
    <FeedQuery filter={query} user={user} first={amount} {...props}>
      {({loading, error, data, subscribeToMore}) => {
        if (loading && !posts.length) return <p>fetching...</p>
        if (error) return <p>something went wrong</p>

        subscribeToNewPosts(subscribeToMore)
        subscribeToNewLikes(subscribeToMore)

        setPosts(data.feed.posts)

        if (!posts.length) return <p>no posts</p>
        return (
          <PlainList ref={feedRef}>
            {posts.length &&
              posts.map(post => (
                <FeedListItem key={post.id}>
                  <TextLink
                    to={`/user/${
                      post.reblogPoster ? post.reblogPoster.id : post.op.id
                    }`}
                  >
                    <DisplayPicture
                      email={
                        post.reblogPoster
                          ? post.reblogPoster.email
                          : post.op.email
                      }
                    />
                  </TextLink>
                  <Post post={post} />
                </FeedListItem>
              ))}
          </PlainList>
        )
      }}
    </FeedQuery>
  )
}
