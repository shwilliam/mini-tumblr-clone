import React from 'react'
import styled from 'styled-components'
import {GoHeart} from 'react-icons/go'
import Card from './Card'
import {timeDifferenceForDate} from '../utils'
import {AUTH_TOKEN} from '../constants'

const PostCardStyleWrapper = styled(Card)`
  padding-top: 0;
  padding-bottom: 0;
`

const Header = styled.header`
  font-weight: bold;
`

const Picture = styled.img`
  width: 100%;
`

const Text = styled.p`
  margin-top: 0;
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
    <PostCardStyleWrapper>
      <article>
        <Header>{post.op.name}</Header>
        <Picture alt="" src={post.imgUrl} />
        <Text>{post.text}</Text>
        <Footer>
          <Timestamp>{timeDifferenceForDate(post.createdAt)}</Timestamp>
          <Actions>
            ({post.likes.length})
            {authToken && (
              <button
                aria-label={`Like post by ${post.op.name}`}
                title="Heart"
                type="button"
                onClick={onLike}
                disabled={isLiked(post)}
              >
                <GoHeart />
              </button>
            )}
          </Actions>
        </Footer>
      </article>
    </PostCardStyleWrapper>
  )
}

export default PostCard
