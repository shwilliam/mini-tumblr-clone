import styled from 'styled-components'

export default styled.form`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin: 0.2rem 0;
  }
`
