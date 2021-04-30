import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    padding: 0 1rem;
    width: 100%;

    p:first-child {
      margin-bottom: 3.2rem;
      text-align: center;
    }
  }
  @media (min-width: 768px) {
    div {
      padding: 0;
      width: 67.6rem;
    }
  }
`
