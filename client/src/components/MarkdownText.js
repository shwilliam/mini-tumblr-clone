import styled from 'styled-components'
import ReactMD from 'react-markdown'

export default styled(ReactMD)`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul,
  ol {
    list-style-type: square;
    padding-left: 1.25rem;
  }
`
