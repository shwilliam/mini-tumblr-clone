import React from 'react'
import twitterPopup from './twitterPopup'
import ShareButton from '../../components/ShareButton'

export default ({content, ...props}) => (
  <ShareButton onClick={() => twitterPopup(content)} {...props} />
)
