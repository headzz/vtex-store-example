import styled from 'styled-components'

export const PartnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  p:nth-child(2) {
    display: none;
  }

  & > div {
    margin-bottom: 1.2rem;
  }

  p:first-child {
    margin-bottom: 1.2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    & > div {
      margin-bottom: 0;
    }

    p:first-child {
      margin-bottom: 0;
    }

    p:nth-child(2) {
      display: block;
    }

    #arrow-right {
      display: block;
    }

    #arrow-down {
      display: none;
    }
  }
`
