import Flexbox from 'components/Flexbox/Flexbox'
import Layout from 'components/Layout'

import LeftArea from './components/LeftArea'
import RightArea from './components/RightArea'

/**
 * @component
 * @name Banner
 * @description creates Banner component section to use on screen.
 * @namespace components modules/Banner
 *
 */

const Banner: React.FC = () => (
  <Layout.Banner>
    <Flexbox alignContent="center">
      <LeftArea />
      <RightArea />
    </Flexbox>
  </Layout.Banner>
)

export default Banner
