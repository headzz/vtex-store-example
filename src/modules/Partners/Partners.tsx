import Layout from 'components/Layout'
import PartnersImage from './components/PartnersImage'
import TextContainer from './components/TextContainer'
import { PartnerContainer } from './styled'

/**
 * @component
 * @name Partners
 * @description creates Partners component section to use on screen.
 * @namespace components modules/Partners
 *
 */
const Partners: React.FC = () => {
  return (
    <Layout.Partner>
      <PartnerContainer>
        <TextContainer />
        <PartnersImage />
      </PartnerContainer>
    </Layout.Partner>
  )
}

export default Partners
