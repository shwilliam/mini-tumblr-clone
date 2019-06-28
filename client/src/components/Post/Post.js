import React from 'react'
import styled from 'styled-components'
import {GoChevronRight} from 'react-icons/go'
import {timeFromDate} from '../../utils'
import Card from '../../components/Card'
import LikeButton from '../../components/LikeButton'
import ReblogButton from '../../components/ReblogButton'
import ReblogIcon from '../../components/ReblogIcon'
import MarkdownText from '../../components/MarkdownText'

const Header = styled.header`
  font-weight: bold;
  margin-bottom: 1rem;
`

const Picture = styled.img`
  width: 100%;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const Timestamp = styled.p`
  margin: 0;
`

const Actions = styled.div`
  display: flex;

  & > * {
    padding: 0 0.5rem;
  }
`

const Link = styled.a`
  color: inherit;
  font-weight: bold;
`

const isOwnPost = (post, email) =>
  (post.reblogPoster && email === post.reblogPoster.email) ||
  email === post.op.email

export default ({post, onLike, isLiked, email, onReblog, children}) => (
  <Card>
    <article>
      <Header>
        {post.reblogPoster ? (
          <>
            {post.reblogPoster.name}
            <ReblogIcon />
          </>
        ) : (
          ''
        )}
        {post.op.name}
      </Header>
      {post.imgUrl && <Picture alt={post.text} src={post.imgUrl} />}
      {!post.link && !post.imgUrl && post.text && (
        <MarkdownText source={post.text} />
      )}
      {post.link && (
        <Link href={post.link} rel="noopener noreferrer" target="_blank">
          {post.text} <GoChevronRight />
        </Link>
      )}
      <Footer>
        <Timestamp>{timeFromDate(post.createdAt)}</Timestamp>
        <Actions>
          {!isOwnPost(post, email) && email && (
            <>
              <ReblogButton onClick={onReblog} />
              <LikeButton
                aria-label={`Like post by ${post.op.name}`}
                onClick={onLike}
                disabled={isLiked(post)}
                value={isLiked(post)}
                label={post.likes.length}
                id={post.id}
              />
            </>
          )}
        </Actions>
      </Footer>
    </article>
  </Card>
)
