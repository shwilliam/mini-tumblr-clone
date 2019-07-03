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
import Link from './Link'
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
        {post.op.name}
        {post.reblogPoster && (
          <>
            <ReblogIcon />
            {post.reblogPoster.name}
          </>
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
        <Link href={post.link} rel="noopener noreferrer" target="_blank">
          {post.text} <ShareIcon fill="#000000a5" />
        </Link>
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
