import Text from 'components/Text'
import { colors } from 'configuration'
import { TextContainer } from './styled'

const TextArea: React.FC = () => (
  <TextContainer>
    <Text text="" title="small" color={colors.GREEN_JUSSI} bold>
      {'//'}
    </Text>
    <Text text="normal" title="small" color={colors.BLACK} bold>
      NOSSAS SOLUÇÕES
    </Text>
  </TextContainer>
)

export default TextArea
