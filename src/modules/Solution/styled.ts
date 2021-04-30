import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
