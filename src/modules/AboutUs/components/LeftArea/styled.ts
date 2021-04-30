import styled from 'styled-components'

export const AreaContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.6rem;
  position: relative;
  padding: 0 4rem;
  width: 100%;

  p {
    margin-bottom: 2.4rem;
  }
  a {
    width: fit-content;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 0;
    width: 24.2rem;
  }
`
