import React from 'react'
import {useSpring, animated, interpolate} from 'react-spring'
import {GoHeart} from 'react-icons/go'
import CountLabel from './CountLabel'
import StyledButton from './StyledButton'

export default ({value = false, label, id, onClick, ...props}) => {
  const {spring} = useSpring({
    from: {spring: 0},
    spring: value ? 1 : 0,
    config: {duration: 1000},
  })

  return (
    <StyledButton
      title="Heart"
      type="button"
      onClick={onClick}
      style={{position: 'relative'}}
      {...props}
    >
      {label > 0 && (
        <CountLabel id={`label-${id}`} isLiked={value}>
          {label}
        </CountLabel>
      )}
      <animated.div
        aria-hidden
        style={{
          position: 'absolute',
          opacity: spring.interpolate({output: [1, 0]}),
          zIndex: spring.interpolate(val => (val === 1 ? -1 : 'unset')),
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
        <GoHeart fill={value ? '#ff0000a5' : 'none'} />
      </animated.div>
      <GoHeart
        fill={value ? '#ff0000a5' : '#000000a5'}
        aria-labelledby={`label-${id}`}
      />
    </StyledButton>
  )
}
