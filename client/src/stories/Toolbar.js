import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {GoTextSize} from 'react-icons/go'
import Toolbar from '../components/Toolbar'
import IconButton from '../components/IconButton'

storiesOf('Toolbar', module).add('default', () => (
  <Toolbar>
    <IconButton onClick={action('clicked')} Icon={GoTextSize}>
      <p>Text</p>
    </IconButton>
  </Toolbar>
))
