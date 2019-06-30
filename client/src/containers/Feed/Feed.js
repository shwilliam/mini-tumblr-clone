import React, {
  useEffect,
  useContext,
  useState,
  useCallback,
  useRef,
} from 'react'
import SearchContext from '../../context/search'
import FeedQuery from '../../store/query/FeedQuery'
import LikeMutation from '../../store/mutation/LikeMutation'
import {subscribeToNewPosts} from '../../store/subscription/SubscribeToNewPosts'
import {subscribeToNewLikes} from '../../store/subscription/SubscribeToNewLikes'
import PlainList from '../../components/PlainList'
import FeedListItem from '../../components/FeedListItem'
import DisplayPicture from '../../components/DisplayPicture'
import Post from './Post'

export default () => {
  const [amount, setAmount] = useState(2)
  const {query} = useContext(SearchContext)
  const feedRef = useRef(null)

  const isBottom = el =>
    el && el.getBoundingClientRect().bottom <= window.innerHeight

  const trackScrolling = useCallback(
    () => isBottom(feedRef.current) && setAmount(amount + 2),
    [amount],
  )

  useEffect(() => {
    window.addEventListener('scroll', trackScrolling)
    return () => window.removeEventListener('scroll', trackScrolling)
  }, [trackScrolling])

  return (
    <FeedQuery filter={query} first={amount}>
      {({loading, error, data, subscribeToMore}) => {
        if (loading) return <p>fetching...</p>
        if (error) return <p>something went wrong</p>

        subscribeToNewPosts(subscribeToMore)
        subscribeToNewLikes(subscribeToMore)

        if (!data.feed || !data.feed.posts.length) return <p>no posts</p>
        return (
          <div ref={feedRef}>
            <PlainList>
              {data.feed.posts.map(post => (
                <FeedListItem key={post.id}>
                  <DisplayPicture
                    email={
                      post.reblogPoster
                        ? post.reblogPoster.email
                        : post.op.email
                    }
                  />
                  <LikeMutation postId={post.id}>
                    {likeMutation => <Post post={post} onLike={likeMutation} />}
                  </LikeMutation>
                </FeedListItem>
              ))}
            </PlainList>
          </div>
        )
      }}
    </FeedQuery>
  )
}
