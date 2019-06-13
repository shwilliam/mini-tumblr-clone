import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import LikeButton from '../components/LikeButton'

storiesOf('LikeButton', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    let isLiked = boolean('Liked', false)

    return <LikeButton value={isLiked} onClick={action('like')} />
  })
  .add('liked', () => <LikeButton value={true} />)
