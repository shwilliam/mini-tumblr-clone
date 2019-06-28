import React from 'react'
import {useSpring, animated} from 'react-spring'
import StyledButton from './StyledButton'

export default ({Icon, children, ...props}) => {
  const [spring, set] = useSpring(() => ({transform: 'translateY(0px)'}))

  return (
    <StyledButton
      onMouseOver={() => set({transform: 'translateY(-4rem)'})}
      onMouseOut={() => set({transform: 'translateY(0)'})}
      {...props}
    >
      <animated.div style={spring}>
        <Icon />
      </animated.div>
      <p>{children}</p>
    </StyledButton>
  )
}
