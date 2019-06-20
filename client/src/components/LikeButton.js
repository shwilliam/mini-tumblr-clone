import React from 'react'
import TextButton from './TextButton'
import {useSpring, animated, interpolate} from 'react-spring'
import {GoHeart} from 'react-icons/go'

const LikeButton = ({value = false, onClick, ...props}) => {
  const {spring} = useSpring({
    from: {spring: 0},
    spring: value ? 1 : 0,
    config: {duration: 1000},
  })

  // TODO: use styled-components
  // FIXME: a11y (aria-hidden?)
  return (
    <TextButton
      title="Heart"
      type="button"
      onClick={onClick}
      style={{position: 'relative'}}
      {...props}
    >
      <animated.div
        style={{
          position: 'absolute',
          opacity: spring.interpolate({output: [1, 0]}),
          zIndex: spring.interpolate(val => (val === 1 ? -1 : 0)),
          transform:
            value &&
            interpolate(
              [
                spring
                  .interpolate({
                    range: [0, 0.25, 0.75, 1],
                    output: [0, -1, 1, 0],
                  })
                  .interpolate(x => x * 10),
                spring.interpolate(y => y * -80),
              ],
              (x, y) => `translate(${x}px, ${y}px)`,
            ),
        }}
      >
        <GoHeart fill={value ? 'red' : 'grey'} />
      </animated.div>
      <GoHeart fill={value ? 'red' : 'grey'} style={{zIndex: 999}} />
    </TextButton>
  )
}

export default LikeButton
