import Flexbox from 'components/Flexbox/Flexbox'
import Link from 'components/Link'
import Text from 'components/Text'
import { colors } from 'configuration'
import { CardContainer, Circle, FooterCard } from './styled'

type Props = {
  description: string
  features: string[]
  name: string
}
/**
 * @component
 * @name CardLayout
 * @description creates CardLayout component section to use on screen.
 * @namespace components modules/CardLayout
 * @param {string} description Description about the solution offered
 * @param {string} name Name of the solution offered
 * @param {Array<string>} features Describes features that are possible in the solution
 *
 */

const CardLayout: React.FC<Props> = ({ description, name, features }) => (
  <CardContainer>
    <Circle>
      <Flexbox column alignContent="center">
        <Text color="" title="small" text="normal">
          P1
        </Text>
      </Flexbox>
    </Circle>
    <Text color="" title="" text="normal">
      {name}
    </Text>
    <Text color={colors.PINK_JUSSI} title="" text="small">
      {description}
    </Text>
    <div>
      <ul>
        {features.map((item) => (
          <li key={item}>
            <Text color="" title="" text="small">
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </div>

    <FooterCard>
      <Link border={false} background href="/" margin={false}>
        Ver solução
      </Link>
    </FooterCard>
  </CardContainer>
)

export default CardLayout
