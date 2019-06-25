import React from 'react'
import {storiesOf} from '@storybook/react'
import TextLink from '../components/TextLink'

storiesOf('TextLink', module).add('default', () => (
  <TextLink href="/">I'm a link</TextLink>
))
