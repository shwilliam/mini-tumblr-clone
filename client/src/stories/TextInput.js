import React from 'react'
import {storiesOf} from '@storybook/react'
import TextInput from '../components/TextInput'

storiesOf('TextInput', module).add('default', () => (
  <TextInput placeholder="Your text here..." />
))
