import styled from 'styled-components'

export const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  div:nth-child(2) {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    div:nth-child(2) {
      width: 13rem;
    }
  }
`
