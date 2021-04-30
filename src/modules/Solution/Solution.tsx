import Layout from 'components/Layout'
import Card from './components/Card'
import { CardContainer } from './styled'

import TextArea from './components/TextArea'

/**
 * @component
 * @name Solution
 * @description creates Solution component section to use on screen.
 * @namespace components modules/Solution
 *
 */
const Solution: React.FC = () => (
  <Layout.Solution>
    <TextArea />
    <CardContainer>
      <Card />
    </CardContainer>
  </Layout.Solution>
)

export default Solution
