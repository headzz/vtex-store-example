import { colors, fontSize } from 'configuration'
import styled from 'styled-components'
import { checkDecoration } from './function'

type Props = {
  background: boolean
  border: boolean
  margin: boolean
}
export const LinkStyled = styled('a')<Props>`
  background-color: ${({ background }) =>
    background ? colors.GREEN_JUSSI : colors.TRANSPARENT};
  border-radius: 6px;
  border: ${({ border }) => (border ? `1px solid ${colors.BLACK}` : 'none')};
  color: ${colors.BLACK};
  font-size: ${fontSize.SIZE_TEXT_NORMAL};
  margin-left: ${({ margin }) => (margin ? '3.2rem' : '0')};
  outline: 0;
  padding: 1.2rem 2.4rem;
  text-decoration: none;
  :hover {
    ${({ border, background }) => checkDecoration(border, background)}
  }
`
