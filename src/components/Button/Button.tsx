import Cart from 'components/Icons/Cart'
import Search from 'components/Icons/Search'
import Text from 'components/Text'
import { ButtonStyled } from './styled'

const availableIcons = {
  search: <Search />,
  cart: <Cart />
}

type Props = {
  color: string
  icon: 'search' | 'cart' | ''
  round: boolean
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}
/**
 * @component
 * @name Button
 * @description Defines button component.
 * @namespace components components/Button
 * @param {element} children Defining the text from the button.
 * @param {string} color Sets the color of the text inside button.
 * @param {string} icon Sets an icon to the button.
 * @param {boolean} round Sets rounded button.
 * @param {React.MouseEvent<HTMLButtonElement>} clickHandler Creates on click action.
 *
 */
export const Button: React.FC<Props> = ({
  children,
  clickHandler,
  color,
  icon,
  round
}) => (
  <>
    {!icon && (
      <ButtonStyled round={round} onClick={clickHandler}>
        <Text color={color} title="" text="">
          {children}
        </Text>
      </ButtonStyled>
    )}

    {icon !== '' && (
      <ButtonStyled round={round} onClick={clickHandler}>
        {availableIcons[icon]}
      </ButtonStyled>
    )}
  </>
)
