import React from 'react'
import {Link} from '@reach/router'

const Header = () => (
  <header>
    <Link to="/">
      <h1>mini Tumblr</h1>
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
  </header>
)

export default Header
