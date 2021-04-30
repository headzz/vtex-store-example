import Layout from 'components/Layout'

import TextArea from './components/TextArea'
import { ContactContainer } from './styled'

/**
 * @component
 * @name Contact
 * @description creates Contact component section to use on screen.
 * @namespace components modules/Contact
 *
 */
const Contact: React.FC = () => (
  <Layout.Contact>
    <ContactContainer>
      <TextArea />
    </ContactContainer>
  </Layout.Contact>
)

export default Contact
