import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import TextButton from '../components/TextButton'

storiesOf('TextButton', module).add('default', () => (
  <TextButton onClick={action('clicked')}>Click me</TextButton>
))
