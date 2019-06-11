import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import LikeButton from '../components/LikeButton'

storiesOf('LikeButton', module).add('default', () => (
  <LikeButton onClick={action('like')} />
))
