import { colors } from 'configuration'
import styled from 'styled-components'

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  p {
    text-align: center;
  }

  p:first-child {
    position: absolute;
    left: -4.8rem;
    top: 0;
  }

  p:nth-child(2) {
    margin-bottom: 3.2rem;
  }
  @media (min-width: 768px) {
  }
`
export const EmailInput = styled.input`
  background-color: ${colors.TRANSPARENT};
  border: 0;
  border-bottom: 1px solid ${colors.GREEN_JUSSI};
  color: ${colors.WHITE};
  font-family: 'Barlow';
  outline: 0;
  padding: 0 9rem 1.8rem 0;
  width: 100%;
`

export const InputContainer = styled.div`
  background-color: ${colors.TRANSPARENT};
  position: relative;
  width: 50rem;

  button {
    font-family: 'Barlow', sans-serif;
    left: calc(100% - 50px);
    position: absolute;
    top: 0;
    width: fit-content;
  }
`
