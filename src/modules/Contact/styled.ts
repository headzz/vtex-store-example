import styled from 'styled-components'

export const ContactContainer = styled.div`
  margin: 0 auto;
  div {
    padding: 0 1rem;
    width: 100%;

    p:first-child {
      margin-bottom: 3.2rem;
      text-align: center;
    }

    p:nth-child(2) {
      margin-bottom: 0.8rem;
    }
  }

  @media (min-width: 768px) {
    div {
      padding: 0;
      width: 67.6rem;
    }
  }
`
