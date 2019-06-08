import React from 'react'
import {Link} from '@reach/router'
import styled from 'styled-components'

import SPACING from '../styles/spacing'
import COLORS from '../styles/colors'
const {PAD} = SPACING
const {BLUE, WHITE} = COLORS

const SiteHeader = styled.header`
  background-color: ${BLUE};
  color: ${WHITE};
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
  }

  h1,
  ul {
    padding: ${PAD.TOP} ${PAD.H} ${PAD.V} ${PAD.H};
  }

  ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    white-space: nowrap;
  }
`

const Mini = styled.span`
  font-size: 0.4em;
  position: relative;
  left: 0.2em;
`

const Header = () => (
  <SiteHeader>
    <Link to="/">
      <h1>
        <Mini>mini</Mini>Tumblr
      </h1>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="auth">Log in</Link>
        </li>
        <li>
          <Link to="new">New post</Link>
        </li>
      </ul>
    </nav>
  </SiteHeader>
)

export default Header
