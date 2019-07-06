import styled from 'styled-components'

const getColor = ({btnType, theme}) => {
  switch (btnType) {
    case 'secondary':
      return '#000'
    default:
      return '#fff'
  }
}

const getBgColor = ({btnType, theme}) => {
  switch (btnType) {
    case 'secondary':
      return theme.secondary
    default:
      return theme.tertiary
  }
}

export default styled.button`
  width: 100%;
  color: ${getColor};
  background-color: ${getBgColor};
  border-width: 1px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  height: 34px;
`
