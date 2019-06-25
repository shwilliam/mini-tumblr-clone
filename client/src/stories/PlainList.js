import React from 'react'
import {storiesOf} from '@storybook/react'
import PlainList from '../components/PlainList'

storiesOf('PlainList', module).add('default', () => (
  <PlainList>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </PlainList>
))
