import styled from 'styled-components'

import SPACING from '../styles/spacing'
import COLORS from '../styles/colors'
const {PAD} = SPACING
const {BLUE, WHITE} = COLORS

const Card = styled.li`
  border: 1px solid ${BLUE};
  margin: ${PAD.H};
  padding: ${PAD.V} ${PAD.H};
  background-color: ${WHITE};
`

export default Card
