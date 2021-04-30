import Link from 'components/Link'
import { NavStyled } from './styled'

const NavLeft: React.FC = () => (
  <NavStyled>
    <Link
      href="https://www.google.com"
      margin={false}
      background={false}
      border={false}
    >
      Nossas Soluções
    </Link>
    <Link
      href="https://www.google.com"
      margin
      background={false}
      border={false}
    >
      Conheça a Jüssi
    </Link>
  </NavStyled>
)
export default NavLeft
