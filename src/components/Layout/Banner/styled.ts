import { colors } from 'configuration'
import styled from 'styled-components'

export const BannerStyled = styled.section`
  background-color: ${colors.GREEN_JUSSI};
  padding: 4rem 0;
  width: 100%;

  #banner-image {
    display: none;
  }

  @media (min-width: 768px) {
    #banner-image {
      display: block;
    }
  }
`
