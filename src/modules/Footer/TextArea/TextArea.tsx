import Flexbox from 'components/Flexbox/Flexbox'
import Text from 'components/Text'
import { colors } from 'configuration'

const TextArea: React.FC = () => (
  <Flexbox alignContent="center" column>
    <Text text="" title="small" color={colors.WHITE} bold>
      ESSA LOJA FOI CONSTRUÍDA USANDO UMA DAS NOSSAS SOLUÇÕES DA PLATAFORMA
      VTEX. TENHA A SUA.
    </Text>
    <Text text="normal" title="" color={colors.WHITE}>
      Entre em contato
    </Text>
    <Text text="" title="small" color={colors.WHITE}>
      comercial@jussi.com.br
    </Text>
  </Flexbox>
)

export default TextArea
