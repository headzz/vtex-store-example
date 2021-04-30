import Button from 'components/Button'
import { Dispatch, SetStateAction, useState } from 'react'
import { ButtonContainer, Container, InputStyled, Results } from './styled'

type Species = {
  name: string
  url: string
}

type Props = {
  setParentValue: Dispatch<SetStateAction<string>>
  filtered?: Species[]
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}
/**
 * @component
 * @name Input
 * @description creates Input component to use on screen.
 * @namespace components components/Input
 *
 */
const Input: React.FC<Props> = ({
  setParentValue,
  filtered = [{ name: '', url: '' }],
  clickHandler
}) => {
  const [value, setValue] = useState<string>('')

  const changeValue = (valuewritten: string) => {
    setValue(valuewritten)
    setParentValue(valuewritten)
  }
  return (
    <>
      <Container>
        <InputStyled
          type="text"
          placeholder="Buscar"
          onChange={(event) => changeValue(event.target.value)}
          value={value}
        />
        <ButtonContainer>
          <Button
            icon="search"
            color=""
            round={false}
            clickHandler={clickHandler}
          />
        </ButtonContainer>

        {value.length > 2 && filtered !== undefined && (
          <Results>
            {filtered.map((item) => {
              const { name } = item
              return (
                <Button
                  icon=""
                  round={false}
                  color=""
                  key={name}
                  clickHandler={() => changeValue(name)}
                >
                  {name}
                </Button>
              )
            })}
          </Results>
        )}
      </Container>
    </>
  )
}

export default Input
