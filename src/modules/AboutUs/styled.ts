import styled from 'styled-components'

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
