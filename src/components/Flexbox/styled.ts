import styled from 'styled-components'
import { checkAlignContent } from './function'

type Props = {
  alignContent: 'center' | 'right' | 'spaceBetween' | 'flexStart'
  column?: boolean
  margin?: string
}

export const FlexStyled = styled('div')<Props>`
  ${(props) => checkAlignContent(props.alignContent)};
  align-items: center;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  height: 100%;
  margin: ${({ margin }) => (margin ? margin : 'inherit')};
  width: 100%;
`
