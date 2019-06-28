import styled from 'styled-components'
import {getColor, getBorderColor} from './utils'

export default styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-width: 2px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.field};
  border-color: ${getBorderColor};
  border-style: dashed;
  color: ${getColor};
  outline: none;
  transition: border 0.24s ease-in-out;
`
