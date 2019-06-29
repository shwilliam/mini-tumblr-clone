import styled from 'styled-components'

export default styled.div`
  ${({theme}) => theme['typography']};
  background-color: ${({theme}) => theme.main};
  min-height: 100vh;
`
