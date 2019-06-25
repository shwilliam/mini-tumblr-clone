import React from 'react'
import {storiesOf} from '@storybook/react'
import MarkdownText from '../components/MarkdownText'

storiesOf('MarkdownText', module).add('default', () => (
  <MarkdownText
    source={
      '# Heading 1 \n ## Heading 2 \n ### Heading 3 \n - Item 1 \n - Item 2 \n - Item 3'
    }
  />
))
