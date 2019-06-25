import React from 'react'
import {configure, addDecorator} from '@storybook/react'
import ThemeProvider from '../src/theme'

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)

configure(() => require('../src/stories'), module)
