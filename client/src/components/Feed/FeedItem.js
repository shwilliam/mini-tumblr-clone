import React from 'react'
import styled from 'styled-components'
import {timeFromDate} from '../../utils'
import {AUTH_TOKEN} from '../../constants'
import Card from '../Card'
import LikeButton from './LikeButton'
import MarkdownText from '../MarkdownText'

const localUserDataJSON = localStorage.getItem(AUTH_TOKEN)
const localUserData = localUserDataJSON && JSON.parse(localUserDataJSON)

const Header = styled.header`
  font-weight: bold;
`

const Picture = styled.img`
  width: 100%;
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

const PostCard = ({post, onLike, children}) => {
  const email = localUserData && localUserData.email
  const isLiked = post => post.likes.some(like => like.user.email === email)

  return (
    <Card>
      <article>
        <Header>{post.op.name}</Header>
        {post.imgUrl && <Picture alt={post.text} src={post.imgUrl} />}
        {!post.link && post.text && <MarkdownText source={post.text} />}
        {post.link && (
          <a href={post.link} rel="noopener noreferrer" target="_blank">
            {post.text}
          </a>
        )}
        <Footer>
          <Timestamp>{timeFromDate(post.createdAt)}</Timestamp>
          <Actions>
            ({post.likes.length})
            {email && email !== post.op.email && (
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
