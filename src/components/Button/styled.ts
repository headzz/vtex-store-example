import { colors } from 'configuration'
import styled from 'styled-components'

type Link = {
  round: boolean
  icon: 'search' | 'cart' | ''
}
export const ButtonStyled = styled('button')<Link>`
  border: 0;
  border-radius: ${({ round }) => (round ? '50%' : '0')};
  background-color: ${colors.TRANSPARENT};
  outline: 0;
  padding: ${({ icon }) => (icon !== '' ? '' : '1.2rem 2rem')};
  width: ${({ icon }) => (icon !== '' ? 'fit-content' : '100%')};
`
