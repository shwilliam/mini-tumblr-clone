import React from 'react'
import {timeFromDate} from '../../utils'
import Card from '../Card'
import LikeButton from '../LikeButton'
import ReblogButton from '../ReblogButton'
import ReblogIcon from '../ReblogIcon'
import MarkdownText from '../MarkdownText'
import FlexWrapper from '../FlexWrapper'
import TextLink from '../TextLink'
import Picture from './Picture'
import Header from './Header'
import FollowButton from './FollowButton'
import Footer from './Footer'
import Timestamp from './Timestamp'
import ShareIcon from './ShareIcon'
import isOwnPost from './isOwnPost'
import isUser from './isUser'

export default ({
  post,
  email,
  isLiked,
  isFollowed,
  onLike,
  onReblog,
  onFollow,
  children,
}) => (
  <Card>
    <article>
      <Header>
        <TextLink to={`/user/${post.op.id}`}>{post.op.name}</TextLink>
        {post.reblogPoster && (
          <TextLink to={`/user/${post.reblogPoster.id}`}>
            <ReblogIcon />
            {post.reblogPoster.name}
          </TextLink>
        )}
        {email && !isUser(post, email) && !isFollowed && (
          <FollowButton onClick={onFollow}>follow</FollowButton>
        )}
      </Header>
      {post.imgUrl && <Picture alt={post.text} src={post.imgUrl} />}
      {!post.link && !post.imgUrl && post.text && (
        <MarkdownText source={post.text} />
      )}
      {post.link && (
        <a href={post.link} rel="noopener noreferrer" target="_blank">
          {post.text} <ShareIcon fill="#000000a5" />
        </a>
      )}
      <Footer>
        <Timestamp>{timeFromDate(post.createdAt)}</Timestamp>
        <FlexWrapper>
          {children}
          {email && !isOwnPost(post, email) && (
            <>
              <ReblogButton onClick={onReblog} />
              <LikeButton
                aria-label={`Like post by ${post.op.name}`}
                onClick={onLike}
                disabled={isLiked}
                value={isLiked}
                label={post.likes.length}
                id={post.id}
              />
            </>
          )}
        </FlexWrapper>
      </Footer>
    </article>
  </Card>
)
