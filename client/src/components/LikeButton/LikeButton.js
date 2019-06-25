import React from 'react'
import {useSpring, animated, interpolate} from 'react-spring'
import styled from 'styled-components'
import {GoHeart} from 'react-icons/go'
import TextButton from '../TextButton'

const Button = styled(TextButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`

const CountLabel = styled.p`
  z-index: 1;
  position: absolute;
  bottom: 27.5%;
  margin: 0;
  font-size: 0.6rem;
  opacity: 0.4;
`

const LikeButton = ({value = false, label, id, onClick, ...props}) => {
  const {spring} = useSpring({
    from: {spring: 0},
    spring: value ? 1 : 0,
    config: {duration: 1000},
  })

  return (
    <Button
      title="Heart"
      type="button"
      onClick={onClick}
      style={{position: 'relative'}}
      {...props}
    >
      {label > 0 && <CountLabel id={`label-${id}`}>{label}</CountLabel>}
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
        <GoHeart fill={value ? 'red' : 'grey'} />
      </animated.div>
      <GoHeart fill={value ? 'red' : 'grey'} aria-labelledby={`label-${id}`} />
    </Button>
  )
}

export default LikeButton
