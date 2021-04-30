import Button from 'components/Button'
import { useState } from 'react'
import { ButtonContainer, Container, InputStyled } from './styled'

/**
 * @component
 * @name Input
 * @description creates Input component to use on screen.
 * @namespace components components/Input
 *
 */
const Input: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <Container>
      <InputStyled
        type="text"
        placeholder="Buscar"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <ButtonContainer>
        <Button
          icon="search"
          color=""
          round={false}
          clickHandler={() => console.log(value)}
        />
      </ButtonContainer>
    </Container>
  )
}

export default Input
