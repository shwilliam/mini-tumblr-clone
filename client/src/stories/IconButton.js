import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {GoTextSize} from 'react-icons/go'
import IconButton from '../components/IconButton'

storiesOf('IconButton', module).add('default', () => (
  <IconButton onClick={action('clicked')} Icon={GoTextSize}>
    <p>Text</p>
  </IconButton>
))
