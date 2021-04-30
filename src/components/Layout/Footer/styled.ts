import { colors } from 'configuration'
import styled from 'styled-components'

export const FooterStyled = styled.section`
  background-color: ${colors.BLACK};
  padding: 2.4rem 0rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2.4rem 20.8rem;
  }
`
