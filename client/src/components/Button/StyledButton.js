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

const getBorderColor = ({btnType, theme}) => {
  switch (btnType) {
    case 'secondary':
      return theme.main
    default:
      return 'transparent'
  }
}

export default styled.button`
  width: 100%;
  color: ${getColor};
  background-color: ${getBgColor};
  border-width: 1px;
  border-color: ${getBorderColor};
  border-radius: 5px;
  cursor: pointer;
`
