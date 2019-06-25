import React from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import TextButton from '../TextButton'

const Button = styled(TextButton)`
  text-align: center;
  padding: 1rem;

  svg {
    margin-bottom: -0.3rem;
    font-size: 2rem;
  }

  p {
    margin: 0;
  }
`

const IconButton = ({Icon, children, ...props}) => {
  const [spring, set] = useSpring(() => ({transform: 'translateY(0px)'}))

  return (
    <Button
      onMouseOver={() => set({transform: 'translateY(-4rem)'})}
      onMouseOut={() => set({transform: 'translateY(0)'})}
      {...props}
    >
      <animated.div style={spring}>
        <Icon />
      </animated.div>
      {children}
    </Button>
  )
}

export default IconButton
