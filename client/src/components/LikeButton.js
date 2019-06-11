import React from 'react'
import TextButton from './TextButton'
import {GoHeart} from 'react-icons/go'

const LikeButton = ({value = false, onClick, ...props}) => (
  <TextButton title="Heart" type="button" onClick={onClick} {...props}>
    <GoHeart fill={value ? 'red' : 'grey'} />
  </TextButton>
)

export default LikeButton
