import React from 'react'
import {GoChevronRight} from 'react-icons/go'
import {timeFromDate} from '../../utils'
import Card from '../../components/Card'
import LikeButton from '../../components/LikeButton'
import ReblogButton from '../../components/ReblogButton'
import ReblogIcon from '../../components/ReblogIcon'
import MarkdownText from '../../components/MarkdownText'
import Header from './Header'
import Picture from './Picture'
import Footer from './Footer'
import Timestamp from './Timestamp'
import FlexWrapper from './FlexWrapper'
import Link from './Link'
import isOwnPost from './isOwnPost'

export default ({post, onLike, isLiked, email, onReblog, children}) => (
  <Card>
    <article>
      <Header>
        {post.reblogPoster && (
          <>
            {post.reblogPoster.name}
            <ReblogIcon />
          </>
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
        {!isOwnPost(post, email) && email && (
          <FlexWrapper>
            {children}
            <ReblogButton onClick={onReblog} />
            <LikeButton
              aria-label={`Like post by ${post.op.name}`}
              onClick={onLike}
              disabled={isLiked(post)}
              value={isLiked(post)}
              label={post.likes.length}
              id={post.id}
            />
          </FlexWrapper>
        )}
      </Footer>
    </article>
  </Card>
)
