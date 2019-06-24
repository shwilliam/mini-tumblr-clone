import styled from 'styled-components'

const TextButton = styled.button`
  position: relative;
  border: none;
  background: none;
  padding: 0;
  color: inherit;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

export default TextButton
