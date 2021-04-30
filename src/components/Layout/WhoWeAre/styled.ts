import { colors } from 'configuration'
import styled from 'styled-components'

export const WhoWeAreStyled = styled.section`
  background: 0;
  background-color: ${colors.WHITE};
  padding: 6.4rem 0;
  width: 100%;

  @media (min-width: 1024px) {
    background: linear-gradient(
      90deg,
      ${colors.WHITE} 50%,
      ${colors.GREY_LVL1} 50%
    );
  }
`
