import styled from 'styled-components'
import { checkFontSize } from './function'

type FontSize = 'small' | 'normal' | ''

type Font = {
  text: FontSize
  title: FontSize
  color?: string
  bold?: boolean
}

export const TextStyled = styled('p')<Font>`
  color: ${(props) => (props.color ? props.color : '')};
  font-size: ${({ text, title }) => checkFontSize(text, title)};
  font-weight: ${(props) => (props.bold ? '700' : '500')};
`
