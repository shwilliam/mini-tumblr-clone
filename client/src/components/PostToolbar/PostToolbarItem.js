import React from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import TextButton from '../TextButton'

const ToolbarItem = styled(TextButton)`
  text-align: center;

  svg {
    margin-bottom: -0.3rem;
    font-size: 2rem;
  }

  p {
    margin: 0;
  }
`

const PostToolbarItem = ({Icon, children, ...props}) => {
  const [spring, set] = useSpring(() => ({transform: 'translateY(0px)'}))

  return (
    <ToolbarItem
      onMouseOver={() => set({transform: 'translateY(-4rem)'})}
      onMouseOut={() => set({transform: 'translateY(0)'})}
      {...props}
    >
      <animated.div style={spring}>
        <Icon />
      </animated.div>
      {children}
    </ToolbarItem>
  )
}

export default PostToolbarItem
