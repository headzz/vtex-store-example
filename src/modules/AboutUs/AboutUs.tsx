import Layout from 'components/Layout'

import LeftArea from './components/LeftArea'
import RightArea from './components/RightArea'
import { AboutUsContainer } from './styled'

/**
 * @component
 * @name AboutUs
 * @description creates AboutUs component section to use on screen.
 * @namespace components modules/AboutUs
 *
 */
const AboutUs: React.FC = () => (
  <Layout.WhoWeAre>
    <AboutUsContainer>
      <LeftArea />
      <RightArea />
    </AboutUsContainer>
  </Layout.WhoWeAre>
)

export default AboutUs
