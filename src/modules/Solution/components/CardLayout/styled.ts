import { colors } from 'configuration'
import styled from 'styled-components'

export const CardContainer = styled.div`
  border: 1px solid ${colors.GREY_LVL1};
  padding: 1.6rem;
  width: 24rem;

  ul {
    margin: 1.6rem;
  }

  a {
    width: 100%;
  }

  p:nth-child(2) {
    margin-bottom: 1.6rem;
  }
`

export const Circle = styled.div`
  background-color: ${colors.GREY_LVL1};
  border-radius: 50%;
  height: 10rem;
  margin-bottom: 5.2rem;
  width: 10rem;
`
export const FooterCard = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-align: center;
    width: 100%;
  }
`
