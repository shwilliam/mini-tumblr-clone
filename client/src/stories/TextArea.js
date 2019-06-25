import React from 'react'
import {storiesOf} from '@storybook/react'
import TextArea from '../components/TextArea'

storiesOf('TextArea', module).add('default', () => (
  <TextArea placeholder="Your text here..." />
))
