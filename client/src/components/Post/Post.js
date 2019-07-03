import React from 'react'
import {timeFromDate} from '../../utils'
import Card from '../../components/Card'
import LikeButton from '../../components/LikeButton'
import ReblogButton from '../../components/ReblogButton'
import ReblogIcon from '../../components/ReblogIcon'
import MarkdownText from '../../components/MarkdownText'
import Picture from './Picture'
import Header from './Header'
import FollowButton from './FollowButton'
import Footer from './Footer'
import Timestamp from './Timestamp'
import FlexWrapper from './FlexWrapper'
import TextLink from '../TextLink'
import ShareIcon from './ShareIcon'
import isOwnPost from './isOwnPost'
import isUser from './isUser'

export default ({
  post,
  isLiked,
  email,
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
        {email && !isUser(post, email) && (
          // TODO: hide if already following
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
                disabled={isLiked(post)}
                value={isLiked(post)}
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
