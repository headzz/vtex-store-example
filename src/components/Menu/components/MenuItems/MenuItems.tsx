import Flexbox from 'components/Flexbox/Flexbox'
import Link from 'components/Link'
import { ItemStyled } from './styled'

type Props = {
  open: boolean
}

const links = [
  {
    href: 'https://jussi.com.br/services.html',
    description: 'Nossas Soluções'
  },
  { href: 'https://jussi.com.br/about.html', description: 'Conheça a Jüssi' },
  { href: '/', description: 'Login' }
]

const MenuItems: React.FC<Props> = ({ open }) => {
  return (
    <>
      {
        <ItemStyled open={open}>
          <Flexbox column alignContent="flexStart">
            {links.map((item, index) => {
              const { href, description } = item
              return (
                <Link
                  href={href}
                  margin
                  background={false}
                  border={false}
                  key={index}
                >
                  {description}
                </Link>
              )
            })}
          </Flexbox>
        </ItemStyled>
      }
    </>
  )
}

export default MenuItems
