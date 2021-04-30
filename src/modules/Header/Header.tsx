import Image from 'next/image'

import Flexbox from 'components/Flexbox/Flexbox'
import Layout from 'components/Layout'
import Menu from 'components/Menu/Menu'

import NavLeft from './components/NavLeft'
import NavRight from './components/NavRight'

/**
 * @component
 * @name Header
 * @description creates Header component section to use on screen.
 * @namespace components modules/Header
 *
 */
const Header: React.FC = () => (
  <Layout.Navigation>
    <Flexbox alignContent="spaceBetween">
      <Flexbox alignContent="flexStart">
        <Image
          src="/img/logoJussiVectorGreen.svg"
          alt="Jüssi logo da empresa"
          width={184}
          height={40}
        />
        <NavLeft />
      </Flexbox>

      <Menu />

      <NavRight />
    </Flexbox>
  </Layout.Navigation>
)
export default Header
