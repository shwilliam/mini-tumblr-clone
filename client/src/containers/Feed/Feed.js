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
import PaddedCard from '../../components/PaddedCard'
import Loader from '../../components/Loader'

export default ({user, explore = false, ...props}) => {
  const [posts, setPosts] = useState([])
  const [amount, setAmount] = useState(10)
  const {query} = useContext(SearchContext)
  const feedRef = useRef(null)
  useScrolledToBottom(feedRef, () => setAmount(amount + 10))

  return (
    <FeedQuery
      filter={query}
      user={user}
      explore={explore}
      first={amount}
      {...props}
    >
      {({loading, error, data, subscribeToMore}) => {
        if (loading && !posts.length) return <Loader />
        if (error && error.message === 'GraphQL error: Not authenticated') {
          return <PaddedCard>Please log in to view this page.</PaddedCard>
        } else if (error) {
          return (
            <PaddedCard>
              Oops... Something went wrong. Please refresh the page to try
              again.
            </PaddedCard>
          )
        }

        subscribeToNewPosts(subscribeToMore)
        subscribeToNewLikes(subscribeToMore)

        setPosts(data.feed.posts)

        if (!posts.length) return <PaddedCard>No posts here...</PaddedCard>
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
