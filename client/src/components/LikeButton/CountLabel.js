import styled from 'styled-components'

export default styled.p`
  z-index: 1;
  position: absolute;
  bottom: 25%;
  margin: 0;
  font-size: 0.65rem;
  font-weight: bold;
  line-height: 2;
  opacity: 0.4;
  color: ${({isLiked}) => (isLiked ? 'inherit' : '#fff')};
`
