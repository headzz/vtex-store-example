import { colors } from 'configuration'
import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 2.4rem;
  position: relative;
  height: 4rem;
  width: 24rem;
`
export const InputStyled = styled.input`
  border: 1px solid ${colors.GREY_LVL1};
  border-radius: 2.4rem;
  color: ${colors.PINK_JUSSI};
  font-size: 1.6rem;
  padding: 0.8rem 4.8rem 0.8rem 1.6rem;
  outline: 0;
  width: 100%;

  ::placeholder {
    color: ${colors.PINK_JUSSI};
    opacity: 1;
  }
`
export const ButtonContainer = styled.div`
  padding-right: 1.6rem;
  position: absolute;
  right: 0;
  top: 0.8rem;
`
