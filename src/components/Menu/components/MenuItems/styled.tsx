import { colors } from 'configuration'
import styled, { keyframes } from 'styled-components'

type Props = {
  open?: boolean
}

const opened = keyframes`
  0% {
    transform: translate(100%, 0);
  }
  transform: translate(0, 0px);
  100% {
    opacity:1;
  }
}`

export const ItemStyled = styled('div')<Props>`
  animation: ${({ open }) => open && opened} 0.4s ease-in-out 0.4s;
  animation-fill-mode: forwards;
  border: 0;
  background-color: ${colors.GREY_LVL1};
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  &:focus {
    outline: none;
  }

  div {
    align-items: flex-end;
    margin-top: 6.4rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
