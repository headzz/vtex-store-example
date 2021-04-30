import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  position: relative;
  width: 90%;

  p:first-child {
    left: 0.8rem;
    position: absolute;
    top: 0;
  }
  p:nth-child(-n + 2) {
    font-size: 3.2rem;
  }

  p:nth-child(3) {
    margin: 1.6rem 0 2.4rem 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 0;
    width: 44.8rem;

    p:first-child {
      left: -8rem;
      top: 0;
    }

    p:nth-child(3) {
      margin: 1.6rem 0 4.4rem 0;
      line-height: 2.4rem;
      width: 32.8rem;
    }

    p:nth-child(-n + 2) {
      font-size: 6.4rem;
    }

    a {
      width: fit-content;
    }
  }
`
