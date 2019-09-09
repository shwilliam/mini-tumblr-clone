import styled from 'styled-components'

export default styled.form`
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin: 0.2rem 0;
    
    & > *:not(:last-child) {
      margin-right: 0.4rem;
    }
  }
`
