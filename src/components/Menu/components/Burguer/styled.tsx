import styled from 'styled-components'

type Props = {
  open?: boolean
}

export const StyledBurguer = styled('button')<Props>`
  position: fixed;
  top: 2.4rem;
  right: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.2rem;
    background: #0d0c1d;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`
