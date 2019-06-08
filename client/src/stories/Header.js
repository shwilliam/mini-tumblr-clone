import React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import Header from '../components/Header'

storiesOf('Header', module).add('default', () => <Header />)
