import Button from 'components/Button'
import Flexbox from 'components/Flexbox/Flexbox'
import Input from 'components/Input'
import Link from 'components/Link'
import { HeaderRightStyled } from './styled'

const NavRight: React.FC = () => (
  <HeaderRightStyled>
    <Flexbox alignContent="right">
      <Input />
      <Link
        href="https://www.google.com"
        margin
        background={false}
        border={false}
      >
        Login
      </Link>
      <Button
        icon="cart"
        round={false}
        color=""
        clickHandler={() => console.log('teste')}
      />
    </Flexbox>
  </HeaderRightStyled>
)

export default NavRight
