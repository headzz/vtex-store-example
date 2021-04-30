import Flexbox from 'components/Flexbox/Flexbox'
import Layout from 'components/Layout'
import Link from 'components/Link'
import Image from 'next/image'
import { FooterContainer } from './styled'

/**
 * @component
 * @name Footer
 * @description creates Footer component section to use on screen.
 * @namespace components modules/Footer
 *
 */

const Footer: React.FC = () => (
  <Layout.Footer>
    <FooterContainer>
      <Link background={false} margin={false} href="/" border={false}>
        <Image
          src="/img/wppcompany.png"
          height={27}
          width={142}
          alt={'logo do grupo wpp'}
        />
      </Link>

      <Flexbox alignContent="center">
        <Link background={false} margin={false} href="/" border={false}>
          <Image
            src="/img/social/facebook.png"
            height={32}
            width={32}
            alt="rede social facebook"
            layout="fixed"
          />
        </Link>
        <Link background={false} margin={false} href="/" border={false}>
          <Image
            src="/img/social/instagram.png"
            height={32}
            width={32}
            alt="rede social instagram"
            layout="fixed"
          />
        </Link>
        <Link background={false} margin={false} href="/" border={false}>
          <Image
            src="/img/social/linkedin.png"
            height={32}
            width={32}
            alt="rede social linkedin"
            layout="fixed"
          />
        </Link>
      </Flexbox>
    </FooterContainer>
  </Layout.Footer>
)

export default Footer
