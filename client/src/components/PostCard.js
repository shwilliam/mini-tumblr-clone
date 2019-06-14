import React from 'react'
import ReactMD from 'react-markdown'
import styled from 'styled-components'
import Card from './Card'
import LikeButton from './LikeButton'
import {timeFromDate} from '../utils'
import {AUTH_TOKEN} from '../constants'

const Header = styled.header`
  font-weight: bold;
`

const Picture = styled.img`
  width: 100%;
`

const Text = styled(ReactMD)`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.5rem;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

const Timestamp = styled.p`
  margin: 0;
`

const Actions = styled.div`
  display: flex;
`
const isLiked = post => post.likes.some(p => p.user.id === post.op.id)

const PostCard = ({post, onLike, children}) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <Card>
      <article>
        <Header>{post.op.name}</Header>
        {post.imgUrl && <Picture alt="" src={post.imgUrl} />}
        <Text source={post.text} />
        <Footer>
          <Timestamp>{timeFromDate(post.createdAt)}</Timestamp>
          <Actions>
            ({post.likes.length})
            {authToken && (
              <LikeButton
                aria-label={`Like post by ${post.op.name}`}
                onClick={onLike}
                disabled={isLiked(post)}
                value={isLiked(post)}
              />
            )}
          </Actions>
        </Footer>
      </article>
    </Card>
  )
}

export default PostCard
