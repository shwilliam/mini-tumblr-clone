import React from 'react'
import {storiesOf} from '@storybook/react'
import DisplayPicture from '../components/DisplayPicture'

storiesOf('DisplayPicture', module).add('default', () => (
  <div style={{position: 'relative', marginLeft: '5rem'}}>
    <DisplayPicture email="mail@mail.com" />
  </div>
))
