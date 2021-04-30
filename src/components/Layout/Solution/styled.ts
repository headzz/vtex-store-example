import { colors } from 'configuration'
import styled from 'styled-components'

export const SolutionStyled = styled.section`
  background-color: ${colors.WHITE};
  padding: 5.6rem 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 5.6rem 20.8rem;
  }
`
