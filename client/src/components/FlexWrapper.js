import styled from 'styled-components'

export default styled.div`
  display: flex;

  & > * {
    padding: 0 0.25rem;
    margin-left: 0.5rem;

    &:first-child {
      margin-left: 0;
    }
  }
`
