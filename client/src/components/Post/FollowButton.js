import styled from 'styled-components'
import TextButton from '../TextButton'

export default styled(TextButton)`
  font-size: 0.75rem;
  color: ${({theme}) => theme.main};
  padding: 0 0.5rem;
`
