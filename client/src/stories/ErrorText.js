import React from 'react'
import {storiesOf} from '@storybook/react'
import ErrorText from '../components/ErrorText'

storiesOf('ErrorText', module).add('default', () => (
  <ErrorText>Something went wrong</ErrorText>
))
