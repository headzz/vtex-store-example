import Layout from 'components/Layout'

import TextArea from './components/TextArea'
import { ContactContainer } from './styled'

/**
 * @component
 * @name Newsletter
 * @description creates Newsletter component section to use on screen.
 * @namespace components modules/Newsletter
 *
 */
const Newsletter: React.FC = () => (
  <Layout.Newsletter>
    <ContactContainer>
      <TextArea />
    </ContactContainer>
  </Layout.Newsletter>
)

export default Newsletter
